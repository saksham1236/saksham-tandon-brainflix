import Divider from "../../components/divider/divider";
import TextInput from "../../components/textInput/textInput";
import Button from "../../components/button/button";
import publishIcon from "../../assets/Icons/publish.svg";
import imagePreview from "../../assets/Images/Upload-video-preview.jpg";
import "./uploadPage.scss";
import { Link, useNavigate } from "react-router-dom";

function UploadPage() {
    const navigate = useNavigate();
  function uploadHandler(event: any) {
    event.preventDefault();
    alert("Your Video has been published successfully");
    navigate("/saksham-tandon-brainflix");
  }
  return (
    <section className="upload">
      <h1 className="upload__title">Upload Video</h1>

      <Divider />

      <form className="upload__form">
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
                ADD A VIDEO DESCRIPTION
              </h2>
              <TextInput
                name="uploadVideoDescription"
                customClass="upload__form__input__videoDescription"
                placeHolder="Add a description to your video"
              />
            </label>

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
          </div>
        </div>
        <Divider />

        <div className="upload__form__buttons">
          <button type = "button" className="button-secondary" onClick = {uploadHandler}>Cancel</button>

          <Button
            iconSrc={publishIcon}
            iconAlt="Upload Icon"
            buttonLabel="PUBLISH"
            uploadHandler = {uploadHandler}
            type = "submit"
            action = {uploadHandler}
          />
        </div>
      </form>
    </section>
  );
}

export default UploadPage;
