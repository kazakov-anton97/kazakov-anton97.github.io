import Head from "next/head"
import { connect } from "react-redux"
import React from "react"
import Layout from "../components/layout"
import {openMenu} from "../redux/actions"
import ScrollAnimation from 'react-animate-on-scroll';
import {ANIMATION_DURATION} from '../config'
import ContactForm from '../components/contactForm'
import CareerForm from '../components/careerForm'
import SubscribeForm from '../components/subscribeForm'
class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        animate:false,
    }
  }
  componentDidMount() {
    setTimeout(()=>{
        this.props.openMenu(false)
        this.setState({animate:true})
    },300)
  }
  render() {
    return (
      <Layout page="contact" navPosition="absolute" navTextColor="black" menuBtnColor="black" noWaveDesktop={true}>
        <Head>
          <title>Contact | Opposable Thumbs</title>
        </Head>
        <div className={`top position-relative ${this.state.animate?"animate":""}`} style={{minHeight:`${this.props.common.windowHeight}px`}}>
            <div className="position-relative top-content">
                <div className="fun futura-light relative-item overflow-hidden">
                    <div className="child">
                        CONNECT<br className="hide-desktop show-mobile" /> TO CREATE
                    </div>
                </div>
                <div className="top-title relative-item overflow-hidden">
                    <div className="child">
                        Contact us
                    </div>
                </div>
                <div className="bg-text helvetica-neue-condensed overflow-hidden">
                    <div className="child">
                        Let's talk
                    </div>
                </div>
            </div>
            <img src="/images/wave-black.gif" className="top-wave width-100" alt='homecover'/>
        </div>
        <div className="contact-info">
            <div className="top-section text-white white-cursor white-menu-btn">
                    <div className="row no-gutters">
                        <div className="col-md-6">
                                <div className="left">
                                    <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100} offset={300}>
                                        <div className="enquiry show-mobile hide-desktop">
                                            Enquiry
                                        </div>
                                        <div className="slightly-larger-text">
                                            Go on, spill your thoughts and ideas.<br/>
                                            We’ll get back to you as soon as we can.
                                        </div>
                                        <ContactForm />
                                    </ScrollAnimation>
                                </div>
                        </div>
                        <div className="col-md-6">
                                <div className="right">
                                    <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100} offset={300}>
                                        <div className="address-wrapper">
                                            <div className="address-heading bigger-caslon-letter-spacing yello">Address</div>
                                            <div className="address">
                                                <div style={{marginTop:"1.5rem"}}>Want to send us a good ol’ fashioned letter?<br className="hide-mobile"/> Mail it over.</div>
                                                <div style={{marginTop:"2rem"}}><span className="slightly-larger-text">Opposable Thumbs</span><br/>Currently working out of living rooms across India.<br className="hide-desktop show-mobile" />We’ll update our office address when the world’s <br className="hide-desktop show-mobile" />a tad safer to live in.</div>
                                            </div>
                                        </div>
                                        <div className="newsletter-wrapper">
                                            <div className="newsletter-heading bigger-caslon-letter-spacing yello">Newsletter</div>
                                            <div className="signup-insider" style={{marginTop:"1.5rem"}}>
                                                Sign up for insider news and other titbits
                                            </div>
                                            <div style={{marginTop:"1.5rem"}}>
                                                <SubscribeForm />
                                            </div>
                                        </div>
                                    </ScrollAnimation>
                                </div>
                        </div>
                    </div>
            </div>
            <div className="join-us text-white white-cursor white-menu-btn">
                    <div className="row no-gutters">
                        <div className="col-md-6">
                            <div className="left">
                                <div className="join-us-heading">Join Us</div>
                                <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                                    <div className="current-openings">
                                        <div className="current-openings-heading yello bigger-caslon-letter-spacing">Current Openings</div>
                                        <div className="opening">
                                            <div className="position">Junior Writer</div>
                                            <div className="experience">1-2 years experience</div>
                                            <div className="job-desc">We are looking for someone who is digitally savvy, understands campaign ideation and can write like a dream.</div>
                                        </div>
                                        <div className="opening opening2">
                                            <div className="position">Design Trainee</div>
                                            <div className="experience">Intern</div>
                                            <div className="job-desc">Looking to put your education to practical use? Intern with us and learn more about advertising in the real world.</div>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                                <div className="right">
                                    <CareerForm />
                                    {/* <div className="career-form-wrapper">
                                        <div className="form-group">
                                            <input type="text" className="underlined-white-input width-100" placeholder="Name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="underlined-white-input width-100" placeholder="Email" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="underlined-white-input width-100" placeholder="Mobile" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="underlined-white-input width-100" placeholder="Why should we hire you?" />
                                        </div>
                                        <div className="btn-wrapper">
                                            <button type="button" className="btn btn-white btn-send futura-mdbt width-100">SEND</button>
                                        </div>
                                    </div> */}
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
            </div>
            <div className="social">
                <div className="row no-gutters">
                    <div className="col-md-6 social-left">
                        <div className="social-left-content">
                            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                                <div className="text-center">
                                    <div className="social-heading">
                                        Our Social
                                    </div>
                                    <ul className="social-links list-style-none futura-light">
                                        <li><a href="https://www.instagram.com/opposable_thumbs_official/" target="_blank">INSTAGRAM</a></li>
                                        <li><a href="https://www.linkedin.com/in/opposable-thumbs-bb1a9a1b4/" target="_blank">LINKEDIN</a></li>
                                        <li><a href="https://www.facebook.com/opposable.thumbs.750" target="_blank">FACEBOOK</a></li>
                                        <li><a href="https://vimeo.com/user97735237" target="_blank">VIMEO</a></li>
                                    </ul>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                    <div className="col-md-6">
                        {/* <div className="hide-mobile"> */}
                            <img src="/images/banana.jpg" className="width-100" alt='homecover'/>
                        {/* </div> */}
                    </div>
                </div>
            </div>
            <div className="footer-space position-relative">
                <img src="/images/wave-black.gif" className="width-100 wave" alt='homecover' />
            </div>
        </div>
        <style jsx>{`
            .footer-space{
                padding:13rem 0;
                background-color: #ffffff;
            }
            .wave{
                width: 100%;
                position: absolute;
                // bottom: -78%;
                bottom:0;
                left: 0;
            }
            .top-content{
                z-index:2;
            }
            .top-wave{
                position:absolute;
                bottom:0;
                left:0;
                z-index:1;
            }
            .animate .fun .child{
                transition-delay: 0.4s;
            }
            .animate .top-title .child{
                transition-delay: 0.6s;
            } 
            .animate .bg-text .child{
                transition-delay: 0.7s;
            }
            .social-left-content{
                display:flex;
                height:100%;
                justify-content:center;
                flex-flow:column wrap;
            }
            .social-links li a{
                color:#000000;
                text-transform:uppercase;
                letter-spacing:5px;
            }
            .social-links li a:hover{
                color:#fcef3b;
            }
            .social-links li{
                margin:7.5rem 0;
            }
            .social-links li a:hover{
                color:#FFEE00;
                text-decoration:none;
            }
            .social-heading{
                font-size:4.6rem;
            }
            .social-links{
                margin-top:7.47rem;
                padding-left:0;
            }
            .social-left{
                background:#ffffff;
            }
            .experience{
                font-size:1.8rem;
            }
            .job-desc{
                margin-top:1rem;
            }
            .current-openings-heading{
                margin-top:8.5rem;
                margin-bottom:2.7rem;
                // font-size:2.8rem;
            }
            .position{
                font-size:2rem;
            }
            .opening2{
                margin-top:7rem;
            }
            .join-us{
                padding-bottom:10.9rem;
            }
            .join-us-heading{
                font-size:4.6rem;
            }
            .newsletter-wrapper .email{
                margin-top: 1.5rem;
            }
            .newsletter-heading{
                margin-top:2rem;
            }
            .form-group{
                margin:5rem 0;
            }
            .btn-wrapper{
                margin-top:4rem;
            }
            .top-section .form{
                // margin-top:5.2rem;
            }
            .top-section{
                padding-top:5rem;
                padding-bottom:17rem;
            }
            .left{
                padding-left:12.2rem;
                padding-right:7rem;
            }
            .right{
                padding-right:10.2rem;
                padding-left:7rem;
            }
            .yello{
                color:#FFEE00;
            }
            .contact-info{
                background:#000000;
            }
            .relative-item{
                z-index:3;
                position:relative;
            }
            .top{
                padding-top:21.6rem;
                background:#ffffff;
                text-align:center;
            }
            .fun{
                letter-spacing:1.65rem;
                transform: translateX(2rem);
            }
            .top-title{
                font-size:7.2rem;
            }
            .bg-text{
                font-size: 27rem;
                color: #fcef21;
                position: absolute;
                z-index: 2;
                text-align: center;
                width: 100%;
                top: 6rem;
                line-height: 0.8;
            }
            @media only screen and (max-width:768px){
                .top-title{
                    font-size:5.6rem;
                }
                .bg-text{
                    font-size:12rem;
                    top:7.5rem;
                }
                .enquiry{
                    font-size:4.6rem;
                }
                .left,.right{
                    padding-left:5%;
                    padding-right:5%;
                }
                .btn-send{
                    padding-top:1.75rem;
                    padding-bottom:1.75rem;
                }
                .address-wrapper{
                    margin-top:7.5rem;
                }
                .address{
                    margin-top:1rem;
                }
                .newsletter-heading{
                    display:none;
                }
                .signup-insider{
                    margin-top: 4rem;
                    margin-bottom: 3rem;
                }
                .top-section{
                    padding-bottom: 8rem;
                }
                .current-openings-heading{
                    margin-top:0;
                }
                .social-heading{
                    font-size: 4.6rem;
                }
                .social-links{
                    padding-left:0;
                }
                .social-left-content{
                    padding-top: 7rem;
                    z-index:3;
                    position:relative;
                }
                .footer-space{
                    padding:6rem 0;
                }
                .fun{
                    letter-spacing:1.65rem;
                    transform: translateX(1rem);
                }
            }
        `}</style>
      </Layout>
    );
  }
}
function mapStateToProps({ common }) {
  return {
    common,
  };
}
export default connect(mapStateToProps, {openMenu})(Projects);
