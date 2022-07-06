import { useState } from "react"



export default function OrderForm(props) {
    const [order, setOrder]= useState({
        item:'laptop'
    })
    function updateValue(event){
        console.log(event.target.value)
        setOrder({item:event.target.value})
    }
    return (
        <div>
            <h1>Order form</h1>
            <input value={order.item} onChange={updateValue}></input>
            <div>
            <h1>{props.name}</h1>
            </div>
        </div>
    )
}
