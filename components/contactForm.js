import {useState} from 'react'
import LoadingIcon from '../components/loadingIcon'
export default function ContactForm(){
    const [name,setName] = useState("")
    const [nameTouched,setNameTouched] = useState(false)
    const [nameError,setNameError] = useState(false)
    const [email,setEmail] = useState("")
    const [emailTouched,setEmailTouched] = useState(false)
    const [emailError,setEmailError] = useState(false)
    const [message,setMessage] = useState("")
    const [messageTouched,setMessageTouched] = useState(false)
    const [messageError,setMessageError] = useState(false)
    const [website,setWebsite] = useState("")
    const [loading,setLoading] = useState(false)
    const [submitError,setSubmitError] = useState(false)
    const [submitSuccess,setSubmitSuccess] = useState(false)
    function submitForm(){
        if(isFormValid()){
            setLoading(true)
            setSubmitError(false)
            fetch(`/api/contact`, {
                method: 'POST', 
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({name,email,message,website}) 
            })
            .then(res=>res.json())
            .then(result=>{
                if(result.status=="success")
                    setSubmitSuccess(true)
                else
                    setSubmitError(true)
                setLoading(false)
            }).catch(err=>{
                setSubmitError(true)
                setLoading(false)
            })  
        }
    }
    function isFormValid(){
        return !nameError && !emailError && !messageError 
    }
    function validateName(val){
        if(val.length < 2)
            setNameError(true)
        else
            setNameError(false)
    }
    function validateEmail(val){
        var re = /\S+@\S+\.\S+/;
        if(!re.test(val))
            setEmailError(true)
        else
            setEmailError(false)
    }
    function validateMessage(val){
        if(val.length < 5)
            setMessageError(true)
        else
            setMessageError(false)
    }
    function onNameChange(val){
        setName(val)
        validateName(val)
        setNameTouched(true)
    }
    function onEmailChange(val){
        setEmail(val)
        validateEmail(val)
        setEmailTouched(true)
    }
    function onMessageChange(val){
        setMessage(val)
        validateMessage(val)
        setMessageTouched(true)
    }
    const btnContent = loading?<LoadingIcon show="true" width="3rem" height="3rem" weight="thin" centered="true" color="black" />:"SEND"
    return (
        <>
        {submitSuccess?
            <div style={{marginTop:"3rem"}} className="slightly-larger-text">Thanks for your message. We will be in touch soon!</div>
        :
            <div className="form">
                <div className="form-group">
                    <input type="text" value={name} onChange={(e)=>onNameChange(e.target.value)} className="underlined-white-input width-100" placeholder="Name" />
                    {nameTouched && nameError &&
                        <div className="error">Name should be atleast 2 characters long.</div>
                    }
                </div>
                <div className="form-group">
                    <input type="email" value={email} onChange={(e)=>onEmailChange(e.target.value)} className="underlined-white-input width-100" placeholder="Email" />
                    {emailTouched && emailError &&
                        <div className="error">Please enter a valid email.</div>
                    }
                </div>
                <div className="form-group">
                    <input type="text" value={message} onChange={(e)=>onMessageChange(e.target.value)} className="underlined-white-input width-100" placeholder="What's on your mind?" />
                    {messageTouched && messageError &&
                        <div className="error">Message should be atleast 5 characters long.</div>
                    }
                </div>
                <div className="form-group special">
                    <input type="text" value={website} onChange={(e)=>setWebsite(e.target.value)} className="underlined-white-input width-100" placeholder="Website" />
                </div>
                <div className="form-group text-center btn-wrapper">
                    <button type="button" className="btn btn-white btn-send futura-mdbt width-100" onClick={()=>submitForm()}>{btnContent}</button>
                </div>
                {submitError &&
                    <div className="text-white">Unable to submit your message at this moment. You might want to check your connection.</div>
                }
            </div>
        }
        <style jsx>{`
            .form-group{
                margin:5rem 0;
            }
        `}</style>
        </>
    )
}