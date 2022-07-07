import { useState } from "react"
import './orderform.css';


export default function OrderForm(props) {
    const [order, setOrder] = useState({
        item: 'laptop',
        price: 30,
        tax: 10,
    })
    function updateValue(event) {
        setOrder({ ...order, [event.target.name]: event.target.value })
    }

    function calculate() {
        if (order.tax < 0 || order.price < 0) {
            return "wrong"
        }
        return parseInt(order.price) * (1 + (order.tax / 100));
    }
    function checkingSpreadOperator() {
        const first = [7, 3, 12];
        const second = [89, 5, 90];
        return [...first, ...second];

    }
    return (
        <div className="container">
            <label className="header">Order form</label>
            <div className="row">
                <div className="col-25">
                    <label >item</label>
                </div>
                <div className="col-75">
                    <input value={order.item} id="text" type="text" name='item' onChange={updateValue} />
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label >price</label>
                </div>
                <div className="col-75">
                    <input value={order.price} id="price" type="text" name='price' onChange={updateValue} />
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label >tax</label>
                </div>
                <div className="col-75">
                    <input value={order.tax} id="tex" min="0" max="100" type="range" name='tax' onChange={updateValue} />
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label >Total</label>
                </div>
                <div className="col-75">
                    {calculate()}
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}
