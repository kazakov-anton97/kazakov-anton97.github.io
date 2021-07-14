import Head from "next/head"
import { connect } from "react-redux"
import React from "react"
import Layout from "../../components/layout"
import {openMenu} from "../../redux/actions"
import Arrow from "../../components/arrow"
import Browser from "../../components/browser"
import { Parallax } from 'react-parallax';
import ScrollAnimation from 'react-animate-on-scroll';
import {ANIMATION_DURATION,MOBILE_BREAKPOINT} from '../../config'
import GreyBox from '../../components/greyBox'
import GreyTextBox from '../../components/greyTextBox'
import MoodImage from '../../components/moodImage'
import ImageGallery from '../../components/imageGallery'
import SingleSlider from '../../components/singleSlider'
class Langoor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        animate:false,
        isMobile:false
    }
  }
  componentDidMount() {
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
          <title>Project VOI Jeans | Opposable Thumbs</title>
        </Head>
        <div className={`top text-center ${this.state.animate?"animate":""}`} style={{height:`${this.props.common.windowHeight*0.6}px`}}>
            <div className="vertical-center">
                <div className="project-name overflow-hidden">
                    <div className="child">
                        VOI Jeans
                    </div>
                </div>
                <div className="slightly-larger-text overflow-hidden">
                    <div className="child">
                        A brand that creates ergonomically engineered denims that are at once functional and incredibly fashionable.
                    </div>
                </div>
            </div>
        </div>
        <div className="white-cursor white-menu-btn">
            <Parallax bgImage="/images/projects/voijeans/1.jpg" bgImageAlt="voi jeans" strength={100}>
                <div className="parallax-content-1"></div>
            </Parallax>
        </div>
        <div className="brief-solution padded-content">
            <div className="brief">
                <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                    <div className="brief-heading heading neufreit">The Brief <span className="inline-block arrow-right"><Arrow direction="right" /></span></div>
                    <div className="brief-text desc">
                        For some, denim is a religion. VOI Jeans was driven by a passionate team of designers who took their denims very seriously. The main USP was the ergonomic fit of their jeans. But they were also very trendy, edgy and unique in their design philosophy. Our communication had to reflect this.
                    </div>
                    <div className="brief-image">
                        <MoodImage moodImage="/images/projects/voijeans/brief.jpg" moods={["Raw","Edgy","Minimal","Technical","Functional"]} moodsListColor="#ffffff" moodTitleColor="#ffffff" />
                    </div>
                </ScrollAnimation>
            </div>
            <div className="solution">
                <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                    <div className="solution-heading heading neufreit">Solution <span className="inline-block arrow-right"><Arrow direction="right" /></span></div>
                    <div className="solution-text desc">
                        From seasonal campaigns that blended together trend, design ideology and the latest ergonomic fits, to capsule campaigns that showcased their edgy collections, we created communication that brought together the technical and creative aspects of design to life.
                    </div>
                    <div className="solution-image">
                        <img src="/images/projects/voijeans/solution.jpg"alt='image' className="width-100" />
                    </div>
                </ScrollAnimation>
            </div>
        </div>
        <div className="pt bg-white">
            <img src="/images/projects/voijeans/2.jpg" className="width-100" alt='image'/>
            {/* <Parallax bgImage="/images/projects/voijeans/2.jpg" bgImageAlt="voi jeans" strength={0}>
                <div className="parallax-content-1"></div>
            </Parallax> */}
        </div>
        <GreyBox items={["PRODUCT FOCUSED","CLEAN","MINIMAL"]} />
        <div className="ptb bg-white padded-content">
                <div className="yellow-box futura-light">CAMPAIGN DEVELOPMENT</div>
        </div>
        <div className="white-cursor white-menu-btn">
            <Parallax bgImage="/images/projects/voijeans/cover.jpg" bgImageAlt="voi jeans" strength={0}>
                    <div className="parallax-content-1"></div>
            </Parallax>
        </div>
        <GreyTextBox heading="Engineered to be unique" text={`We also created a campaign for a limited-edition collection, featuring Kalki. We found a perfect fit in her persona and the brand’s.`} />
        <div className="padded-content ptb bg-white">
            <div className="book-style-text futura-light text-center">
                COLOR EXPLORATIONS
                <div style={{marginTop:"1rem"}}>
                    <Arrow direction="down" />
                </div>
            </div>
        </div>
        <div className="padded-content">
            <img src="/images/projects/voijeans/3.jpg" className="width-100" alt='image'/>
        </div>
        <div className="ptb bg-white">
            <GreyBox items={["CAPTURING THE STORY","THOUGHTFUL BRANDING","PURPOSEFUL DESIGN"]} />
        </div>
        <div className="pb padded-content bg-white">
            <div className="yellow-box futura-light">PACKAGING DEVELOPMENT</div>
        </div>
        <div className="white-cursor white-menu-btn">
            <SingleSlider images={["/images/projects/voijeans/4.jpg","/images/projects/voijeans/4_1.jpg"]} autoplay={true} autoplaySpeed={3000}/>
        </div>
        <div className="padded-content pt">
            <div className="heading neufreit">Explorations <Arrow direction="right" /></div>
            <div className="explorations-text">
                We knew from the word go that VOI was meant for a consumer who could appreciate its form and function. Our communication showcased not just the clothes, but also the persona of the consumer. 
            </div>
            <div className="padded-content pt">
                <img src="/images/projects/voijeans/5.jpg" className="width-100" alt='image'/>
            </div>
        </div>
        <div className="ptb bg-white">
            <GreyBox items={["ON TREND","EDGY","UNIQUE"]} />
        </div>
        <div className="pb padded-content bg-white">
            <div className="yellow-box futura-light">SOCIAL MEDIA CONTENT</div>
        </div>
        <SingleSlider images={["/images/projects/voijeans/6.jpg","/images/projects/voijeans/6_1.jpg"]} autoplay={true} autoplaySpeed={3000}/>
        <div style={{marginTop:"-0.5rem"}}>
            <GreyBox items={["CAPTURING THE STORY","THOUGHTFUL BRANDING","PURPOSEFUL DESIGN"]} />
        </div>
        <div className="bg-white ptb padded-content">
            <ImageGallery cols="3" images={["/images/projects/voijeans/7.jpg","/images/projects/voijeans/8.jpg","/images/projects/voijeans/9.jpg","/images/projects/voijeans/10.jpg","/images/projects/voijeans/11.jpg","/images/projects/voijeans/12.jpg"]} />
        </div>
        <SingleSlider images={["/images/projects/voijeans/13.jpg","/images/projects/voijeans/13_1.jpg"]} autoplay={true} autoplaySpeed={3000}/>
        <div>
            <img src="/images/projects/voijeans/14.jpg" className="width-100"alt='image' />
        </div>
        {/* <GreyTextBox heading="Market Speak" text={`For the name, we combined ice cold shakes and burger, and whipped up IceBurg. The pop of yellow added an eye-catching appeal to the brand.`} /> */}
        <div className="bg-white position-relative bottom-part">
            <div className="browser position-relative">
                <Browser prev="/projects/santoor" next="/projects/iceburg" />
            </div>
            <img src="/images/wave-yellow-white.gif" className="width-100 wave" alt='image'/>
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
export default connect(mapStateToProps, {openMenu})(Langoor);
