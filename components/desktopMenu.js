import {connect} from 'react-redux'
import Link from 'next/link'
import Arrow from '../components/arrow'
import LoadingIcon from '../components/loadingIcon'
import {useState,useEffect} from 'react'
import {addClassToCursor,removeClassFromCursor,setMenuBtnColor} from '../redux/actions'
function DesktopMenu(props){
    var [loading,setLoading] = useState(false)
    var [success,setSuccess] = useState(false)
    var [error,setError] = useState(false)
    var [messageText,setMessageText] = useState("")
    var [messageTextTouched,setMessageTextTouched] = useState("")
    var [messageTextValid,setMessageTextValid] = useState(false)
    function mouseOverCursorEffect(){
        props.addClassToCursor("larger")
    }
    function mouseOutCursorEffect(){
        props.removeClassFromCursor("larger")
    }
    function debounce(method, delay) {
        clearTimeout(method._tId);
        method._tId= setTimeout(function(){
            method();
        }, delay);
    }
    function dHandleScroll(){
        let white = false
        let elements = document.querySelectorAll('.white-menu-btn')
        for(let i=0;i<elements.length;i++){
            let boundingVals = elements[i].getBoundingClientRect()
            if(boundingVals.top < 0 && (boundingVals.top * -1 < boundingVals.height)){
                white = true
                break;
            } else {
                white = false                
            }
        }
        if(white)
            props.setMenuBtnColor("white")
        else
            props.setMenuBtnColor("black")
    }
    function handleScroll(){
        // debounce(dHandleScroll, 50);
        // dHandleScroll()
    }
    function mouseOverWhiteCursor(){
        props.addClassToCursor("white")
    }
    function mouseOutWhiteCursor(){
        props.removeClassFromCursor("white")
    }
    function mouseOverBlackCursor(){
        props.removeClassFromCursor("white")
    }
    function addMouseListeners(){
      document.querySelectorAll('.white-cursor').forEach(ele=>{
          ele.addEventListener("mouseenter",mouseOverWhiteCursor)
          ele.addEventListener("mouseleave",mouseOutWhiteCursor)
      })
      document.querySelectorAll('.black-cursor').forEach(ele=>{
        ele.addEventListener("mouseenter",mouseOverBlackCursor)
      })
    }
    function removeMouseListeners(){
        document.querySelectorAll('.white-cursor').forEach(ele=>{
            ele.removeEventListener("mouseenter",mouseOverWhiteCursor)
            ele.removeEventListener("mouseleave",mouseOutWhiteCursor)
        })
    }
    function setWhiteMenuTriggers(){
        // document.querySelectorAll('.white-menu-btn').forEach(ele=>{
        //     console.log(ele)
        // })
    }
    useEffect(()=>{
        // setWhiteMenuTriggers()
        window.addEventListener("scroll", dHandleScroll)
        setTimeout(()=>{
            addMouseListeners()
        },5000)
        return ()=>{
            removeMouseListeners()
            window.removeEventListener("scroll", dHandleScroll)
        }
    }, [])
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
        setMessageTextTouched(true)
        setMessageText(txt)
        validateMessage()
    }
    return (
        <>
        <div className={`desktop-menu white-cursor ${props.common.menuOpen?"show":""}`}>
            <div className="content-wrapper">
                <div className="col1">
                    <div className="col1-content">
                        <div className="menu-logo overflow-hidden">
                            <div className="child">
                                <img src="/images/MenuLogo.svg"alt='image' />
                            </div>
                        </div>
                        <div className="name overflow-hidden">
                            <div className="child">
                                Opposable Thumbs<br/> Independent Agency
                            </div>
                        </div>
                        <div className="rights overflow-hidden">
                            <div className="child">
                                All Rights Reserved
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col2">
                    <div className="menu-heading futura-light overflow-hidden">
                        <div className="child">MENU</div>
                    </div>
                    <ul className="menu poppins-regular larger-cursor list-style-none larger-text">
                        <li className="larger-cursor"><Link href="/"><a>
                            <div className={`nav-text larger-cursor ${props.page=="home"?"current":""}`}>
                                <div className="a">Home</div>
                                <div className="b">Home</div>
                            </div>
                        </a></Link></li>
                        <li className="larger-cursor"><Link href="/projects"><a>
                            <div className={`nav-text larger-cursor ${props.page=="projects"?"current":""}`}>
                                <div className="a">Projects</div>
                                <div className="b">Projects</div>
                            </div>
                        </a></Link></li>
                        <li className="larger-cursor"><Link href="/about"><a>
                            <div className={`nav-text larger-cursor ${props.page=="about"?"current":""}`}>
                                <div className="a">About</div>
                                <div className="b">About</div>
                            </div>
                        </a></Link></li>
                        <li className="larger-cursor"><Link href="/services"><a>
                            <div className={`nav-text larger-cursor ${props.page=="services"?"current":""}`}>
                                <div className="a">Services</div>
                                <div className="b">Services</div>
                            </div>
                        </a></Link></li>
                        <li className="larger-cursor"><Link href="/contact"><a>
                            <div className={`nav-text larger-cursor ${props.page=="contact"?"current":""}`}>
                                <div className="a">Contact</div>
                                <div className="b">Contact</div>
                            </div>
                        </a></Link></li>
                        <li className="larger-cursor"><Link href="/blog"><a>
                            <div className={`nav-text larger-cursor ${props.page=="blog"?"current":""}`}>
                                <div className="a">Blog</div>
                                <div className="b">Blog</div>
                            </div>
                        </a></Link></li>
                    </ul>
                </div>
                <div className="col3">
                <div className="overflow-hidden">
                    {success?
                        <div>Thank you for your message. We will be in touch soon!</div>
                    :
                    <div className="input-wrapper child position-relative">
                        <input type="text" value={messageText} onChange={(e)=>onMessageChange(e.target.value)} placeholder="Send a Message" className="contact-input underlined-white-input width-100"/>
                        <div className="contact-arrow">
                            {loading?
                                <LoadingIcon show="true" width="2.5rem" height="2.5rem" weight="thin" centered="true" color="white" />
                            :
                                <span onClick={()=>sendMessage()}>
                                    <Arrow />
                                </span>
                            }
                        </div>
                    </div>
                    }
                    {!messageTextValid && messageTextTouched &&
                        <div className="error-msg">Message should contain an email address.</div>
                    }
                    {error &&
                        <div className="error-msg">There was an unexpected error sending your message.</div>
                    }
                </div>
                {/* <div className="overflow-hidden">
                    <div className="child">
                        <div className="language">Language</div>
                    </div>
                </div> */}
                <div className="overflow-hidden">
                    <div className="child">
                        <div className="address">
                            <div className="address-title slightly-larger-text">Opposable Thumbs</div>
                            <div className="address-text futura-book">
                                Currently working out of living rooms across India.<br /> 
                                We’ll update our office address when the world’s a tad safer to live in.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <style jsx>{`
            .error-msg{
                text-align:left;
            }
            .contact-input{
                padding-bottom: 1rem !important;
                padding-top: 1rem;
                padding-right:3.5rem;
            }
            .contact-arrow{
                position: absolute;
                right: 0;
                top: 5px;
            }
            .address-text{
                color:#a0a0a0;
            }
            .address{
                margin-top:6rem;
            }
            .language{
                font-family: PoppinsRegular,sans-serif;
                margin-top:5.5rem;
            }
            .name{
                margin-top: 2.2rem;
            }
            .rights{
                color:#96999C;
                margin-top: 0.75rem;
            }
            .menu{
                padding-left:0;
                margin-top:3.4rem;
            }
            .menu-heading{
                font-size:1.4rem;
            }
            .menu li{
                transform: rotateX(540deg);
                transition: transform 800ms, opacity 500ms;
                transition-delay:.3s;
                transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
            }
            .show .menu li{
                transform: rotateX(0deg);
            }
            .menu li a{
                color:#ffffff;
                height: 4.9rem;
                overflow: hidden;
                display: block;
            }
            .nav-text .b{
                color:#F9ED32;
            }
            .nav-text{
                transition: transform 1.2s cubic-bezier(.19,1,.22,1);
            }
            .nav-text.current{
                transform: translateY(-5rem);
            }
            .menu li a:hover span{
                transform: translateY(-105%);
            }
            .menu li a:hover{
                text-decoration:none;
            }
            .col1{
                text-align:center;
                 font-family: PoppinsRegular,sans-serif;
                 font-size:1.4rem;
                // font-family: Neufreit, sans-serif;
                //font-family: FuturaLight, sans-serif;
                //font-family: FuturaBook, sans-serif;
                //font-family: FuturaMDBT, sans-serif;
            }
            .col1-content{
                text-align:left;
                margin:auto;
                display:inline-block;
            }
            .desktop-menu{
                position:fixed;
                width:100%;
                z-index:996;
                background:#000000;
                height:0;
                transition: height 600ms;
                transition-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
                overflow:hidden;
                color:#ffffff;
            }
            .desktop-menu.show{
                height:${props.common.windowHeight}px;
                overflow:scroll;
            }
            .content-wrapper{
                display:flex;
                padding-top:14.4rem;
            }
            .child{
                transform: translateY(100%);
                transition: transform 400ms;
                transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
                transition-delay: 0s;
            }
            .show .child{
                transform: translateY(0%);
                transition-delay: 0.3s;
            }
            .col1{
                width:32.7%;
                flex: 0 0 auto;
            }
            .col2{
                width:35.65%;
                flex: 0 0 auto;
            }
            .col3{
                width:12.9%;
                flex: 0 0 auto;
            }
            // .underlined-white-input{
            //     font-size: 1.4rem;
            // }
            @media only screen and (min-width:768px){
                .menu li a:hover .nav-text{
                    transform: translateY(-5rem);
                }
            }
            @media only screen and (max-width:768px){
                .error-msg{
                    text-align:center;
                }
                .content-wrapper{
                    flex-flow:column nowrap;
                    padding-top:8rem;
                    padding-left:5%;
                    padding-right:5%;
                }
                .col1{
                    width:100%;
                    order:3;
                }
                .col2{
                    width:100%;
                    order:1;
                    text-align:center;
                }
                .col3{
                    width:100%;
                    order:2;
                    text-align:center;
                    margin-top:3rem;
                }   
                .menu-logo,.name{
                    display:inline-block;
                }
                .col1-content{
                    padding-top:2rem;
                }
                .name{
                    font-size: 1.2rem;
                    margin-left: 1rem;
                }
                .rights{
                    text-align:center;
                    font-size:1rem;
                }
                .address{
                    margin-top:3rem;
                }
                .col3 .input-wrapper{
                    width: 60%;
                    margin:auto;
                }
                .col3 .underlined-white-input{
                    width: 100%;
                }
            }
        `}</style>
        </>
    )
}
function mapStateToProps({common}){
    return {common}
}
export default connect(mapStateToProps,{addClassToCursor,removeClassFromCursor,setMenuBtnColor})(DesktopMenu)