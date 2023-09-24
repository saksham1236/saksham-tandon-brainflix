import './textInput.scss'

function TextInput(props: any) {
    const { name, placeHolder, customClass } = props;
    return(
        <div className={`textInput ${customClass}`}>
            <input type='text' className='textInput__inner' name = {name} placeholder= {placeHolder}></input>
        </div>
    )
}

export default TextInput;