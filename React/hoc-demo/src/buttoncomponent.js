


export default function ButtonComponent (props) {
    return <button onClick={props.handleClick}>
        {props.counter}
    </button>
}