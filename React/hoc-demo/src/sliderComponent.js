export default function SliderComponent (props) {
    return<div>
        <p>{props.counter}</p>
        <input type="range" value={props.counter} onClick={props.handleClick}/>
    </div>
}