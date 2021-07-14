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
import Video from '../../components/video'
import Player from '@vimeo/player'
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
    this.props.removeClassFromCursor("white")
    this.setState({isMobile:window.innerWidth < MOBILE_BREAKPOINT?true:false})
    setTimeout(()=>{
        this.props.openMenu(false)
        this.setState({animate:true})
        var iframe = document.getElementById('mia-video');
        var player = new Player(iframe);
        player.setVolume(0).then(function(){
            player.play()
        })
        // var iframe = document.getElementById('bhavna-video');
        // var player = new Player(iframe);
        // player.setVolume(0).then(function(){
        //     player.play()
        // })
    },300)
    // document.getElementById('video').play();
  }
  render() {
    return (
      <Layout footerType="yellow" navPosition="absolute" navTextColor="black" menuBtnColor="black" footerStyle="yellow">
        <Head>
          <title>Project Mia By Tanishq | Opposable Thumbs</title>
        </Head>
        <div className={`top text-center ${this.state.animate?"animate":""}`} style={{height:`${this.props.common.windowHeight*0.6}px`}}>
            <div className="vertical-center">
                <div className="project-name overflow-hidden">
                    <div className="child">
                        Mia by Tanishq
                    </div>
                </div>
                <div className="slightly-larger-text overflow-hidden">
                    <div className="child">
                        A modern jewelry brand by Tanishq, designed for women forging their own path.
                    </div>
                </div>
            </div>
        </div>
        <Video videoid={484371597} html_id="mia-video" loop={true}/>
        <div className="brief-solution padded-content pb">
            <div className="brief">
                <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                    <div className="brief-heading heading neufreit">The Brief <span className="inline-block arrow-right"><Arrow direction="right" /></span></div>
                    <div className="brief-text desc">
                        Mia by Tanishq is a charming collection of trendy, elegant, and playful jewelry. It is fashioned for women who like to express themselves through jewelry, for women who are always on the move (Me In Action). To bring the brand story alive, Mia had created a series called, ‘Me In Action’. This series captures stories of women with unique personalities, and a passion to make a difference. We were engaged to contribute a capsule of stories for this series.
                    </div>
                </ScrollAnimation>
            </div>
            <div className="solution">
                <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                    <div className="solution-heading heading neufreit">Solution <span className="inline-block arrow-right"><Arrow direction="right" /></span></div>
                    <div className="solution-text desc">
                        Our team scouted various sources for stories about women doing interesting things. From newspapers, magazines and books to the world wide web, and even our own personal networks, we researched and handpicked the most fascinating stories, delved into their achievements, met them, chatted with them, and crafted their stories into bite-sized films. 
                    </div>
                </ScrollAnimation>
            </div>
        </div>
        <GreyBox items={["CAPTURING THE STORY","CREATING A CONNECT","INSPIRING THE WORLD"]} />
        <Parallax bgImage={this.state.isMobile?"/images/projects/mia/1.jpg":"/images/projects/mia/1.jpg"} bgImageAlt="mia" strength={50}>
                <div className="result-info">
                    <div className="heading neufreit">The Result <span className="inline-block project-arrow"><Arrow direction="right" /></span></div>
                    <div className="result-desc">
                        We created five stories of women from various walks of life. These included a bodybuilder, a detective, a Special Olympics coach, an Ironman and an animal rescuer.
                    </div>
                </div>
        </Parallax>
        <div className="bg-white ptb text-center">
            <img src="/images/projects/mia/mia.jpg" style={{width:"150px"}}alt='image'/>
            {/* <div className="ruby-words-heading heading">Ruby's words</div> */}
            <div className="book-style-text futura-light ruby-words">
                “I HAVE COME TO RESPECT MY body. love every muscle, every curve. THE SWEAT AND PAIN MADE ME STRONG”
                <div style={{marginTop:"1rem"}}>Ruby Beauty Glory</div>
            </div>
        </div>
        <SingleSlider cols="3" images={["/images/projects/mia/3.jpg","/images/projects/mia/2.jpg"]} autoplay={true} autoplaySpeed={3000}/>
        <div style={{marginTop:"-0.6rem"}}>
            <GreyTextBox heading="The Idea" text={`Through this capsule series, we wanted to showcase narratives that were real, unique, fun and inspiring. We were deeply moved by the stories of the women we met. And through our films, we brought alive their journeys, aspirations and dreams.`} />
        </div>
        <div className="padded-content ptb bg-white">
            <div className="book-style-text futura-light text-center">
                EXPLORATION PIECES
                <div style={{marginTop:"1rem"}}>
                    <Arrow direction="down" />
                </div>
            </div>
            <img src="/images/projects/mia/5.jpg" className="width-100"alt='image' />
        </div>
        <Parallax bgImage="/images/projects/mia/4.jpg" bgImageAlt="mia" strength={100}>
            <div className="parallax-content-1"></div>
        </Parallax>
        <div className="ptb padded-content bg-white">
            <img src="/images/projects/mia/6.jpg" className="width-100"alt='image' />
        </div>
        <Video videoid={484373599} html_id="bhavna-video" loop={true}/>
        {/* <GreyTextBox heading="Colour story" text={`We eat with our eyes first. And colours plays a big part in enticing us. Yellow is one of the most prevalently used colours in food branding because it is believed to whet people's appetites, making it more likely for them to enter the store and buy food.`} /> */}
        <div className="bg-white position-relative bottom-part">
            <div className="browser position-relative">
                <Browser prev="/projects/iceburg" next="/projects/big-banyan" />
            </div>
            <img src="/images/wave-yellow-white.gif" className="width-100 wave" alt='image'/>
        </div>
        <style jsx>{` 
            .ruby-words-heading{
                margin-top:3rem;
            }
            .ruby-words{
                width:60%;
                margin:3rem auto 0 auto;
            }
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
export default connect(mapStateToProps, {openMenu,removeClassFromCursor})(Langoor);
