
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getContctData, updategetInTouchData } from "../../services";
import './index.css';
import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { HiHome } from "react-icons/hi";


export default function Contact() {
    const [contactData, setContactData] = useState(null)
    const [getInTouchData, setGetInTochData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    })
    useEffect(() => {
        fetchContactData()
    }, [])

    const fetchContactData = async () => {
        setContactData((await getContctData()).data);
    }

    const onChangeInputField = (event) => {
        setGetInTochData({ ...getInTouchData, [event.target.name]: event.target.value })
    }

    const submitData = () => {
        const data = {
            name: getInTouchData.name,
            email: getInTouchData.email,
            phone: getInTouchData.phone,
            message: getInTouchData.message,
        }
        updategetInTouchData(data)
    }

    return (
        <div>
            <img className="contact-image" src="/assets/conntact-us-img.webp" />
            <div>
                <div className="bottomDiv">
                    <div>
                        <div className="iconContact"><HiHome /></div>
                        <div className="titleContact">ADDRESS</div>
                        <div className="titleData">{contactData && contactData[0].address}</div>
                    </div>
                    <div>
                        <div className="iconContact"><MdEmail /></div>
                        <div className="titleContact">EMAIL</div>
                        <div className="titleData">{contactData && contactData[0].email}</div>
                    </div>
                    <div>
                        <div className="iconContact"><ImPhone /></div>
                        <div className="titleContact">PHONE</div>
                        <div className="titleData">{contactData && contactData[0].phone[0]}</div>
                    </div>
                </div>
            </div>
            <div className="getInTouchDivOuterDiv">
                <div className="getInTouchDiv">
                    <div className="getInTouchTitle">Get In Touch</div>
                    <input placeholder="name" value={getInTouchData.name} name="name" onChange={onChangeInputField} className="getInTouchInput" />
                    <input placeholder="email" value={getInTouchData.email} name="email" onChange={onChangeInputField} className="getInTouchInput" />
                    <input placeholder="phone" value={getInTouchData.phone} name="phone" onChange={onChangeInputField} className="getInTouchInput" />
                    <textarea placeholder="message" value={getInTouchData.message} name="message" onChange={onChangeInputField} className="getInTouchInput" />
                    <button className="getInTouchSubmit" onClick={submitData}>Submit</button>
                </div>
                <div>
                    <img className="getInTouchImage" src={'/assets/getintouch.png'} />
                </div>
            </div>
        </div>
    )
}