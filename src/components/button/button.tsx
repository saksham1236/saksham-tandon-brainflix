import "./button.scss";

function button(props: any) {
  return (
    <>
      <button className="button" type = {props.type} onClick={props.action}>
        <span className="button__icon">
          <img src={props.iconSrc} alt={props.iconAlt} />
        </span>
        <span className="button__label">{props.buttonLabel}</span>
      </button>
    </>
  );
}

export default button;
