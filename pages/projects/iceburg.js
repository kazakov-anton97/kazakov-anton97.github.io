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
import ImageGallery from '../../components/imageGallery'
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
          <title>Project Iceburg | Opposable Thumbs</title>
        </Head>
        <div className={`top text-center ${this.state.animate?"animate":""}`} style={{height:`${this.props.common.windowHeight*0.6}px`}}>
            <div className="vertical-center">
                <div className="project-name overflow-hidden">
                    <div className="child">
                        IceBurg
                    </div>
                </div>
                <div className="slightly-larger-text overflow-hidden">
                    <div className="child">
                        A UK-based gourmet burger and shake bar that draws in the young consumer with a refined palate.
                    </div>
                </div>
            </div>
        </div>
        <Parallax bgImage="/images/projects/iceburg/1.jpg" bgImageAlt="iceburg" strength={100}>
            <div className="parallax-content-1"></div>
        </Parallax>
        {/* <div>
            <img src="/images/projects/langoor/langoor1.jpg" className="width-100" />
        </div> */}
        <div className="brief-solution padded-content">
            <div className="brief">
                <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                    <div className="brief-heading heading neufreit">The Brief <span className="inline-block arrow-right"><Arrow direction="right" /></span></div>
                    <div className="brief-text desc">
                        Gone are the days of assembly-line burgers. With consumers becoming increasingly conscious about what they eat, and craving for more nuanced choices, fast food has undergone a reinvention in the recent years. The humble burger has transformed into a gourmet indulgence. Riding on this trend of gourmet burgers, a UK-based company wanted to launch a chain of burger and shake bars. And that’s where we came in.
                    </div>
                    <div className="brief-image">
                        <MoodImage moodImage="/images/projects/iceburg/2.jpg" moods={["Young","Appetizing","Trendy","Eye-catching","Fun"]} moodsListColor="#ffffff" moodTitleColor="#e5001a" />
                    </div>
                </ScrollAnimation>
            </div>
            <div className="solution">
                <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                    <div className="solution-heading heading neufreit">Solution <span className="inline-block arrow-right"><Arrow direction="right" /></span></div>
                    <div className="solution-text desc">
                        From a name that summed up its intent in a direct, yet catchy, memorable way, to identity that reflected its brand persona and packaging that was young and fun, we had to create everything from the scratch. We came up with a name that combined the two core offerings of the business, and made it chic to attract this new consumer.
                    </div>
                    <div className="solution-image">
                        <img src="/images/projects/iceburg/3.jpg" className="width-100"alt='image' />
                    </div>
                </ScrollAnimation>
            </div>
        </div>
        <div className="padded-content logos ptb">
            <img src="/images/projects/iceburg/logos.jpg" className="width-100 hide-mobile"alt='image' />
            <div className="hide-desktop show-mobile text-center">
                <img src="/images/projects/iceburg/logo-1.jpg" className="width-80"alt='image' />
                <img src="/images/projects/iceburg/logo-2.jpg" className="width-80"alt='image' style={{marginTop:"5rem"}} />
                <img src="/images/projects/iceburg/logo-3.jpg" className="width-80"alt='image' style={{marginTop:"5rem"}} />
                <img src="/images/projects/iceburg/logo-4.jpg" className="width-80"alt='image' style={{marginTop:"7rem"}} />
            </div>
        </div>
        <div className="white-cursor white-menu-btn">
            <Parallax bgImage={this.state.isMobile?"/images/projects/iceburg/resultbg.jpg":"/images/projects/iceburg/resultbg.jpg"} bgImageAlt="iceburg" strength={50}>
                    <div className="result-info">
                        <div className="heading neufreit">The Result <span className="inline-block project-arrow"><Arrow direction="right" /></span></div>
                        <div className="result-desc">
                            IceBurg came alive with a clean, pop-of-colour identity, and minimal visualization that made it a trendy, chic place to head over to for a bite.
                        </div>
                    </div>
            </Parallax>
        </div>
        <GreyBox items={["CAPTURING THE STORY","THOUGHTFUL BRANDING","PURPOSEFUL DESIGN"]} />
        <div className="bg-white ptb padded-content">
            <ImageGallery cols="3" images={["/images/projects/iceburg/4.jpg","/images/projects/iceburg/5.jpg","/images/projects/iceburg/6.jpg"]} />
        </div>
        <div className="bg-white padded-content">
            <div className="pb">
                <div className="yellow-box futura-light">PACKAGING DEVELOPMENT</div>
            </div>
            <div className="row no-gutters">
                <div className="col-md-6">
                    <div className="iceburg-7">
                        <img src="/images/projects/iceburg/7.jpg" className="width-100 hide-mobile"alt='image' />
                        <img src="/images/projects/iceburg/7_mobile.jpg"alt='image' className="width-100 hide-desktop show-mobile" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="iceburg-8">
                        <img src="/images/projects/iceburg/8.jpg" alt='image'className="width-100" />
                    </div>
                </div>
            </div>
        </div>
        <GreyTextBox heading="The Idea" text={`For the name, we combined ice cold shakes and burgers, and whipped up IceBurg. The pop of yellow added an eye-catching appeal to the brand.`} />
        <div className="padded-content ptb">
            <div className="heading neufreit">Explorations <Arrow direction="right" /></div>
            <div className="explorations-text">
                We let our imagination run wild as we experimented with packaging and came up with interesting forms. Using iconography, we enhanced the look and feel.
            </div>
            <div className="pt">
                <ImageGallery cols="3" images={["/images/projects/iceburg/9.jpg","/images/projects/iceburg/10.jpg","/images/projects/iceburg/11.jpg"]} />
            </div>
        </div>
        <div>
            <img src="/images/projects/iceburg/12.jpg" className="width-100"alt='image' />
        </div>
        <div className="padded-content ptb bg-white">
            <div className="book-style-text futura-light text-center">
                LOGO EXPLORATIONS
                <div style={{marginTop:"1rem"}}>
                    <Arrow direction="down" />
                </div>
            </div>
            <div style={{marginTop:"3rem"}} className="hide-mobile">
                <img src="/images/projects/iceburg/logo-explorations.jpg" className="width-100"alt='image' />
            </div>
            <div style={{marginTop:"3rem"}} className="show-mobile hide-desktop">
                <img src="/images/projects/iceburg/logo-exploration-1.jpg" className="width-100"alt='image' />
                <img src="/images/projects/iceburg/logo-exploration-2.jpg" className="width-100"alt='image' style={{marginTop:"5rem"}} />
                <img src="/images/projects/iceburg/logo-exploration-3.jpg" className="width-100"alt='image' style={{marginTop:"5rem"}} />
                <img src="/images/projects/iceburg/logo-exploration-4.jpg" className="width-100" alt='image'style={{marginTop:"5rem"}} />
                <img src="/images/projects/iceburg/logo-exploration-5.jpg" className="width-100"alt='image' style={{marginTop:"5rem"}} />
                <img src="/images/projects/iceburg/logo-exploration-6.jpg" className="width-100"alt='image' style={{marginTop:"5rem"}} />
                <img src="/images/projects/iceburg/logo-exploration-bottom.jpg" className="width-100"alt='image' style={{marginTop:"5rem"}} />
            </div>
        </div>
        <GreyTextBox heading="Colour story" text={`We eat with our eyes first. And colours play a big part in enticing us. Yellow is one of the most prevalently used colours in food branding because it is believed to whet people's appetites, making it more likely for them to enter the store and buy food.`} />
        <div className="white-cursor white-menu-btn">
            <Parallax bgImage="/images/projects/iceburg/13.jpg" bgImageAlt="iceburg" strength={100}>
                <div className="parallax-content-1"></div>
            </Parallax>
        </div>
        <div className="bg-white position-relative bottom-part">
            <div className="browser position-relative">
                <Browser prev="/projects/voi-jeans" next="/projects/mia-by-tanishq" />
            </div>
            <img src="/images/wave-yellow-white.gif" className="width-100 wave"alt='image' />
        </div>
        <style jsx>{` 
            .iceburg-7{
                padding-right:7.5%;
                // padding-top:10%;
            }
            .iceburg-8{
                padding-left:7.5%;
                padding-right:7.5%;
                padding-top:10%;
            }
            .brief-image{
                margin-top:5rem;
            }
            .solution-image{
                margin-top:5rem;
            }
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
            .langoor4 img{
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
                .langoor4 img,.langoor5 img{
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
                .iceburg-7{
                    padding-right:0;
                }
                .iceburg-8{
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
