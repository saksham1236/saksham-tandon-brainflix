import './button.scss';

function button(props: any) {
    
    return(
        <>
            <button className = 'button'><span className = 'button__icon'><img src = {props.iconSrc} alt = {props.iconAlt}/></span>{props.buttonLabel}</button>
        </>
    )
}

export default button