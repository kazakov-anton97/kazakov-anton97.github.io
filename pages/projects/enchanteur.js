import Head from "next/head"
import { connect } from "react-redux"
import React from "react"
import Layout from "../../components/layout"
import {openMenu,showFullscreenVideo,removeClassFromCursor} from "../../redux/actions"
import Arrow from "../../components/arrow"
import { Parallax } from 'react-parallax';
import SingleSlider from '../../components/singleSlider'
import ScrollAnimation from 'react-animate-on-scroll';
import {ANIMATION_DURATION,MOBILE_BREAKPOINT} from '../../config'
import GreyBox from '../../components/greyBox'
import GreyTextBox from '../../components/greyTextBox'
import ImageGallery from '../../components/imageGallery'
import RotatingImages from '../../components/rotatingImages'
import VideoSlider from '../../components/videoSlider'
import Browser from '../../components/browser'
import ResultParallax from '../../components/resultParallax'
import MoodImage from '../../components/moodImage'
import VideoTriggerElement from '../../components/videoTriggerElement'
class Enchanteur extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        animate:false,
        isMobile:false
    }
  }
  componentDidMount() {
    this.props.removeClassFromCursor("white")
    this.setState({isMobile:window.innerWidth<MOBILE_BREAKPOINT?true:false})
    setTimeout(()=>{
        this.props.openMenu(false)
        this.setState({animate:true})
    },300)
  }
  render() {
    return (
      <Layout navPosition="absolute" navTextColor="black" menuBtnColor="black" footerStyle="yellow">
        <Head>
          <title>Project Enchanteur | Opposable Thumbs</title>
        </Head>
        <div className={`top text-center ${this.state.animate?"animate":""}`} style={{height:`${this.props.common.windowHeight*0.6}px`}}>
            <div className="vertical-center">
                <div className="project-name overflow-hidden">
                    <div className="child">
                        Enchanteur
                    </div>
                </div>
                <div className="project-description slightly-larger-text overflow-hidden">
                    <div className="child">
                        A brand that espouses romance through floral fragrances infused in its collection of bath &amp; body products, and perfumes. Very feminine and very French!
                    </div>
                </div>
            </div>
        </div>
        <Parallax bgImage="/images/projects/enchanteur/1-1.jpg" bgImageAlt="enchanteur" strength={100}>
            <div className="parallax-content-1"></div>
        </Parallax>
        <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
            <div className="brief-solution padded-content">
                <div className="brief">
                    <div className="brief-heading heading neufreit">The Brief <span className="inline-block arrow-right"><Arrow direction="right" /></span></div>
                    <div className="brief-text desc">
                        Enchanteur is a collection of floral perfumes crafted using classic French perfume-making techniques. Their bath &amp; body collection is also infused with the same fragrances to make them blossom better. The collection is designed to inspire romance. And our job is to engage women on social media and inspire them to find their magical moments.
                    </div>
                    <div style={{marginTop:"3rem"}}>
                        <MoodImage moodsListColor="#f7e23f" moodImage="/images/projects/enchanteur/1_1.jpg" moods={["Feminine","Playful","Flirty","Romantic","Minimal"]}/>
                    </div>
                    {/* <div>
                        <img src="/images/projects/enchanteur/1_1.jpg" style={{marginTop:"3rem"}} className="width-100" />
                    </div> */}
                </div>
                <div className="solution">
                    <div className="solution-heading heading neufreit">Solution <span className="inline-block arrow-right"><Arrow direction="right" /></span></div>
                    <div className="solution-text desc">
                        Is the modern woman too jaded or does she still crave a sweep-me-off-my-feet romance? The brand appeals to this innate romantic nature of a woman, and we went all out and captured it in our social media creatives. On a daily basis, we woo women with flowers (lots of roses, specifically), ideas of romance, French perfumes and indulgent bath &amp; body products.
                    </div>
                    <div>
                        <img src="/images/projects/enchanteur/2_2.jpg" style={{marginTop:"3rem"}} alt='image' className="width-100" />
                    </div>
                </div>
            </div>
        </ScrollAnimation>
        <ResultParallax bgImage="/images/projects/enchanteur/result.jpg" resultText="We brought to life a very feminine world of romance and self-care." />
        <div className="bg-white padded-content ptb">
            <img src="/images/projects/enchanteur/strip.jpg" className="width-100"alt='image' />
        </div>
        <div className="bg-white padded-content pb">
            <div className="yellow-box futura-light">CREATIVE DESIGN</div>
        </div>
        <div className="bg-white">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <div className="row no-gutters">
                    <div className="col-md-6">
                        <img src="/images/projects/enchanteur/3.jpg" className="width-100" alt='image'/>
                    </div>
                    <div className="col-md-6">
                        <img src="/images/projects/enchanteur/4.gif" className="width-100" alt='image'/>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
        <GreyTextBox heading="Spark romance" text="This is the brand’s key message to its consumers, and we use a mix of product and brand communication to create the desired appeal."/>
        {/* <div className="padded-content bg-white text-center" style={{paddingBottom:"7.5rem"}}>
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <img src="/images/projects/enchanteur/2.jpg" className="width-80" />
            </ScrollAnimation>
        </div> */}
        <div className="ptb text-center bg-white">
            <div className="more-letter-spacing futura-light">DIGITAL BANNERS</div>
            <div style={{marginTop:"1rem"}}><Arrow direction="down" /></div>
        </div>
        <div>
            <img src="/images/projects/enchanteur/singleimage.jpg" className="width-100"alt='image' />
        </div>
        <div className="padded-content bg-white ptb">
            <img src="/images/projects/enchanteur/strip2.jpg" className="width-100" alt='image'/>
        </div>
        <GreyBox items={["SPARKING ROMANCE","BEING FEMININE","FLORAL INSPIRED"]} />
        <div className="ptb padded-content">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <div className="yellow-box futura-light">SOCIAL MEDIA POSTS</div>
            </ScrollAnimation>
        </div>
        <div className="pb padded-content">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <ImageGallery cols="3" images={["/images/projects/enchanteur/15.jpg","/images/projects/enchanteur/19.jpg","/images/projects/enchanteur/social3.jpg","/images/projects/enchanteur/social4.jpg","/images/projects/enchanteur/social5.jpg","/images/projects/enchanteur/20.jpg"]} />
            </ScrollAnimation>
        </div>
        <div className="bg-white">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <SingleSlider images={["/images/projects/enchanteur/13.jpg","/images/projects/enchanteur/13_2.jpg","/images/projects/enchanteur/13_3.jpg","/images/projects/enchanteur/13_4.jpg"]} autoplay={true} autoplaySpeed={3000}/>
            </ScrollAnimation>
        </div>
        <div className="ptb padded-content bg-white">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <div className="neufreit heading">Explorations <Arrow /></div>
                <div className="explorations-text">
                    Through our creative expressions, we give the woman a chance to spark her own romance. Our messaging is positive, subtle, uplifting and full of joie de vivre.
                </div>
            </ScrollAnimation>
        </div>
        <div className="pb bg-white">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <div className="row no-gutters">
                    <div className="col-md-6">
                        <img src="/images/projects/enchanteur/24.gif" className="width-100" alt='image'/>
                    </div>
                    <div className="col-md-6">
                        <img src="/images/projects/enchanteur/paris.gif" className="width-100"alt='image' />
                    </div>
                </div>
            </ScrollAnimation>
        </div>
        <div className="pink-section padded-content ptb">
            <div className="row no-gutters">
                <div className="col-md-6">
                    <img src="/images/projects/enchanteur/couple.jpg" className="width-100" alt='image'/>
                </div>
                <div className="col-md-6">
                    <div className="pink-right text-center">
                        <div className="futura-light more-letter-spacing">PARIS BY ENCHANTEUR</div>
                        <div style={{marginTop:"3rem"}}>These young, fruity-floral perfumes resonate the brand thought of romance, but with a more youthful, flirtatious spirit. </div>
                        <div style={{marginTop:"3rem"}}>
                            <img src="/images/projects/enchanteur/paris.jpg" className="width-100" alt='image'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <GreyBox items={["CAPTURING THE STORY","NOTES OF ROMANCE","LED BY FRAGRANCE"]} />
        <div className="pt bg-white padded-content">
            <div className="row no-gutters">
                <div className="col-md-6">
                    <VideoTriggerElement isMobile={this.state.isMobile} thumb="/images/projects/enchanteur/shower_1.jpg" videoMobile="/videos/enchanteur.mp4" video="/videos/enchanteur_desktop.mp4" videoType="html" />
                </div>
                <div className="col-md-6">
                    <img src="/images/projects/enchanteur/shower_2.jpg" className="width-100" alt='image'/>
                </div>
            </div>
        </div>
        <div className="ptb padded-content hide-mobile">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <img src="/images/projects/enchanteur/5.jpg" className="width-100" alt='image'/>
            </ScrollAnimation>
        </div>
        <div className="ptb padded-content hide-desktop show-mobile bg-white">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <img src="/images/projects/enchanteur/5_1.jpg" className="width-100" alt='image'/>
            </ScrollAnimation>
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <div style={{marginTop:"3rem"}}>
                    <img src="/images/projects/enchanteur/5_2.jpg" className="width-100" alt='image'/>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <div style={{marginTop:"3rem"}}>
                    <img src="/images/projects/enchanteur/5_3.jpg" className="width-100" alt='image'/>
                </div>
            </ScrollAnimation>
        </div>
        {/* <div className="ptb padded-content">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <div className="yellow-box futura-light">DESIGN DEVELOPMENT</div>
            </ScrollAnimation>
        </div>
        <div className="bg-white padded-content pb">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <RotatingImages left={"/images/projects/enchanteur/6.jpg"} right={["/images/projects/enchanteur/7.jpg","/images/projects/enchanteur/7.jpg"]} moods={["Romantic","Floral","Feminine","French","Delicate"]} moodsListColor="#930018" />
            </ScrollAnimation>
        </div>
        <div className="text-center bg-white ptb">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <div className="futura-light book-style-text">FLORAL EXPRESSIONS</div>
                <div><Arrow direction="down" /></div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <div className="img-slider padded-content">
                    <SingleSlider images={["/images/projects/enchanteur/8.jpg","/images/projects/enchanteur/8.jpg","/images/projects/enchanteur/8.jpg"]} />
                </div>
            </ScrollAnimation>
        </div>
        <div className="text-center bg-white pb padded-content" style={{paddingTop:"3rem;"}}>
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <div className="futura-light book-style-text">SOCIAL CREATIVES</div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <div style={{marginTop:"3rem"}}>
                    <ImageGallery cols="4" images={["/images/projects/enchanteur/9.jpg","/images/projects/enchanteur/10.jpg","/images/projects/enchanteur/11.jpg","/images/projects/enchanteur/12.jpg"]} />
                </div>
            </ScrollAnimation>
        </div>
        
        <div className="ptb padded-content">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <div className="yellow-box futura-light">LOREM IPSUM</div>
            </ScrollAnimation>
        </div> */}
        <GreyTextBox heading="A digital-forward brand" text="Enchanteur excites us creatively by being a digital-forward brand, reaching out to its potential consumers largely through e-comm portals and its brand store. We thrive in this challenge every day."/>
        <div className="bg-white pb">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <img src="/images/projects/enchanteur/14.jpg" className="width-100" alt='image'/>
            </ScrollAnimation>
        </div>
        {/* <div className="pt bg-white">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <div className="row no-gutters">
                    <div className="col-md-6">
                        <img src="/images/projects/enchanteur/21.jpg" className="width-100" />
                    </div>
                    <div className="col-md-6">
                        <img src="/images/projects/enchanteur/22.jpg" className="width-100" />
                    </div>
                </div>
            </ScrollAnimation>
        </div>
        <div className="bg-white">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}> 
                <img src="/images/projects/enchanteur/23.jpg" className="width-100" />
            </ScrollAnimation>
        </div>
        <div className="btm ptb bg-white">
            <div className="padded-content">
                <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                    <RotatingImages left={"/images/projects/enchanteur/26.jpg"} right={["/images/projects/enchanteur/27.jpg","/images/projects/enchanteur/27.jpg"]} moods={["Playful","Girly","Flirty","Fun","Youthful"]} moodsListColor="#F39EBF" />
                </ScrollAnimation>
            </div>
        </div> */}
        <div className="bg-white white-menu-btn white-cursor">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <VideoSlider videoids={[332215823,487128921]} controls={true} />
            </ScrollAnimation>
        </div>
        <div className="position-relative bottom-part pt" style={{background:"#ffffff"}}>
            <div className="browser position-relative">
                <Browser prev="/projects/langoor" next="/projects/fynd" />
            </div>
            <img src="/images/wave-black.gif" className="width-100 wave"alt='image' />
        </div>
        <style jsx>{` 
            .pink-right{
                padding-left:20%;
            }
            .pink-section{
                background:#F8E6E6;
            }
            .btm{
                background:#F8E6E6;
            }
            .explorations-text{
                width:50%;
            }
            .img-slider{
                margin-top:3rem;
            }
            .result{
                position:absolute;
                left:5%;
                top:5%;
            }
            .result-desc{
                width:50%;
            }
            .browse{
                padding-top:5rem;
                padding-bottom:14rem;
            }
            .bottom-part{
                padding-bottom:25rem;
            }
            .wave{
                width: 100%;
                position: absolute;
                bottom:0;
                left: 0;
                z-index:1;
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
                .browse{
                    padding-top:5rem;
                    padding-bottom:7rem;
                }
                .explorations-text{
                    width:100%;
                }
                .bottom-part{
                    padding-bottom:13rem;
                }
                .pink-right {
                    padding-top: 5rem;
                    padding-left:0;
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
export default connect(mapStateToProps, {openMenu,showFullscreenVideo,removeClassFromCursor})(Enchanteur);
