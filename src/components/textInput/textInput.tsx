import "./textInput.scss";

function TextInput(props: any) {
  const { name, placeHolder, customClass, id, onChangeFunc } = props;
  if (onChangeFunc) {
    return (
      <div className={`textInput ${customClass}`}>
        <input
          type="text"
          className="textInput__inner"
          name={name}
          placeholder={placeHolder}
          id={id}
          onChange={(e) => onChangeFunc(e)}></input>
      </div>
    );
  } else
    return (
      <div className={`textInput ${customClass}`}>
        <input
          type="text"
          className="textInput__inner"
          name={name}
          placeholder={placeHolder}
          id={id}
        ></input>
      </div>
    );
}

export default TextInput;
