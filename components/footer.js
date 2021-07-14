import LoadingIcon from './loadingIcon'
import {useState} from 'react'
export default function Footer(props){
    var [loading,setLoading] = useState(false)
    var [success,setSuccess] = useState(false)
    var [error,setError] = useState(false)
    var [messageText,setMessageText] = useState("")
    var [messageTextTouched,setMessageTextTouched] = useState(false)
    var [messageTextValid,setMessageTextValid] = useState(false)
    const btnContent = loading?<LoadingIcon show="true" width="3rem" height="3rem" weight="thin" centered="true" color={`${props.type=="yellow"?"white":"black"}`} />:"SEND"
    function sendMessage(){
        if(messageTextValid){
            setLoading(true)
            fetch(`/api/mail`, {
                method: 'POST', 
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({message:messageText}) 
            })
            .then(res=>res.json())
            .then(result=>{
                if(result.status == "success")
                    setSuccess(true)
                else
                    setError(true)
                setLoading(false)
            }).catch(err=>{
                console.log(err)
                setError(true)
                setLoading(false)
            }) 
        }
    }
    function emailInString(text) { 
        var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
        return re.test(text);
    }
    function validateMessage(){
        if(!emailInString(messageText))
            setMessageTextValid(false)
        else
            setMessageTextValid(true) 
    }
    function onMessageChange(txt){
        setMessageText(txt)
        setMessageTextTouched(true)
        validateMessage()
    }
    return (
        <>
            <footer className={`padded-content ${props.type=="yellow"?"yellow":"black white-menu-btn white-cursor"} ${props.noWaveDesktop?"no-wave-desktop":""} ${props.noWaveMobile?"no-wave-mobile":""}`}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <div className="footer-col left">
                            <div className="address-heading bigger-caslon-letter-spacing">Address</div>
                            <div className="address">
                                <div className="address-title slightly-larger-text">
                                    Opposable Thumbs
                                </div>
                                <div className="addr futura-book">
                                    Currently working out of living rooms across India.<br className="hide-desktop show-mobile" /> We’ll update our office address when the world’s <br className="hide-desktop show-mobile" />a tad safer to live in.
                                </div>
                                {/* <div className="google-map-link">
                                    <a href="#">Google Map</a>
                                </div> */}
                            </div>
                            <div className="email">info@opposablethumbs.in</div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="footer-col right">
                            <div className="footer-right-wrap">
                                <div className="contact-form">
                                    {success?
                                        <div>Thank you for your message. We will be in touch soon!</div>
                                    :
                                    <div>
                                        {props.type=="yellow"
                                        ?
                                            <input value={messageText} onChange={(e)=>onMessageChange(e.target.value)} type="text" placeholder="Message" className="underlined-black-input"/>
                                        :
                                            <input value={messageText} onChange={(e)=>onMessageChange(e.target.value)} type="text" placeholder="Message" className="underlined-white-input"/>
                                        }
                                        <button type="button" className={`btn btn-white btn-send ${props.type=="yellow"?"btn-black":"btn-white"}`} onClick={()=>sendMessage()}>{btnContent}</button>
                                        {!messageTextValid && messageTextTouched &&
                                            <div className="error-msg">Message should contain an email address.</div>
                                        }
                                        {error &&
                                            <div className="error-msg">There was an unexpected error sending your message.</div>
                                        }
                                    </div>
                                    }
                                </div>
                                <div className="social slightly-larger-text futura-light">
                                    <ul>
                                        <li><a href="https://www.instagram.com/opposable_thumbs_official/" target="_blank">INSTAGRAM</a></li>
                                        <li><a href="https://www.linkedin.com/in/opposable-thumbs-bb1a9a1b4/" target="_blank">LINKEDIN</a></li>
                                        <li><a href="https://www.facebook.com/opposable.thumbs.750" target="_blank">FACEBOOK</a></li>
                                        <li><a href="https://vimeo.com/user97735237" target="_blank">VIMEO</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <style jsx>{`
                .error-msg{
                    text-align:left;
                }
                .social a{
                    color:inherit;
                }
                .social a:hover{
                    color:inherit;
                    text-decoration:none;
                }
                .underlined-white-input,.underlined-black-input{
                    width:35rem;
                    max-width: 100%;
                    transform: translateY(0.75rem);
                }
                .contact-form{
                    margin-top: 12rem;
                }
                .contact-form .underlined-white-input,.contact-form .underlined-black-input{
                    margin-right:2rem;
                }
                .social{
                    margin-top: 10rem;
                }
                .social ul li {
                    display:inline-block;
                    letter-spacing:4.25px;
                }
                .social ul li:not(:last-child){
                    margin-right: 5rem;
                }
                .social ul{
                    list-style:none;
                    padding-left:0;
                }
                .google-map-link a{
                    color:inherit;
                }
                footer.yellow .address-heading{
                    color:#010101;
                }
                footer.black .address-heading{
                    color:#ffffff;
                }
                .address{
                    margin-top:4.1rem;
                }
                footer.black{
                    color:#ffffff;
                    background:#000000;
                }
                footer.yellow{
                    color:#000000;
                    background:#ffff20;
                }
                footer{
                    // position:fixed;
                    // bottom:0;
                    width:100%;
                    //z-index:1;
                    padding-top:4rem;
                    padding-bottom:5rem;
                }
                .email{
                    margin-top:5.2rem;
                }
                .footer-col.left{
                    margin-left:10%;
                }
                .footer-col.right{
                    text-align:right;
                }
                .footer-right-wrap{
                    display:inline-block;
                    text-align:center;
                }
                footer.no-wave-desktop{
                    padding-top:10rem;
                }
                @media only screen and (max-width:1260px){
                    .social ul li:not(:last-child) {
                        margin-right:3rem;
                    }
                    .btn-send{
                        margin-top: 3rem;
                        width: auto;
                    }
                    .error-msg{
                        text-align:center;
                    }
                }
                @media only screen and (max-width:768px){
                    .contact-form {
                        margin-top: 6rem;
                        margin-left:10%;
                        margin-right:10%;
                    }
                    .btn-send{
                        margin-top: 5rem;
                        width: 100%;
                    }
                    .social{
                        margin-top:9rem;
                        text-align:center;
                    }
                    .social ul li {
                        margin-right: 0 !important;
                        display:block;
                        margin-top:6.4rem;
                    }
                    .footer-col.right{
                        text-align:center;
                    }
                    .footer-col.left{
                        text-align:center;
                        margin-left:0;
                    }
                    .footer-right-wrap{
                        display:block;
                        text-align:center;
                    }
                    .error-msg{
                        text-align:center;
                    }
                }
            `}</style>
        </>
    )
}