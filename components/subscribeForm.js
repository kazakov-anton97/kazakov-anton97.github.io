import {useState} from 'react'
import LoadingIcon from './loadingIcon'
export default function ApplyForm(){
    const [email,setEmail] = useState("")
    const [emailTouched,setEmailTouched] = useState(false)
    const [emailError,setEmailError] = useState(false)
    const [website,setWebsite] = useState("")
    const [loading,setLoading] = useState(false)
    const [submitError,setSubmitError] = useState(false)
    const [submitSuccess,setSubmitSuccess] = useState(false)
    function submitForm(){
        if(isFormValid()){
            setLoading(true)
            setSubmitError(false)
            fetch(`/api/subscribe`, {
                method: 'POST', 
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({email}) 
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
        return emailTouched && !emailError 
    }
    function validateEmail(val){
        var re = /\S+@\S+\.\S+/;
        if(!re.test(val))
            setEmailError(true)
        else
            setEmailError(false)
    }
    function onEmailChange(val){
        setEmail(val)
        validateEmail(val)
        setEmailTouched(true)
    }
    const btnContent = loading?<LoadingIcon show="true" width="3rem" height="3rem" weight="thin" centered="true" color="black" />:"SEND"
    return (
        <>
        {submitSuccess?
            <div style={{marginTop:"3rem"}} className="slightly-larger-text">Thank you for subscribing to our newsletter.</div>
        :
            <div>
                <div className="email">
                    <input type="email" value={email} onChange={(e)=>onEmailChange(e.target.value)} className="underlined-white-input width-100" placeholder="Email" />
                    {emailTouched && emailError &&
                        <div className="error">Please enter a valid email.</div>
                    }
                </div>
                <div className="subscribe btn-wrapper">
                    <div className="form-group text-center btn-wrapper">
                        <button type="button" className="btn btn-white btn-send futura-mdbt width-100" onClick={()=>submitForm()}>{btnContent}</button>
                    </div>
                </div>
                <div className="form-group special">
                    <input type="text" value={website} onChange={(e)=>setWebsite(e.target.value)} className="underlined-white-input width-100" placeholder="Website" />
                </div>
                {submitError &&
                    <div className="text-white">Unable to subscribe.</div>
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