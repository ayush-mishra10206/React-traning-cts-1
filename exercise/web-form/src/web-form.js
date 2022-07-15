import axios from "axios"
import { useState } from "react"
import CheckboxFrom from "./checkbox-form"
import MainForm from "./main-form"
import './web-form.css'


export default function WebForm() {

    const [fileData, setFileData] = useState({
        title: '',
        route: '',
        docType: '',
        module: '',
    })

    const [checkBoxData, setCheckBoxData] = useState({
        isStandard: false,
        published: false,
        loginRequired: false,
        successLink: false,
        allowEdit: false,
        allowMultiple: false
    })

    const onChangeFileData = (event) => {
        setFileData({ ...fileData, [event.target.name]: event.target.value });
    }

    const onChangeCheckBoxData = (event) => {
        setCheckBoxData({ ...checkBoxData, [event.target.name]: !event.target.defaultChecked });
    }

    const submitForm = () => {
        const checkBoxKeys = Object.keys(checkBoxData);
        let keysWithTrueValue = {};
        checkBoxKeys.forEach(key => {
            if (checkBoxData[key]) {
                keysWithTrueValue = { ...keysWithTrueValue, [key]: checkBoxData[key] }
            }
        })
        const payLoad = {
            ...fileData,
            checkBoxData: { ...keysWithTrueValue }
        }

        axios.post('http://localhost:3000/fileData', payLoad).then(res => {
            console.log('success : ', res.data)
            setFileData({
                title: '',
                route: '',
                docType: '',
                module: '',
            })
            setCheckBoxData({
                isStandard: false,
                published: false,
                loginRequired: false,
                successLink: false,
                allowEdit: false,
                allowMultiple: false
            })
        })
            .then(error => {
                console.log(error);
            })
        // fetch('http://localhost:3000/fileData', {
        //     method: 'POST',
        //     body: JSON.stringify(payLoad),
        //     headers: {
        //         'Content-type': 'application/json'
        //     }
        // })
        console.log('payLoad : ', payLoad)
    }


console.log('checkbox : ', checkBoxData)
    return <div className='container-md d-flex  flex-column  justify-content-between border pb-4 outerContainer p-0'>
        <div className='topDiv align-items-center'>
            <p className="text-center fs-1 fw-bold text-decoration-underline" >FILE FORM</p>
        </div>
        <div className='mt-5 d-flex flex-row justify-content-evenly align-items-center"'>
            <MainForm fileData={fileData} onChangeFileData={onChangeFileData} />
            <CheckboxFrom checkBoxData={checkBoxData} onChangeCheckBoxData={onChangeCheckBoxData} />
        </div>
        <div className="mx-auto mt-4">
            <button className="btn btn-primary btn-lg" onClick={submitForm}>Save</button>
        </div>
    </div>
}