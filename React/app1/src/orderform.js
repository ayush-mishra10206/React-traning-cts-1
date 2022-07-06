import { useState } from "react"



export default function OrderForm(props) {
    const [order, setOrder] = useState({
        item: 'laptop',
        price: 30,
        tax: 10,
    })
    function updateValue(event) {
        setOrder({ ...order, [event.target.name]: event.target.value })
    }

    function calculateTotal() {
        if (order.tax < 0 || order.price < 0) {
            return "wrong"
        }
        return parseInt(order.price) * (1 + (order.tax / 100));
    }
    return (
        <div>
            <h1>Order form</h1>
            <input value={order.item} name='item' onChange={updateValue}></input>
            <input value={order.price} min="0" type="number" name='price' onChange={updateValue}></input>
            <input value={order.tax} min="0" type="number" name="tax" onChange={updateValue}></input>
            Total:{calculateTotal()}
            <div>
            </div>
        </div>
    )
}
