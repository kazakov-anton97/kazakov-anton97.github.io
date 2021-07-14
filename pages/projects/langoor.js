import Head from "next/head"
import { connect } from "react-redux"
import React from "react"
import Layout from "../../components/layout"
import {openMenu,removeClassFromCursor} from "../../redux/actions"
import Arrow from "../../components/arrow"
import Browser from "../../components/browser"
import { Parallax } from 'react-parallax';
import ScrollAnimation from 'react-animate-on-scroll';
import {ANIMATION_DURATION,MOBILE_BREAKPOINT} from '../../config'
import GreyBox from '../../components/greyBox'
import GreyTextBox from '../../components/greyTextBox'
import MoodImage from '../../components/moodImage'
class Langoor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        animate:false,
        isMobile:false
    }
  }
  componentDidMount() {  
    this.props.removeClassFromCursor("white")
    this.setState({isMobile:window.innerWidth < MOBILE_BREAKPOINT?true:false})
    setTimeout(()=>{
        this.props.openMenu(false)
        this.setState({animate:true})
    },300)
    // document.getElementById('video').play();
  }
  render() {
    return (
      <Layout footerType="yellow" navPosition="absolute" navTextColor="black" menuBtnColor="black" footerStyle="yellow">
        <Head>
          <title>Project Langoor | Opposable Thumbs</title>
        </Head>
        <div className={`top text-center ${this.state.animate?"animate":""}`} style={{height:`${this.props.common.windowHeight*0.6}px`}}>
            <div className="vertical-center">
                <div className="project-name overflow-hidden">
                    <div className="child">
                        L’angoor
                    </div>
                </div>
                <div className="slightly-larger-text overflow-hidden">
                    <div className="child">
                        A fruity, tropical wine that is young and fun, created for those <br className="hide-desktop show-mobile" />exploring the world of wines for the first time.
                    </div>
                </div>
            </div>
        </div>
        <video width="100%" autoPlay={true} playsInline={true} muted={true} loop={true} id="video">
            <source src="/videos/langoor.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        {/* <Parallax bgImage="/images/projects/langoor/langoor1.jpg" bgImageAlt="langoor" strength={100}>
            <div className="parallax-content-1"></div>
        </Parallax> */}
        {/* <div>
            <img src="/images/projects/langoor/langoor1.jpg" className="width-100" />
        </div> */}
        <div className="brief-solution padded-content">
            <div className="brief">
                <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                    <div className="brief-heading heading neufreit">The Brief <span className="inline-block arrow-right"><Arrow direction="right" /></span></div>
                    <div className="brief-text desc">
                        Big Banyan is a well-established wine brand in the Southern states of India. Its nuanced flavours appease the palates of sophisticated drinkers. However, they felt the need to tap into a large segment of new wine drinkers who preferred easier and fruitier notes. So Big Banyan wanted to create a new brand of wines that drew them in, teased their explorative spirit and played with their senses. And yet, retained the connect with the parent brand.
                    </div>
                    <div style={{marginTop:"8rem"}}>
                        <MoodImage moodImage="/images/projects/langoor/langoor-left-1.jpg" moods={["Playful","Foliage","Hand Drawn","Clean","Minimal"]} moodsListColor="#F9ED32" />
                        {/* <img src="/images/projects/langoor/langoor-left.jpg" className="width-100" /> */}

                    </div>
                </ScrollAnimation>
            </div>
            <div className="solution">
                <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                    <div className="solution-heading heading neufreit">Solution <span className="inline-block arrow-right"><Arrow direction="right" /></span></div>
                    <div className="solution-text desc">
                        Over a decade ago, Big Banyan’s journey started on the outskirts of Bangalore, near a 400-yr old banyan tree. We went back to these roots to launch the new brand too. The tree is home to many monkeys and that decided the cheeky, mischievous tone we needed (besides the tropical notes of the wines). We deliberately used the Indian word for grape (Angoor) to retain the brand’s Indianness but gave it an international twist. The name, therefore, is a play on the word “grape” and “monkey” (Langoor, a native Indian monkey). From there on, we let our imagination go wild.
                    </div>
                    <div style={{marginTop:"5rem"}}>
                        <img src="/images/projects/langoor/langoor-right-1.jpg" className="width-100" alt='image'/>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
        <div className="explorations text-center">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <div className="exploration-heading futura-light">EXPLORATION 1</div>
                    <div className="exploration-bottom">
                        <img src="/images/projects/langoor/logo1.jpg" className="width-100"alt='image' />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="exploration-heading futura-light">EXPLORATION 2</div>
                    <div className="exploration-bottom">
                        <img src="/images/projects/langoor/logo2.jpg" className="width-100"alt='image' />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="exploration-heading futura-light">EXPLORATION 3</div>
                    <div className="exploration-bottom">
                        <img src="/images/projects/langoor/logo3.jpg" className="width-100"alt='image' />
                    </div>
                </div>
            </div>
        </div>
        <div className="white-cursor white-menu-btn">
            <Parallax bgImage={this.state.isMobile?"/images/projects/langoor/resultbg_mobile.jpg":"/images/projects/langoor/resultbg.jpg"} bgImageAlt="langoor" strength={50}>
                    <div className="result-info">
                        <div className="heading neufreit">The Result <span className="inline-block project-arrow"><Arrow direction="right" /></span></div>
                        <div className="result-desc">
                            We created a brand name, logo and packaging that reflected the tropical flavours, the cheeky, fun nature of the brand and its consumer, and also the elegant sophistication that the parent brand, Big Banyan, is known for.
                        </div>
                    </div>
            </Parallax>
        </div>
        <GreyBox items={["CAPTURING THE STORY","THOUGHTFUL BRANDING","PURPOSEFUL DESIGN"]} />
        <div className="showcase bg-white padded-content">
            <div className="showcase-top">
                <div className="yellow-box futura-light">DESIGN DEVELOPMENT</div>
            </div>
            <div className="playful">
                <div className="row no-gutters">
                    <div className="col-md-6">
                        <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={0}>
                            <div className="langoor4">
                                <div className="langoor4-img">
                                    <MoodImage moodImage="/images/projects/langoor/langoor-4-1.jpg" moods={["Playful","Foliage","Hand Drawn","Clean","Minimal"]} moodsListColor="#ffffff" />
                                </div>
                                {/* <img src="/images/projects/langoor/langoor4.jpg" /> */}
                            </div>
                        </ScrollAnimation>
                    </div>
                    <div className="col-md-6">
                        <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                            <div className="langoor5">
                                <img src="/images/projects/langoor/langoor-right.jpg" alt='image'/>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </div>
        <GreyTextBox heading="Creative process" text={`We were inspired by botanical illustrations from the times of the Raj, when fearless explorers came to India and enlisted Indian artists to hand draw their “discoveries”.`} />
        <div className="bg-white text-center padded-content explorations1">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={0}>
                    <div className="book-style-text futura-light logo-exploration">
                        LOGO EXPLORATIONS
                        <div style={{marginTop:"1rem"}}>
                            <Arrow direction="down" />
                        </div>
                    </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <div className="logo-images">
                    <img src="/images/projects/langoor/langoor6.jpg"alt='image' className="width-100 hide-mobile" />
                    <img src="/images/projects/langoor/langoor6_mobile.jpg"alt='image' className="width-100 show-mobile hide-desktop" />
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={0}>
                <div className="book-style-text futura-light elements-of-design">
                        ELEMENTS OF DESIGN
                        <div style={{marginTop:"1rem"}}>
                            <Arrow direction="down" />
                        </div>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <div style={{marginTop:"7rem"}}>
                    <img src="/images/projects/langoor/langoor7.jpg" className="width-100"alt='image'/>
                </div>
            </ScrollAnimation>
        </div>
        <GreyBox items={["INDIA INSPIRED","INTERNATIONAL APPEAL","FLAVOUR FOCUSED"]} />
        <div className="label-design-options bg-white padded-content">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={0}>
                <div>
                    <div className="yellow-box futura-light">LABEL DESIGN OPTIONS</div>
                </div>
            </ScrollAnimation>
        </div>
        <div className="bg-white padded-content">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <div className="bottles">
                    <span className="the-white bottles-text">the<br/>white</span>
                    <span className="the-red bottles-text">the<br/>red</span>
                    <img src="/images/projects/langoor/langoor8.jpg" className="width-100"alt='image'/>
                </div>
                <div className="hide-desktop show-mobile text-center bottles-mobile">
                    <div className="row">
                        <div className="col-6">
                            <span className="bottles-text">the<br/>white</span>
                        </div>
                        <div className="col-6">
                            <span className="bottles-text">the<br/>red</span>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
        <div className="bg-text langoor9">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={0}>
                <img src="/images/projects/langoor/langoor9.jpg" className="width-100"alt='image'/>
            </ScrollAnimation>
        </div>
        <div className="white-section padded-content">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={0}>
                <div className="heading neufreit">Explorations <Arrow direction="right"/></div>
                <div style={{marginTop:"1.4rem"}} className="explorations-text">
                    We traversed the tropical jungles of India for design inspiration. Fronds, animals and motifs – they were all drawn from our jungles.
                </div>
                {/* <div className="show-mobile hide-desktop text-center" style={{marginTop:"2rem"}}>
                    <Arrow direction="down"/>
                </div> */}
            </ScrollAnimation>
        </div>
        <div className="bg-text langoor10">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <div className="langoor101">
                    <img src="/images/projects/langoor/langoor10.jpg" className="width-100" alt='image'/>
                </div>
            </ScrollAnimation>
        </div>
        <div className="bg-text langoor11 white-cursor white-menu-btn">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <img src="/images/projects/langoor/langoor11.jpg" className="width-100" alt='image'/>
            </ScrollAnimation>
        </div>
        <div className="mood-section bg-white padded-content">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <div className="row no-gutters">
                    <div className="col-md-6">
                        <div className="mood">
                            <MoodImage moodImage="/images/projects/langoor/langoor13.jpg" moods={["Lush","Colourful","Tropical","Explorative","Mischievous"]} moodsListColor="#ffffff" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="langoor12">
                            <img src="/images/projects/langoor/langoor12.jpg" className="width-100" alt='image'/>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
        <GreyBox items={["TROPICAL","MADE IN INDIA","FUN"]} />
        <div className="bg-white position-relative bottom-part">
            <div className="browser position-relative">
                <Browser prev="/projects/big-banyan" next="/projects/enchanteur" />
            </div>
            <img src="/images/wave-yellow-white.gif" className="width-100 wave"alt='image' />
        </div>
        <style jsx>{` 
            .bottom-part{
                padding-top:10rem;
                padding-bottom:20rem;
            }
            .wave{
                width: 100%;
                position: absolute;
                bottom:0;
                left: 0;
                z-index:1;
            }
            .browser{
                z-index:2;
            }
            .animate .project-name .child{
                transition-delay: 0.4s;
            }
            .animate .project-description .child{
                transition-delay: 0.6s;
            }
            .mood{
                padding-right:12%;
                padding-top:11.2rem;
            }
            .langoor10{
                padding-left:13%;
                padding-right:13%;
            }
            .langoor101{
                padding-left:13%;
                padding-right:13%;
            }
            .bottles .the-white{
                position:absolute;
                left: -8rem;
                top:50%;
            } 
            .bottles-text{
                font-size:3.4rem;
                line-height:1;
                text-align:center;
            }
            .bottles .the-red{
                position:absolute;
                right:-4rem;
                top:50%;
            } 
            .bottles{
                position:relative;
                margin-left:10%;
                margin-right:10%;
                margin-top:0;
            }
            .logo-images{
                margin-top:8rem;
            }
            .playful{
                margin-top:7.5rem;
            }
            .langoor5{
                height:100%;
                display:flex;
                flex-flow: column nowrap;
                justify-content:flex-end;
            }
            .langoor4{
                height:100%;
                padding-bottom: 7.5rem;
                padding-top: 7.5rem;
            }
            .langoor4 .langoor4-img{
                width:80%;
            }
            .langoor5 img{
                width:95%;
            }
            .white-section{
                background:#ffffff;
                padding-top:7.5rem;
            } 
            .showcase{
                padding-top: 7.5rem;
                padding-bottom: 7.5rem;
            }
            .label-design-options{
                padding-top:10rem;
                padding-bottom:10rem;
            }
            .result-desc{
                margin-top: 3rem;
            }
            .explorations-text{
                width: 40%;
            }
            .result-info{
                width:50%;
                padding-left:7%;
                padding-right:7%;
                padding-top:10rem;
                padding-bottom:60rem;
                color:#ffffff;
            }
            .exploration-bottom{
                margin:0;
            }
            .explorations{
                padding-top: 7.5rem;
                padding-bottom: 5rem;
                background:#ffffff; 
            }
            .explorations1{
                padding-top:10rem;
                padding-bottom:10rem;
            }
            .exploration-heading{
                letter-spacing:5.46px;
            }
            .solution-images img{
                width:50%;
            }
            // .arrow-right{
            //     margin-left:3.6rem;
            // }
            .brief-solution{
                padding-top:9.5rem;
                display:flex;
                flex-flow:row wrap;
                background:#ffffff;
            }
            .brief{
                width:50%;
                padding-right:10%;
            }   
            .desc{
                margin-top:4.8rem;
            }
            .solution{
                width:50%;
                padding-left:10%;
            }
            .top{
                background:#ffffff;
            }
            .project-name{
                font-size:7rem;
            }
            .project-description{
                font-size:2rem;
                margin-top:5.1rem;
            }
            .elements-of-design{
                margin-top:12rem;
            }
            .langoor9{
                padding-top:10rem;
            }
            .langoor10{
                padding-top:2.1rem;
            }
            .langoor11{
                padding-top:7.5rem;
            }
            .mood-section{
                padding-top:5rem;
                padding-bottom:10rem;
            }
            .market-speak{
                padding-top:23rem;
                padding-bottom:20.3rem
            }
            @media only screen and (max-width:768px){
                .result-info{
                    width:100%;
                }
                .project-name{
                    font-size:4.6rem;
                }
                .project-description{
                    width: 77%;
                    margin-left: 11.5%;
                }
                .brief{
                    width:100%;
                    padding-right:0;
                }
                .solution{
                    width:100%;
                    padding-left:0;
                    margin-top:7rem;
                }
                .brief-solution {
                    padding-top: 7.3rem;
                }
                .solution-images{
                    margin-top:4.8rem;
                }
                .showcase,.label-design-options{
                    padding-top:7.5rem;
                }
                .playful{
                    margin-top:0;
                }
                .langoor4 .langoor4-img,.langoor5 img{
                    width:100%;
                }
                .grey-bg-text-box{
                    padding-top:10.7rem;
                }
                .logo-images{
                    margin-top:8rem;
                    padding-left: 15%;
                    padding-right: 15%;
                }
                .bottles {
                    margin-left: 0;
                    margin-right: 0;
                    margin-top: 0rem;
                }
                .bottles .the-white,.bottles .the-red{
                    display:none;
                }
                .bottles-mobile{
                    padding-top:6.1rem;
                    padding-bottom:8.8rem;
                    padding-left: 9%;
                    padding-right: 9%;
                }
                .langoor9{
                    padding-top:0;
                }
                .langoor11{
                    padding-top:8.5rem;
                }
                .mood-section{
                    padding-left:0;
                    padding-right:0;
                    padding-top:8.5rem;
                }
                .mood{
                    padding-right:0;
                    padding-top:0;
                }
                .langoor12{
                    margin-top:8.7rem;
                }
                .market-speak {
                    padding-top: 15rem;
                    padding-bottom: 10rem;
                }
                .market-speak .p-lr-10 {
                    padding-left: 0%;
                    padding-right: 0%;
                }
                .explorations-text{
                    width:100%;
                }
                .bottom-part{
                    padding-bottom:15rem;
                }
                .result-info{
                    padding-bottom:50rem;
                }
                .langoor101{
                    padding-left:0;
                    padding-right:0;
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
export default connect(mapStateToProps, {openMenu,removeClassFromCursor})(Langoor);
