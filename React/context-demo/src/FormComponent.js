import { useEffect, useState } from "react";

import './FormComponent.css'

export default function ContactForm() {

    // const [department, setDepartment] = useState("");
    // const [message, setMessage] = useState("");
    // const [agreedToTerms, setAgreedToTerms] = useState(false);

    const [formData, setFormData] = useState({
        department:"",
        message:"",
        agreedToTerms :false
    })

    const [departmentError, setDepartmentError] = useState(null);
    const [messageError, setMessageError] = useState(null);
    const [agreedToTermsError, setAgreedToTermsError] = useState(null);

    const [departmentTouched, setDepartmentTouched] = useState(false);
    const [messageTouched, setMessageTouched] = useState(false);
    const [agreedToTermsTouched, setAgreedToTermsTouched] = useState(false);


    // const [formViewData, setFormViewData] = useState({

    // })

    const onChangeDepartment = (event) => {
        setFormData({...formData, department:event.target.value})
    }
    const onChangeMessage = (event) => {
        setFormData({...formData, message:event.target.value})
    }
    const onChangeAggrement = (event) => {
        setFormData({...formData, agreedToTerms:event.target.checked})
    }

    useEffect(() => {
        validate();
    }, [formData.department, formData.message, formData.agreedToTerms])

    const validate = () => {
        setDepartmentError(null);
        setMessageError(null);
        setAgreedToTermsError(null)
        if (formData.department === "") {
            setDepartmentError("please fill department");
        }
        if (formData.message === "") {
            setMessageError("please fill message")
        }
        if (formData.agreedToTerms === "") {
            setAgreedToTermsError("please select terms")
        }

    }

    const onBlueDepartment = (event) => {
        setDepartmentTouched(true)
    }
    const onBlueMessage = (event) => {
        setMessageTouched(true)
    }
    const onBlueAggrement = (event) => {
        setAgreedToTermsTouched(true)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const isValidForm = !departmentError && !messageError && !agreedToTermsError;
        if (!isValidForm) {
            return;
        }
        console.log('onSubmit data : ', formData.department, formData.message, formData.agreedToTerms)
    }

    const outputInString = () => {
        return JSON.stringify(
          {
            values: { department:formData.department, message:formData.message, agreedToTerms:formData.agreedToTerms },
            errors: { departmentError, messageError, agreedToTermsError },
            touched: { departmentTouched, messageTouched, agreedToTermsTouched },
          },
          null,
          " "
        );
      }

    return (
        <form onSubmit={onSubmit}>
            <select
                name="department"
                value={formData.department}
                onChange={onChangeDepartment}
                onBlur={onBlueDepartment}
            >
                <option value="">Select...</option>
                <option value="hr">Hr</option>
                <option value="pr">pr</option>
                <option value="support">Support</option>
            </select>
            <br />
            {
                departmentError && departmentTouched && <p className="alert">{departmentError}</p>
            }
            <br />
            <textarea
                name="message"
                value={formData.message}
                onChange={onChangeMessage}
                onBlur={onBlueMessage}
            />
            <br />
            {
                messageError && messageTouched && <p className="alert">{messageError}</p>
            }
            <input
                type="checkbox"
                name="agreedToTerms"
                checked={formData.agreedToTerms}
                onChange={onChangeAggrement}
                onBlur={onBlueAggrement}
            />
            I agree
            <br />
            {
                agreedToTermsError && agreedToTermsTouched && <p className="alert">{agreedToTermsError}</p>
            }
            <button>Send</button>
            <pre>{outputInString()}</pre>
        </form>
    )
}