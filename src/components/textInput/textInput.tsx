import './textInput.scss'

function TextInput(props: any) {
    const { name, placeHolder, customClass, id } = props;
    return(
        <div className={`textInput ${customClass}`}>
            <input type='text' className='textInput__inner' name = {name} placeholder= {placeHolder} id = {id}></input>
        </div>
    )
}

export default TextInput;