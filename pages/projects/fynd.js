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
class BigBanyan extends React.Component {
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
          <title>Project FYND | Opposable Thumbs</title>
        </Head>
        <div className={`top text-center ${this.state.animate?"animate":""}`} style={{height:`${this.props.common.windowHeight*0.6}px`}}>
            <div className="vertical-center">
                <div className="project-name overflow-hidden">
                    <div className="child">
                        FYND Studios
                    </div>
                </div>
                <div className="project-description slightly-larger-text overflow-hidden">
                    <div className="child">
                        A brand that believes in self-expression through curated fashion, intelligent learning of user preferences and avant-garde designs.
                    </div>
                </div>
            </div>
        </div>
        <Parallax bgImage="/images/projects/fynd.jpg" bgImageAlt="fynd" strength={100}>
            <div className="parallax-content-1"></div>
        </Parallax>
        <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
            <div className="brief-solution padded-content">
                <div className="brief">
                    <div className="brief-heading heading neufreit">The Brief <span className="inline-block arrow-right"><Arrow direction="right" /></span></div>
                    <div className="brief-text desc">
                        Marketplaces for fashion are dime a dozen. There is a problem of plenty, and it is up to the consumer to find that perfect ensemble. But shopping online removes you from the experience of having a legit stylist guide you, help you try out pieces, and mix and match them to suit your persona. Enter FYND, and its homegrown sub-brands specializing in functional fashion. 
                    </div>
                </div>
                <div className="solution">
                    <div className="solution-heading heading neufreit">Solution <span className="inline-block arrow-right"><Arrow direction="right" /></span></div>
                    <div className="solution-text desc">
                        Clothes are a form of identity and self-expression. This insight inspired us to create the brand story for FYND. The AI behind FYND mapped out a consumer’s psyche and then got her started along the journey of curating her own wardrobe. The brand name stemmed from this idea, and we went on to tell consumers to ‘FYND their unique self’. 
                    </div>
                </div>
            </div>
        </ScrollAnimation>
        <Parallax bgImage="/images/projects/fynd/2.jpg" bgImageAlt="fynd" strength={100}>
            <div className="parallax-content-1"></div>
        </Parallax>
        <div className="bg-white text-center padded-content ptb">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <Logos images={["/images/projects/fynd/logo2.jpg","/images/projects/fynd/logo1.jpg","/images/projects/fynd/logo3.jpg"]} />
            </ScrollAnimation>
        </div>
        <GreyBox items={["AVANT GARDE","INTERNATIONAL","PERSONALISED"]} />
        <div className="bg-white ptb padded-content">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <RotatingImages left={"/images/projects/fynd/3.jpg"} right={["/images/projects/fynd/4.jpg","/images/projects/fynd/4_1.jpg"]} logo={"/images/projects/fynd/seison.png"} logoPosition="bottom"/>
            </ScrollAnimation>
        </div>
        <div className="bg-white ptb padded-content">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <RotatingImages left={"/images/projects/fynd/5.jpg"} right={["/images/projects/fynd/6.jpg","/images/projects/fynd/6_1.jpg"]} logo={"/images/projects/fynd/logo_edit.png"} logoPosition="center"/>
            </ScrollAnimation>
        </div>
        <div className="bg-white ptb">
            <GreyBox items={["MINIMAL","CLEAN","STYLISH"]} />
         </div>
         <div className="bg-white ptb padded-content">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <RotatingImages left={"/images/projects/fynd/7.jpg"} right={["/images/projects/fynd/8.jpg"]} moods={["Experiential","Engaging","Simple","Imaginative","Explorative"]} moodsListColor="#ffffff" logoPosition="center"/>
            </ScrollAnimation>
        </div>
        <GreyTextBox heading="Clothing with a purpose" text={`Fynd is not just another fashion marketplace. The sub-brands under it fulfil specific functions, and complement each other perfectly. This allows the consumer to handpick statement pieces and curate her wardrobe with unlimited possibilities.`} />
        <div className="bg-white text-center padded-content ptb">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <Logos images={["/images/projects/fynd/norm.jpg","/images/projects/fynd/edit.jpg","/images/projects/fynd/cuts.jpg","/images/projects/fynd/seison.jpg"]} n="4" />
            </ScrollAnimation>
        </div>
        <div className="bg-white pb padded-content bg-white">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <RotatingImages left={"/images/projects/fynd/9.jpg"} right={["/images/projects/fynd/10.jpg","/images/projects/fynd/10_1.jpg"]} />
            </ScrollAnimation>
        </div>
        <div className="ptb padded-content bg-white">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <img src="/images/projects/fynd/11.jpg" className="width-100"alt='image' />
            </ScrollAnimation>
        </div>
        <div className="pb padded-content bg-white">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <div className="heading neufreit">Explorations <Arrow direction="right" /></div>
                <div className="explorations-text">
                To create meaningful brand architecture, we plunged right into the world of Fynd. Each sub-brand got its own niche and also became a part of the larger picture when the consumer came in to curate her wardrobe with select pieces. 
                </div>
            </ScrollAnimation>
        </div>
        <div className="pb bg-white">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <RotatingImages left={"/images/projects/fynd/12.jpg"} right={["/images/projects/fynd/13.jpg","/images/projects/fynd/13_1.jpg"]} logo="/images/projects/fynd/logo_cuts.png" logoPosition="center" />
            </ScrollAnimation>
        </div>
        <div className="position-relative ptb" style={{background:"#ffffff"}}>
            <div className="browse">
                <Browser prev="/projects/enchanteur" next="/projects/chandrika" />
            </div>
            <img src="/images/wave-black.gif" className="width-100 wave" alt='image'/>
        </div>
        <style jsx>{` 
            .explorations-text{
                width:40%;
            }
            .browse{
                padding-top:3rem;
                padding-bottom:18rem;
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
                margin-top:3rem;
                width: 83%;
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
                    padding-bottom:7rem;
                }
                .explorations-text{
                    width:100%;
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
export default connect(mapStateToProps, {openMenu,removeClassFromCursor})(BigBanyan);
