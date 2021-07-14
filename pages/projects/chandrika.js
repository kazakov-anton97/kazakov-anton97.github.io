import Head from "next/head"
import { connect } from "react-redux"
import React from "react"
import Layout from "../../components/layout"
import {openMenu,removeClassFromCursor} from "../../redux/actions"
import Arrow from "../../components/arrow"
import SingleSlider from '../../components/singleSlider'
import ScrollAnimation from 'react-animate-on-scroll';
import {ANIMATION_DURATION} from '../../config'
import GreyBox from '../../components/greyBox'
import GreyTextBox from '../../components/greyTextBox'
import ImageGallery from '../../components/imageGallery'
import VideoSlider from '../../components/videoSlider'
import Video from '../../components/video'
import Browser from '../../components/browser'
import Player from '@vimeo/player';
import Slider from 'react-slick'
import { Parallax } from 'react-parallax';
class Chandrika extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        animate:false
    }
    this.slider = React.createRef()
  }
  componentDidMount() {
    this.props.removeClassFromCursor("white")
    setTimeout(()=>{
        this.props.openMenu(false)
        this.setState({animate:true})
        var iframe = document.getElementById('chandrika-video');
        var player = new Player(iframe);
        player.setVolume(0).then(function(){
            player.play()
        })
    },300)
  }
  render() {
    var settings = {
        slidesToShow:1,
        speed:1000,
        arrows:false
    }
    return (
      <Layout navPosition="absolute" navTextColor="black" menuBtnColor="black" footerStyle="yellow">
        <Head>
          <title>Project Chandrika | Opposable Thumbs</title>
        </Head>
        <div className={`top text-center ${this.state.animate?"animate":""}`} style={{height:`${this.props.common.windowHeight*0.6}px`}}>
            <div className="vertical-center">
                <div className="project-name overflow-hidden">
                    <div className="child">
                        Chandrika
                    </div>
                </div>
                <div className="project-description slightly-larger-text overflow-hidden">
                    <div className="child">
                        A popular soap filled with the goodness of natural ingredients and loved by millions of Indian women over the years.
                    </div>
                </div>
            </div>
        </div>
        <Video videoid={332220632} html_id="chandrika-video"/>
        <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
            <div className="brief-solution padded-content">
                <div className="brief">
                    <div className="brief-heading heading neufreit">The Brief <span className="inline-block arrow-right"><Arrow direction="right" /></span></div>
                    <div className="brief-text desc">
                        Chandrika is a household name. It works wonders on the skin and has a loyal base of consumers. But even these consumers did not know everything about the brand, and what made it so special. Like, it was 100% handmade from an Ayurvedic recipe that was over 70 years old, had more than 80% coconut oil, or that it took 10 days to make one soap! 
                    </div>
                    <div className="brief-img-wrapper">
                        <img src="/images/projects/chandrika/brief.jpg" className="width-100 brief-img" alt='image'/>
                    </div>
                </div>
                <div className="solution">
                    <div className="solution-heading heading neufreit">Solution <span className="inline-block arrow-right"><Arrow direction="right" /></span></div>
                    <div className="solution-text desc">
                        We created a beautiful story for digital media to bring alive the well-kept secrets of a very familiar brand. These little nuggets were meant to take the consumer by surprise and make her fall in love with her favourite soap, all over again. The organic feel of the film, the abundance of ingredients and the mesmerizing storytelling brought the messaging alive.
                    </div>
                    <div className="solution-img-wrapper">
                        <img src="/images/projects/chandrika/solution.jpg" className="width-100" alt='image'/>
                    </div>
                </div>
            </div>
        </ScrollAnimation>
        <GreyBox items={["CAPTURING THE STORY","FOCUSING ON INGREDIENTS","EXPRESSING GOODNESS"]} />
        <Parallax bgImage="/images/projects/chandrika/full.jpg" bgImageAlt="enchanteur" strength={50}>
            <div className="parallax-content-1"></div>
        </Parallax>
        {/* <div className="padded-content">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <ImageGallery cols="4" images={["/images/projects/chandrika/1.jpg","/images/projects/chandrika/2.jpg","/images/projects/chandrika/3.jpg","/images/projects/chandrika/4.jpg"]} />
            </ScrollAnimation>
        </div> */}
        <div className="padded-content ptb text-center bg-white">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                {/* <div className="futura-light book-style-text">INGREDIENT DRIVEN</div>
                <div style={{marginTop:"0.5rem"}}><Arrow direction="down" /></div> */}
                <div style={{marginTop:"2rem"}}>
                    <img src="/images/projects/chandrika/5.jpg" className="width-100"alt='image' />
                </div>
            </ScrollAnimation>
        </div>
        <div className="padded-content bg-white">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <div className="yellow-box futura-light">DESIGN DEVELOPMENT</div>
            </ScrollAnimation>
        </div>
        <div className="padded-content ptb text-center bg-white">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <div className="row no-gutters">
                    <div className="col-md-6">
                        <img src="/images/projects/chandrika/6.jpg" className="width-100"alt='image' />
                    </div>
                    <div className="col-md-6">
                        <img src="/images/projects/chandrika/7.jpg" className="width-100"alt='image' />
                    </div>
                </div>
            </ScrollAnimation>
        </div>
        {/* <div className="pb padded-content bg-white">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <div className="row no-gutters">
                    <div className="col-md-6">
                        <img src="/images/projects/chandrika/8.jpg" className="width-100" />
                    </div>
                    <div className="col-md-6">
                        <img src="/images/projects/chandrika/9.jpg" className="width-100" />
                    </div>
                </div>
            </ScrollAnimation>
        </div> */}
        <div className="bg-white">
            <GreyTextBox heading="Ayurvedic goodness" text="Through the imagery and messaging we depicted the Ayurvedic process and natural ingredients used."/>
        </div>
        <div className="padded-content ptb text-center">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <div className="futura-light book-style-text">DIGITAL CREATIVES</div>
                <div style={{marginTop:"1rem"}}><Arrow direction="down" /></div>
            </ScrollAnimation>
        </div>
        <div>
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <img src="/images/projects/chandrika/full2.jpg" className="width-100" alt='image'/>
            </ScrollAnimation>
        </div>
        <div className="bg-white padded-content ptb">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <div className="flex-images">
                    <div className="flex-image">
                        <img src="/images/projects/chandrika/slide1.jpg" className="width-100" alt='image'/>
                    </div>
                    <div className="flex-image">
                        <img src="/images/projects/chandrika/slide2.jpg" className="width-100"alt='image' />
                    </div>
                    <div className="flex-image">
                        <img src="/images/projects/chandrika/slide3.jpg" className="width-100"alt='image' />
                    </div>
                    <div className="flex-image">
                        <img src="/images/projects/chandrika/slide4.jpg" className="width-100"alt='image' />
                    </div>
                    <div className="flex-image">
                        <img src="/images/projects/chandrika/slide5.jpg" className="width-100" alt='image'/>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
        <GreyBox items={["AYURVEDIC HERITAGE","CAREFUL BRANDING","CONSUMER CONNECT"]} />

        {/* <div>
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <img src="/images/projects/chandrika/10.jpg" className="width-100" />
            </ScrollAnimation>
        </div> */}
        {/* <div className="bg-white">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <SingleSlider images={["/images/projects/chandrika/18.jpg","/images/projects/chandrika/19.jpg"]} />
            </ScrollAnimation>
        </div> */}
        <div className="ptb bg-white padded-content">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <div className="yellow-box futura-light">SOCIAL MEDIA POSTS</div>
            </ScrollAnimation>
        </div>
        <div>
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <img src="/images/projects/chandrika/creative1.jpg" className="width-100"alt='image' />
            </ScrollAnimation>
        </div>
        <div>
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <img src="/images/projects/chandrika/creative2.jpg" className="width-100"alt='image' />
            </ScrollAnimation>
        </div>
        {/* <div className="bg-white padded-content">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <ImageGallery cols="3" images={["/images/projects/chandrika/12.jpg","/images/projects/chandrika/13.jpg","/images/projects/chandrika/14.jpg","/images/projects/chandrika/15.jpg","/images/projects/chandrika/16.jpg","/images/projects/chandrika/17.jpg"]} />
            </ScrollAnimation>
        </div> */}
        <div className="padded-content ptb bg-white">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <div className="neufreit heading">Explorations <Arrow /></div>
                <div className="explorations-text">From films that showcased the secrets of the brand, to creatives that spoke of its benefits and natural goodness, we covered a spectrum of ideas.</div>
            </ScrollAnimation>
        </div>
        <div className="slider-section ptb bg-white">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <div className="slider-wrapper position-relative">
                    <Slider {...settings} ref={this.slider}>
                        <div className="slide">
                            <img src="/images/projects/chandrika/slider1.jpg" className="width-100"alt='image' />
                        </div>
                        <div className="slide">
                            <img src="/images/projects/chandrika/21.jpg" className="width-100" alt='image'/>
                        </div>
                    </Slider>
                    <div className="slider-control right" onClick={()=>this.slider.current.slickNext()}><Arrow /></div>
                    <div className="slider-control left" onClick={()=>this.slider.current.slickPrev()}><Arrow direction="left" /></div>
                </div>
            </ScrollAnimation>
        </div>
        <div>
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <img src="/images/projects/chandrika/model.jpg" className="width-100" alt='image'/>
            </ScrollAnimation>
        </div>
        <div className="bg-white padded-content ptb">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <div className="flex-images">
                    <div className="flex-image-1">
                        <img src="/images/projects/chandrika/slide_1.jpg" className="width-100"alt='image' />
                    </div>
                    <div className="flex-image-1">
                        <img src="/images/projects/chandrika/slide_2.jpg" className="width-100"alt='image' />
                    </div>
                    <div className="flex-image-1">
                        <img src="/images/projects/chandrika/slide_3.jpg" className="width-100"alt='image' />
                    </div>
                    <div className="flex-image-1">
                        <img src="/images/projects/chandrika/slide_4.jpg" className="width-100"alt='image' />
                    </div>
                    <div className="flex-image-1">
                        <img src="/images/projects/chandrika/slide_5.jpg" className="width-100"alt='image' />
                    </div>
                    <div className="flex-image-1">
                        <img src="/images/projects/chandrika/slide_6.jpg" className="width-100" alt='image'/>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
        {/* <div className="ptb padded-content bg-white">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <ImageGallery cols="4" images={["/images/projects/chandrika/22.jpg","/images/projects/chandrika/23.jpg","/images/projects/chandrika/24.jpg","/images/projects/chandrika/25.jpg"]} />
            </ScrollAnimation>
        </div> */}
        {/* <div className="pb bg-white padded-content">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <div className="row no-gutters">
                    <div className="col-md-6">
                        <img src="/images/projects/chandrika/26.jpg" className="width-100" />
                    </div>
                    <div className="col-md-6">
                        <img src="/images/projects/chandrika/27.jpg" className="width-100" />
                    </div>
                </div>
            </ScrollAnimation>
        </div> */}
        {/* <div className="bg-white">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <VideoSlider videoids={[332220632]} controls={false} />
            </ScrollAnimation>
        </div> */}
        <div className="bg-white">
            <GreyTextBox heading="A strong bond" text="Our messaging was meant to resonate with Chandrika’s loyal base of consumers, and draw them in to try more products in the range."/>
        </div>
        <div className="position-relative bottom-part pt" style={{background:"#ffffff"}}>
            <div className="browser position-relative">
                <Browser prev="/projects/fynd" next="/projects/santoor" />
            </div>
            <img src="/images/wave-black.gif" className="width-100 wave" alt='image'/>
        </div>
        <style jsx>{` 
            .flex-images{
                display:flex;
                flex-flow: row wrap;
            }
            .flex-image{
                width:20%;
            }
            .flex-image-1{
                width:16.6%;
            }
            .slider-control.left {
                top: calc(50% - 3rem);
                left: -5rem;
            }
            .slider-control.right {
                right: -5rem;
            }
            .slider-control {
                position: absolute;
                top: calc(50% - 1.4rem);
            }
            .slider-section{
                background:#F0F0F0;
                padding-left:20%;
                padding-right:20%;
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
                padding-bottom:30rem;
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
            .brief-img{
                margin-left:-10%;
            }
            .solution-img-wrapper{
                margin-top:5rem;
            }
            .brief-img-wrapper{
                margin-top:2rem;
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
                .slider-section{
                    padding-left:10%;
                    padding-right:10%;
                }
                .slider-control.left {
                    left: -4rem;
                }
                .slider-control.right {
                    right: -4rem;
                }
                // .flex-image,.flex-image-1{
                //     width:50%;
                // }
                .bottom-part{
                    padding-bottom:15rem;
                }
                .solution-img-wrapper{
                    margin-top:3rem;
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
export default connect(mapStateToProps, {openMenu,removeClassFromCursor})(Chandrika);
