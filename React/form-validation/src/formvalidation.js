import { useState } from "react"
import './formvalidation.css'

export default function FormValidation(props) {

    const [userData, setUserData] = useState({
        emailId: '',
        passWord: '',
        confirmPassword: ''
    })

    function onChangeUserData(event) {
        setUserData({
            ...userData, [event.target.name]: event.target.value
        })
    }

    function onSubmitData(){
        console.log('password : ', userData.passWord);
        console.log('password : ', userData.confirmPassword);
        const payload = {
            emailId:userData.emailId,
            passWord:userData.passWord,
            confirmPassword:userData.confirmPassword
        }
        if((userData.emailId ===""|| userData.confirmPassword ==="" || userData.passWord === "" )){
            return;
        }
        if(userData.passWord !== userData.confirmPassword){
            return;
        }

        fetch("http://localhost:3000/userData",{
            method:'POST',
            body:JSON.stringify(payload),
            headers: {
                'Content-type': 'application/json'
            }
        })
    }

    return (
        <div className="outerContainer">
            <div className="header">
                USER FORM
            </div>
            <div className="row">
                <div className="col-25">
                    <label> Email ID :</label>
                </div>
                <div className="col-75">
                    <input className='inputField' value={userData.emailId} name="emailId" onChange={onChangeUserData} ></input>
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label>Password :</label>
                </div>
                <div className="col-75">
                    <input className='inputField' value={userData.passWord} type="password" name="passWord" onChange={onChangeUserData}></input>
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label> Confirm Password :</label>
                </div>
                <div className="col-75">
                    <input className='inputField' value={userData.confirmPassword} type="password" name="confirmPassword" onChange={onChangeUserData}></input>
                </div>
            </div>
            <button className="submitButton" onClick={onSubmitData}>Submit</button>
            {
                userData.passWord !== userData.confirmPassword ? <div className='errorMessage'>
                    Password and confirm password did not matched
                </div>
                    : null
            }

        </div>
    )
}