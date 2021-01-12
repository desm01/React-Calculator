function Button(props) {

        const style = {
            
            
            fontSize : '4vw',
            borderRadius : '20%',
            backgroundColor : '#003366',
            color : 'white',
            border: 'none'
        }

        const padding = {
            padding : '10px',
            height : '100%',

        }

    return (
        <div style = {padding}>
            <button style = {style} onClick= { ()  => props.handler(props.character)} >{props.character}</button>
        </div>
    )
}

export default Button;