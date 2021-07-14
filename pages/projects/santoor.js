import Head from "next/head"
import { connect } from "react-redux"
import React from "react"
import Layout from "../../components/layout"
import {openMenu,removeClassFromCursor} from "../../redux/actions"
import Arrow from "../../components/arrow"
import { Parallax } from 'react-parallax';
import Browser from "../../components/browser"
import ScrollAnimation from 'react-animate-on-scroll';
import {ANIMATION_DURATION} from '../../config'
import GreyBox from '../../components/greyBox'
import Logos from '../../components/logos'
import RotatingImages from '../../components/rotatingImages'
import GreyTextBox from '../../components/greyTextBox'
import ImageGallery from '../../components/imageGallery'
class Santoor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        animate:false
    }
  }
  componentDidMount() {
    this.props.removeClassFromCursor("white")
    setTimeout(()=>{
        this.props.openMenu(false)
        this.setState({animate:true})
    },300)
  }
  render() {
    return (
      <Layout navPosition="absolute" navTextColor="black" menuBtnColor="black" footerStyle="yellow">
        <Head>
          <title>Project Santoor | Opposable Thumbs</title>
        </Head>
        <div className={`top text-center ${this.state.animate?"animate":""}`} style={{height:`${this.props.common.windowHeight*0.6}px`}}>
            <div className="vertical-center">
                <div className="project-name overflow-hidden">
                    <div className="child">
                        Santoor
                    </div>
                </div>
                <div className="project-description slightly-larger-text overflow-hidden">
                    <div className="child">
                        A classic Indian soap brand with iconic advertising, making meaningful connections with its core consumers, young mothers, in the digital world.
                    </div>
                </div>
            </div>
        </div>
        <Parallax bgImage="/images/projects/santoor/1.jpg" bgImageAlt="fynd" strength={100}>
            <div className="parallax-content-1"></div>
        </Parallax>
        <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
            <div className="brief-solution padded-content">
                <div className="brief">
                    <div className="brief-heading heading neufreit">The Brief <span className="inline-block arrow-right"><Arrow direction="right" /></span></div>
                    <div className="brief-text desc">
                        We’ve all grown up with the classic Santoor ads and their famously memorable “mummy” moments. But the brand’s true appeal has always been in the fact that it could stay relevant and in-step with its core consumers, young mothers. In this digital age, with its TG spending more time on social media, the brand wanted to establish a strong presence and connect on social channels. And that’s when we were called in.
                    </div>
                    <div  className="sandlewood-img-wrapper">
                        <img src="/images/projects/santoor/3.jpg"alt='image' className="margin-auto width-80" />
                    </div>
                </div>
                <div className="solution">
                    <div className="solution-heading heading neufreit">Solution <span className="inline-block arrow-right"><Arrow direction="right" /></span></div>
                    <div className="solution-text desc">
                        Keeping the brand messaging of younger looking skin, and its ingredient story, in the forefront, we create engaging communication on social media. From contests to product related posts, we develop messaging not just for the main product, Santoor Sandal &amp; Turmeric, but also for its whole range. 
                    </div>
                    <div className="soap-img-wrapper">
                        <img src="/images/projects/santoor/2.jpg"alt='image' className="width-100" />
                    </div>
                </div>
            </div>
        </ScrollAnimation>
        <div className="bg-white text-center padded-content pb">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <ImageGallery cols="3" images={["/images/projects/santoor/4.jpg","/images/projects/santoor/5.jpg","/images/projects/santoor/6.jpg"]} />
            </ScrollAnimation>
        </div>
        <GreyBox items={["RELEVANT MESSAGING","YOUTHFUL APPEAL","INGREDIENT DRIVEN"]} />
        <div className="bg-white padded-content ptb">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <img src="/images/projects/santoor/7.jpg" className="width-100"alt='image' />
                <div>
                    <div className="neufreit heading">The result <Arrow direction="right" /></div>
                    <div className="result-text">
                        The social media feeds are populated with regular contextual content, integrated with key messaging, contests and other engaging ideas.
                    </div>
                </div>
            </ScrollAnimation>
        </div>
        <div style={{marginTop:"3rem"}}>
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <img src="/images/projects/santoor/8.jpg" className="width-100"alt='image' />
            </ScrollAnimation>
        </div>
        <div style={{marginTop:"3rem"}}>
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <img src="/images/projects/santoor/9.jpg" className="width-100"alt='image' />
            </ScrollAnimation>
        </div>
        <div style={{marginTop:"3rem"}}>
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <img src="/images/projects/santoor/10.jpg" className="width-100"alt='image' />
            </ScrollAnimation>
        </div>
        <GreyTextBox heading="The secret of younger looking skin" text="This core brand messaging found new wings on social media. We constantly encourage women to express themselves and their talent."/>
        <div className="bg-white ptb padded-content">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <div className="yellow-box futura-light">SOCIAL MEDIA POSTS</div>
                <div style={{marginTop:"7.5rem"}}>
                    <ImageGallery cols="3" images={["/images/projects/santoor/11.jpg","/images/projects/santoor/12.jpg","/images/projects/santoor/13.jpg","/images/projects/santoor/14.jpg","/images/projects/santoor/15.jpg","/images/projects/santoor/16.jpg"]} />
                </div>
            </ScrollAnimation>
        </div>
        <GreyBox items={["CAPTURING THE STORY","RELEVANT IDEAS","POSITIVE REINFORCEMENT"]} />
        <div className="bg-white ptb padded-content">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <ImageGallery cols="3" images={["/images/projects/santoor/17.jpg","/images/projects/santoor/18.jpg","/images/projects/santoor/19.jpg"]} />
            </ScrollAnimation>
        </div>
        <GreyTextBox heading="Centre Stage" text="In 2020, we brought back a very popular talent hunt of Santoor – Centre Stage. We called for entries from women, showcasing their talents. And we were impressed by what we saw!"/>
        <div className="bg-white ptb padded-content">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}> 
                <img src="/images/projects/santoor/web.jpg" className="width-100"alt='image' />
            </ScrollAnimation>
        </div>
        {/* <GreyTextBox heading="Lorem" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/> */}
        <div className="position-relative ptb" style={{backgroundColor:"#ffffff"}}>
            <div className="browse">
                <Browser prev="/projects/chandrika" next="/projects/voi-jeans" />
            </div>
            <img src="/images/wave-black.gif" className="width-100 wave" alt='image'/>
        </div>
        <style jsx>{` 
            .sandlewood-img-wrapper{
                margin-top:9rem;
            }
            .soap-img-wrapper{
                margin-top:10rem;
            }
            .browse{
                padding-top:5rem;
                padding-bottom:30rem;
            }
            .bottom-content{
                position:relative;
                z-index:2;
            }
            .wave{
                width: 100%;
                position: absolute;
                bottom:0;
                left: 0;
                z-index:1;
            }
            .winery-text{
                width: 57%;
            }
            .animate .project-name .child{
                transition-delay: 0.4s;
            }
            .animate .project-description .child{
                transition-delay: 0.6s;
            }
            .custom-padding{
                padding-left:20%;
                padding-right:20%;
            }
            .custom-padding-2{
                padding-left:25%;
                padding-right:25%;
            }
            .result-image-wrapper{
                margin-right: -5.5%;
                margin-top: -14rem;
                position: relative;
                z-index: 1;
            }
            .result-top{
                width: 38%;
                position: relative;
                z-index: 2;
            }
            .result-text{
                width: 50%;
            }
            .result-image{
                width:87%;
            }
            .result{
                margin-top:11.5rem;
            }
            .mood{
                padding-right:12%;
                padding-top:11.2rem;
            }
            .langoor10{
                padding-left:13%;
                padding-right:13%;
            }
            .the-white{
                position:absolute;
                left: -8rem;
                top:50%;
                font-size:3.4rem;
                line-height:1;
                text-align:center;
            } 
            .the-red{
                position:absolute;
                right:-4rem;
                top:50%;
                font-size:3.4rem;
                line-height:1;
                text-align:center;
            } 
            .bottles{
                position:relative;
                margin-left:10%;
                margin-right:10%;
                margin-top:14.9rem;
            }
            .logo-images{
                margin-top:15rem;
                padding-left:15%;
                padding-right:15%;
            }
            .creative-process{
                padding-top:21rem;
            }
            .playful{
                margin-top:12.3rem;
            }
            .langoor5{
                height:100%;
                display:flex;
                flex-flow: column nowrap;
                justify-content:flex-end;
            }
            .langoor4{
                height:100%;
                padding-bottom:7.5rem;
            }
            .langoor4 img{
                width:80%;
            }
            .langoor5 img{
                width:95%;
            }
            .white-section{
                background:#ffffff;
                padding-top:13rem;
            } 
            .bellissima{
                padding-top:7.5rem;
                padding-bottom:7.5rem;
            }
            .bellissima-heading{
                padding-left:5%;
                padding-right:5%;
            }
            .bigbanyanwines-1{
                padding-top:13rem;
            }
            .exploration-bottom{
                margin-top:5rem;
            }
            .explorations{
                background:#ffffff; 
            }
            .exploration-heading{
                letter-spacing:5.46px;
            }
            .arrow-right{
                margin-left:0.5rem;
            }
            .brief-solution{
                padding-top:9.5rem;
                padding-bottom:9.5rem;
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
                // padding-top:18.2rem;
                background:#ffffff;
            }
            .project-name{
                font-size:7rem;
            }
            .project-description{
                margin-top:2rem;
                padding-left:30%;
                padding-right:30%;
            }
            .limited-shiraz-heading{
                padding-top:7.5rem;
                padding-bottom:7.5rem
            }
            @media only screen and (max-width:768px){
                .sandlewood-img{
                    text-align:center;
                }
                .project-name{
                    font-size:4.6rem;
                }
                .project-description{
                    padding-left: 5%;
                    padding-right: 5%;
                }
                .brief{
                    width:100%;
                    padding-right:0;
                }
                .solution{
                    width:100%;
                    padding-left:0;
                    margin-top:5rem;
                }
                .brief-solution {
                    padding-top: 7.5rem;
                }
                .desc{
                    margin-top:2rem;
                }
                .bigbanyanwines-1{
                    padding-top:7.6rem;
                    padding-left:0;
                    padding-right:0;
                }
                .result{
                    margin-top:7.5rem;
                }
                .result-text{
                    width:100%;
                }
                .result-top{
                    width:100%;
                }
                .result-image-wrapper{
                    margin-right:0;
                    margin-top:0;
                    width:100%;
                    margin-top:5rem;
                }
                .limited-shiraz-heading{
                    padding-left:0;
                    padding-right:0;
                }
                .bellissima{
                    padding-top:7.3rem;
                    padding-bottom:0rem;
                }
                .bellissima-heading{
                    padding-left:0;
                    padding-right:0;
                }
                .winery-text{
                    width:100%;
                    margin-top:1rem;
                    padding-bottom:7.6rem;
                }
                .winery-bottom-heading{
                    padding-left:0;
                    padding-right:0;
                }
                .bellissima.padded-content,.limited-shiraz .h.padded-content{
                    padding-left:0 !important;
                    padding-right:0 !important;
                }
                .browse{
                    padding-top:5rem;
                    padding-bottom:10rem;
                }
                .sandlewood-img-wrapper{
                    margin-top:4rem;
                }
                .soap-img-wrapper{
                    margin-top:4rem;
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
export default connect(mapStateToProps, {openMenu,removeClassFromCursor})(Santoor);
