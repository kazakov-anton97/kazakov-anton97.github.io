import Head from "next/head"
import { connect } from "react-redux"
import React from "react"
import Layout from "../components/layout"
import Arrow from "../components/arrow"
import {openMenu,setMenuBtnColor} from "../redux/actions"
import { Parallax } from 'react-parallax';
import ScrollAnimation from 'react-animate-on-scroll';
import {ANIMATION_DURATION} from '../config'
class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        animate:false
    }
  }
  handleScroll = ()=>{
      if(window.pageYOffset < 10){
          setTimeout(()=>{
            this.props.setMenuBtnColor("white")        
          },100)
      }
  }
  componentDidMount() {
    this.props.setMenuBtnColor("white")
    setTimeout(()=>{
        this.props.openMenu(false)
        this.setState({animate:true})
    },300)
    window.addEventListener("scroll", this.handleScroll)
  }
  componentWillUnmount(){
    window.removeEventListener("scroll", this.handleScroll)
    this.props.setMenuBtnColor("black")
  }
  render() {
    return (
      <Layout page="services" navPosition="absolute" navTextColor="white" menuBtnColor="white"> 
        <Head>
          <title>Services | Opposable Thumbs | Brand Identity Agency</title>
       <meta name="description" content=" We can also help existing brands with their identity, by examining what works and what doesn’t, using consumer research, brand insights and creative intuition."/>
        </Head>
        <div className="top position-relative white-cursor white-menu-btn">
            <div className={`top-content ${this.state.animate?"animate":""}`}>
                <div className="top-heading overflow-hidden">
                    <div className="child">
                        Services
                    </div>
                </div>
                <div className="top-subheading neufreit overflow-hidden">
                    <div className="child">
                        What we love doing
                    </div>
                </div>
                <div className="top-small-text futura-mdbt overflow-hidden">
                    <div className="child">
                        CHOOSE ONE. CHOOSE ALL.
                    </div>
                </div>
            </div>
            <img src="/images/wave-white-black-1.gif" className="top-wave width-100" alt='homecover'/>
        </div>
        <div className="hide-desktop show-mobile" style={{marginTop:"3rem"}}>
            <Parallax bgImage="/images/services/branding.jpg" bgImageAlt="graphics" strength={200} className="service-image">
                <div className="service-parallax-content"></div>
            </Parallax>
        </div>
        <div className="top-service position-relative">
            <div className="service-top-img-wrapper hide-mobile">
                <div className="service-image-wrapper">
                    <Parallax bgImage="/images/services/branding.jpg" bgImageAlt="graphics" strength={200} className="service-image">
                        <div className="service-parallax-content"></div>
                    </Parallax>
                </div>
            </div>
            <div className="top-service-left">
                <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                    <div className="service-heading neufreit">
                        Branding <span className="service-arrow inline-block"><Arrow direction="right" /></span>
                    </div>
                    <div className="service-text">
                    If you have a new brand to launch, we can help you, right from naming it to developing its identity, and creating a Brand Bible to lay down the tenets for future creative teams. We can also help existing brands with their identity, by examining what works and what doesn’t, using consumer research, brand insights and creative intuition. We can revamp identity to make it more relevant and contemporary, or to express the brand’s new vision, story and purpose.
                    </div>
                </ScrollAnimation>
            </div>
        </div>
        <div className="other-services-wrapper position-relative">
            <div className="service">
                <div className="service-left service-col">
                    <div className="service-image-wrapper">
                        <Parallax bgImage="/images/services/packaging1.jpg" bgImageAlt="graphics" strength={75} className="service-image">
                            <div className="service-parallax-content"></div>
                        </Parallax>
                    </div>
                </div>
                <div className="service-right service-col">
                    <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                        <div className="service-info-wrapper">
                            <div className="service-info-heading neufreit">Packaging <span className="service-arrow inline-block"><Arrow direction="right" /></span></div>
                            <div className="service-info">
                                The sheer idea of giving a product an eye-catching form excites us. Packaging brings out our uninhibited imagination. It gets us to explore the many ways to bring a product’s identity alive, give it a “pick-me!” appeal in the consumer’s universe and create something visionary in the process. From designing labels to creating packaging from scratch (involving its form), we can help your brand optimise efficiencies based on your requirements.
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
            <div className="service">
                <div className="service-left reverse-order service-col">
                    <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                        <div className="service-info-wrapper">
                            <div className="service-info-heading neufreit">Advertising <span className="service-arrow inline-block"><Arrow direction="right" /></span></div>
                            <div className="service-info">
                                While we steer clear of labels like “traditional” advertising, we simply love ads for the offline media. We love the art of telling a brand story through print, film and radio. Our ability to break down insights, chalk up the right strategy for different media, and tell compelling narratives gives us an edge. We also have the expertise to envision the campaign for digital media, thus making the communication truly robust.
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
                <div className="service-right service-col reverse-order">
                    <div className="service-image-wrapper">
                        <Parallax bgImage="/images/services/advertisement1.jpg" bgImageAlt="graphics" strength={200} className="service-image">
                            <div className="service-parallax-content"></div>
                        </Parallax>
                    </div>
                </div>
            </div>
            <div className="service">
                <div className="service-left service-col">
                    <div className="service-image-wrapper">
                        <Parallax bgImage="/images/services/socialmedia1.jpg" bgImageAlt="graphics" strength={200} className="service-image">
                            <div className="service-parallax-content"></div>
                        </Parallax>
                    </div>
                </div>
                <div className="service-right service-col">
                    <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                        <div className="service-info-wrapper">
                            <div className="service-info-heading neufreit">Social Media <span className="service-arrow inline-block"><Arrow direction="right" /></span></div>
                            <div className="service-info">
                                Who’s not on it! We help brands reach out to their consumers on social media in a meaningful, interesting and engaging manner. Whether you require a campaign, or ongoing daily conersations, we can help you with it. We keep it fun, spontaneous and in-the-moment to make brands relevant in the consumer’s lives.
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
            <div className="service">
                <div className="service-left service-col reverse-order">
                    <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                        <div className="service-info-wrapper">
                            <div className="service-info-heading neufreit">Graphics <span className="service-arrow inline-block"><Arrow direction="right" /></span></div>
                            <div className="service-info">
                                If you’ve got an idea, we can give it a visual expression. Graphics are key to any brand, whether it is livening up a space, making merchandise eye-catching, imparting information, or for any other purpose. A simple brief stating your requirement is all we need to find the most creative interpretation. We also work in collaboration with other creative teams and artists to create stunning design. <br />
                                (Image credit: Latheesh, for a campaign we conceived for Silk Route Escapes, an experiential travel company, and one of our clients)
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
                <div className="service-right service-col reverse-order">
                    <div className="service-image-wrapper">
                        <Parallax bgImage="/images/services/graphics1.jpg" bgImageAlt="graphics" strength={200} className="service-image">
                            <div className="service-parallax-content"></div>
                        </Parallax>
                    </div>
                </div>
            </div>
            <img src="/images/wave-black.gif" className="width-100 wave" alt='homecover' />
        </div>
        <style jsx>{`
            .wave{
                width: 100%;
                position: absolute;
                bottom:-2px;
                left: 0;
            }
            .animate .top-heading .child{
                transition-delay: 0.4s;
            }
            .animate .top-subheading .child{
                transition-delay: 0.6s;
            } 
            .animate .top-small-text .child{
                transition-delay: 0.7s;
            }
            .top-content{
                position:relative;
                z-index:2;
                margin-bottom: 16rem;
            }
            .top-wave{
                position:absolute;
                bottom:-1px;
                left:0;
                z-index:1;
            }
            .service-info-wrapper{
                display:flex;
                flex-flow:column nowrap;
                justify-content:center;
                height:100%;
            }
            .service-info-heading{
                font-size:4.6rem;
            }
            .service-info{
                margin-top:4.8rem;
            }
            .service{
                display:flex;
                flex-flow:row wrap;
                margin-top:15.6rem;
                margin-bottom:15.6rem;
            }
            .service-left{
                padding-left:6.4rem;
            }
            .service-right .service-info-wrapper{
                padding-left:10rem;
                padding-right:6.7rem;
            }
            .service-right .service-image-wrapper{
                padding-right:6.4rem;
            }
            .service-parallax-content{
                padding-top:120%;
            }
            .service-left .service-info-wrapper{
                padding-left:6.5rem;
                padding-right:10rem;
            }
            .service-col{
                width:50%;
                flex:0 0 auto;
            }
            .other-services-wrapper{
                padding-top:17.6rem;
                // padding-top:8rem;
                background:#ffffff;
            }
            .other-services-wrapper .service:last-child{
                margin-bottom:0;
            }
            .other-services-wrapper{
                padding-bottom:15.6rem;
            }
            .top-service{
                background: #ffffff;
                padding-top: 5rem;
                padding-bottom:10rem;
                padding-left:6.4rem;
            }
            .top-service-left{
                width: 40%;
                padding-left:5%;
            }
            .service-top-img-wrapper{
                position: absolute;
                width: 44%;
                top: -15rem;
                z-index:3;
                right: 6.5rem;
            }
            .service-heading{
                font-size:4.6rem;
            }
            .service-text{
                margin-top:4.8rem;
            }
            .top{
                background:#000000;
                color:#ffffff;
                padding-top:18.3rem;
                padding-left:18rem;
                padding-bottom:10rem;
            }
            .top-heading{
                font-size: 4.6rem;
                color: #F9ED32;
            }
            .top-subheading{
                font-size: 7rem;
                color: #ffffff;
                margin-top: -1.5rem;
            }
            .top-small-text{
                font-size:10px;
                letter-spacing:1.5rem;
            }
            @media only screen and (max-width:768px){
                .top-service-left{
                    padding-left:0;
                }
                .top-heading{
                    font-size:5.6rem;
                }
                .top {
                    padding-left: 3rem;
                }
                .top-small-text{
                    letter-spacing:6px;
                }
                .service-heading{
                    font-size:4.8rem;
                }
                .top-service{
                    padding-left:5%;
                    padding-right:5%;
                }
                .top-service-left{
                    width:100%;
                }
                .service-col{
                    width:100%;
                }
                .service-left{
                    padding-left:0;
                }
                .other-services-wrapper{
                    padding-top:0;
                }
                .service{
                    margin-top:0;
                    margin-bottom:0;
                }
                .service-right .service-info-wrapper,.service-left .service-info-wrapper {
                    padding-left: 5%;
                    padding-right: 5%;
                }
                .service-left.reverse-order{
                    order:2;
                }
                .service-right.reverse-order{
                    order:1;
                }
                .service-right .service-image-wrapper {
                    padding-right: 0;
                }
                .service-info-wrapper{
                    padding-top:5.5rem;
                    padding-bottom:5.5rem;
                }
                .service-info-heading{
                    font-size:4.6rem;
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
export default connect(mapStateToProps, {openMenu,setMenuBtnColor})(Projects);
