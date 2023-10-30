import Divider from "../../components/divider/divider";
import TextInput from "../../components/textInput/textInput";
import Button from "../../components/button/button";
import publishIcon from "../../assets/Icons/publish.svg";
import "./uploadPage.scss";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError, AxiosResponse } from "axios";
import { fetchUrlLocal } from "../../components/routes/fetchUrl";
import { useState } from "react";

function UploadPage() {

  const[imagePreview, setImagePreview] = useState(`${fetchUrlLocal}/images/image0.jpeg`);
  const navigate = useNavigate();

  //form handler
  function uploadHandler(event: any) {
    event.preventDefault();
    console.log(event.target.uploadVideoTitle.value);
    const videoTitle = event.target.uploadVideoTitle.value;
    const videoDescription = event.target.uploadVideoDescription.value;
    const imageUrl = imagePreview;
    console.log(imageUrl);
    
    const newVideoData = {
      "title": videoTitle,
      "description": videoDescription,
      "imageUrl": imageUrl
    }

    axios.post(`${fetchUrlLocal}/videos/upload`, newVideoData)
    .then((response:AxiosResponse) => {
      if(response.status === 201) {
        alert("Video Uploaded Succesfully")
        navigate("/saksham-tandon-brainflix");
      }
    }).catch((error:AxiosError) => {
      console.log(error);
      alert(`video upload failed:${error}`);
    })
  }

  function cancelUpload(event: React.FormEvent) {
    const action = window.confirm("Do you want to cancel the Upload?");
    if (action) {
      navigate("/saksham-tandon-brainflix");
    }
  }

  function previewUpdate(event:any){
    const imagePreview = event.target.value;
    if(imagePreview){
      axios.get(imagePreview)
      .then((response) => setImagePreview(imagePreview))
      .catch((error) => {
        console.log(error);
        setImagePreview(`${fetchUrlLocal}/images/404notfound.png`)
      })
    } else {
      setImagePreview(`${fetchUrlLocal}/images/image0.jpeg`)
    }
  }

  return (
    <section className="upload">
      <h1 className="upload__title">Upload Video</h1>

      <Divider />

      <form className="upload__form" onSubmit={uploadHandler}>
        <div className="upload__form__inner">
          <div className="upload__form__thumbnail">
            <h2 className="upload__form__thumbnail__title subtitle">
              VIDEO THUMBNAIL
            </h2>

            <img
              className="upload__form__thumbnail__image"
              src={imagePreview}
              alt="videoThumbnail"
            />
          </div>
          <div className="upload__form__input">

          <label>
              <h2 className="upload__form__input__label subtitle">
                TITLE YOUR VIDEO
              </h2>
              <TextInput
                name="uploadVideoTitle"
                customClass="upload__form__input__videoTitle"
                placeHolder="Add a title to your video"
              />
            </label>

            <label>
              <h2 className="upload__form__input__label subtitle">
                ADD A CUSTOM IMAGE THUMBNAIL
              </h2>
              <TextInput
                name="uploadVideoImageUrl"
                customClass="upload__form__input__videoDescription"
                placeHolder="Use a custom Image URL"
                onChangeFunc = {previewUpdate}
              />
            </label>

            <label>
              <h2 className="upload__form__input__label subtitle">
                ADD A VIDEO DESCRIPTION
              </h2>
              <TextInput
                name="uploadVideoDescription"
                customClass="upload__form__input__videoDescription"
                placeHolder="Add a description to your video"
              />
            </label>
          </div>
        </div>
        <Divider />

        <div className="upload__form__buttons">
          <button
            type="button"
            className="button-secondary"
            onClick={cancelUpload}>
            Cancel
          </button>

          <Button
            iconSrc={publishIcon}
            iconAlt="Upload Icon"
            buttonLabel="PUBLISH"
            type="submit"
          />
        </div>
      </form>
    </section>
  );
}

export default UploadPage;
