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
import Video from '../../components/video'
import Player from '@vimeo/player';
import Link from 'next/link'
import VideoTriggerElement from '../../components/videoTriggerElement'
class BigBanyan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        animate:false
    }
  }
  componentDidMount() {
    setTimeout(()=>{
        this.props.openMenu(false)
        this.props.removeClassFromCursor("white")
        this.props.removeClassFromCursor("larger")
        this.setState({animate:true})
        var iframe = document.getElementById('big-banyan-video');
        var player = new Player(iframe);
        player.setVolume(0).then(function(){
            player.play()
        })
    },300)
  }
  render() {
    return (
      <Layout navPosition="absolute" navTextColor="black" menuBtnColor="black" footerStyle="yellow">
        <Head>
          <title>Project Big Banyan | Opposable Thumbs</title>
        </Head>
        <div className={`top text-center ${this.state.animate?"animate":""}`} style={{height:`${this.props.common.windowHeight*0.6}px`}}>
            <div className="vertical-center">
                <div className="project-name overflow-hidden">
                    <div className="child">
                        Big Banyan
                    </div>
                </div>
                <div className="project-description slightly-larger-text overflow-hidden">
                    <div className="child">
                    Premium Indian wines that needed to be reimagined as a brand, to communicate better with their consumer, the sophisticated wine drinker.
                    </div>
                </div>
            </div>
        </div>
        <Video videoid={388412864} html_id="big-banyan-video" loop={true}/>
        {/* <Parallax bgImage="/images/projects/bigbanyan/1.jpg" bgImageAlt="big-banyan" strength={100}>
            <div className="parallax-content-1"></div>
        </Parallax> */}
        <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
            <div className="brief-solution padded-content">
                <div className="brief">
                    <div className="brief-heading heading neufreit">The Brief <span className="inline-block arrow-right"><Arrow direction="right" /></span></div>
                    <div className="brief-text desc">
                        After over a decade of launching their wines, Big Banyan decided it was time for change. Their wines were well-loved, but recall was a problem. Their passion for winemaking was not clearly translating into the brand communication. The imagery of their packaging needed a contemporary touch too. They went to the consumers and heard what they had to say. And thus, was born an exercise of strengthening their positioning, their brand story and their packaging.
                    </div>
                    <div className="show-mobile hide-desktop text-center">
                        <img src="/images/projects/bigbanyan/bigbanyan_mobile_1.jpg" alt='image' alt='image' style={{width:"50%",margin:"auto"}} />
                    </div>
                </div>
                <div className="solution">
                    <div className="solution-heading heading neufreit">Solution <span className="inline-block arrow-right"><Arrow direction="right" /></span></div>
                    <div className="solution-text desc">
                        Our conversations with the winemaker, the brand team and consumer research led us to discover key elements that made for an amazing brand story, and the problems it could solve. We decided to tell the tale of the terroir and their love for winemaking, bring alive the sophistication of the wines through new packaging, and keep brand recall at the forefront.
                    </div>
                    <div className="show-mobile hide-desktop" style={{marginTop:"3rem"}}>
                        <img src="/images/projects/bigbanyan/bigbanyan_mobile_2.jpg" style={{width:"100%",margin:"auto"}} />
                    </div>
                </div>
            </div>
        </ScrollAnimation>
        <div className="bg-text bigbanyanwines-1 padded-content">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <div>
                    <div className="yellow-box futura-light">BIG BANYAN WINES</div>
                </div>
            </ScrollAnimation>
            <div className="hide-mobile">
                <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                    <div className="text-right" style={{marginTop:"6rem"}}>
                        <img src="/images/projects/bigbanyan/2.jpg" style={{width:"95%"}}alt='image' />
                    </div>
                </ScrollAnimation>
            </div>
            {/* <div className="show-mobile hide-desktop">
                <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                    <div className="text-center">
                        <img src="/images/projects/bigbanyan/bigbanyan_mobile_1.jpg" style={{width:"50%",margin:"auto"}} />
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                        <img src="/images/projects/bigbanyan/bigbanyan_mobile_2.jpg" style={{width:"100%"}} />
                </ScrollAnimation>
            </div> */}
        </div>
        <div className="result bg-white padded-content">
                <div className="result-top">
                    <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                        <div className="result-heading heading neufreit">The Result <span className="inline-block arrow-right"><Arrow direction="right" /></span></div>
                        <div className="result-text">
                            With the new packaging design, we romanced the brand name. Accents in gold, silver and rose gold differentiated the varietals and also added elegance to the bottles. 
                        </div>
                    </ScrollAnimation>
                </div>
                <div className="result-image-wrapper text-right">
                    <img src="/images/projects/bigbanyan/result.jpg"alt='image' className="result-image" />
                </div>
        </div>
        <div className="show-mobile hide-desktop bg-white">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <div style={{paddingTop:"10rem"}}>
                    <img src="/images/projects/bigbanyan/bigbanyan_mobile_3.jpg"alt='image' style={{width:"100%"}} />
                </div>
            </ScrollAnimation>
        </div>
        <div className="show-mobile hide-desktop bg-white" style={{marginTop:"4rem"}}>
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <img src="/images/projects/bigbanyan/bigbanyan_mobile_4.jpg" style={{width:"100%"}} alt='image'/>
            </ScrollAnimation>
        </div>
        <GreyBox items={["INDIA INSPIRED","INTERNATIONAL APPEAL","FLAVOUR FOCUSED"]} />
        <div className="hide-mobile">
            <div className="white-cursor white-menu-btn">
                <Parallax bgImage="/images/projects/bigbanyan/4.jpg" bgImageAlt="big-banyan" strength={100}>
                    <div className="parallax-content-2"></div>
                </Parallax>
            </div>
            <div className="padded-content">
                <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                    <img src="/images/projects/bigbanyan/5.jpg"  className="width-100"alt='image' />
                </ScrollAnimation>
            </div>
        </div>
        <div className="bg-white limited-shiraz">
            <div className="h padded-content">
                <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                    <div className="limited-shiraz-heading">
                        <div className="yellow-box futura-light">LIMITED SHIRAZ</div>
                    </div>
                </ScrollAnimation>
            </div>
            <div className="hide-mobile">
                <div className="white-cursor white-menu-btn">
                    <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                        <Parallax bgImage="/images/projects/bigbanyan/6.jpg" bgImageAlt="big-banyan" strength={100}>
                            <div className="parallax-content-1"></div>
                        </Parallax>
                    </ScrollAnimation>
                </div>
                <div className="padded-content">
                    <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                        <img src="/images/projects/bigbanyan/7.jpg"  className="width-100" alt='image'/>
                    </ScrollAnimation>
                </div>
            </div>
            <div className="show-mobile hide-desktop bg-white">
                <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                    <img src="/images/projects/bigbanyan/limited_shiraz_1.jpg"  className="width-100"alt='image' />
                </ScrollAnimation>
                <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                    <img src="/images/projects/bigbanyan/limited_shiraz_2.jpg"  className="width-100" alt='image'/>
                </ScrollAnimation>
                <div style={{paddingTop:"5rem"}}>
                    <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                        <img src="/images/projects/bigbanyan/limited_shiraz_3.jpg"  className="width-100"alt='image' />
                    </ScrollAnimation>
                </div>
                <div style={{paddingTop:"5rem"}}>
                    <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                        <img src="/images/projects/bigbanyan/limited_shiraz_4.jpg"  className="width-100"alt='image' />
                    </ScrollAnimation>
                </div>
                <div style={{paddingTop:"5rem"}}>
                    <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                        <img src="/images/projects/bigbanyan/limited_shiraz_5.jpg"  className="width-100" alt='image'/>
                    </ScrollAnimation>
                </div>
            </div>
            <div className="show-mobile hide-desktop" style={{marginTop:"-3px"}}>
                <Parallax bgImage="/images/projects/bigbanyan/limited_shiraz_6.jpg" bgImageAlt="langoor" strength={100} className="position-relative">
                    <div className="parallax-content-4"></div>
                    <div className="parallax-bottom-text">
                        <div className="heading neufreit">The Result <span className="inline-block project-arrow"><Arrow direction="right" /></span></div>
                        <div className="parallax-bottom-desc">
                            The reserve wine of Big Banyan is a much-treasured vintage. So, we upped the ante on sophistication. The bottle was sleek, and the gold accents and embossments made it a prized possession.
                        </div>
                    </div>
                </Parallax>
            </div>
            <div className="hide-mobile white-cursor white-menu-btn">
                <Parallax bgImage="/images/projects/bigbanyan/8.jpg" bgImageAlt="big banyan" strength={50} className="parallax-full-image">
                    <div className="parallax-full-image-info text-white padded-content">
                        <div className="heading neufreit">The Result <span className="inline-block project-arrow"><Arrow direction="right" /></span></div>
                        <div className="parallax-full-image-desc">
                            The reserve wine of Big Banyan is a much-treasured vintage. So, we upped the ante on sophistication. The bottle was sleek, and the gold accents and embossments made it a prized possession.
                        </div>
                    </div>
                </Parallax>
            </div>
            <div className="custom-padding">
                <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                    <img src="/images/projects/bigbanyan/9.jpg" className="width-100" alt='image'/>
                </ScrollAnimation>
                <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                    <img src="/images/projects/bigbanyan/10.jpg" className="width-100" alt='image'/>
                </ScrollAnimation>
            </div>
        </div>
        <GreyBox items={["Evocative stories","Real moments","Process centric"]} />
        <div className="white-cursor white-menu-btn">
            <Parallax bgImage="/images/projects/bigbanyan/11-1.jpg" bgImageAlt="big-banyan" strength={100}>
                <div className="parallax-content-1"></div>
            </Parallax>
        </div>
        <div className="bellissima padded-content">
            <div className="bellissima-heading">
                <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                    <div className="yellow-box futura-light">BELLISSIMA DESSERT WINE</div>
                </ScrollAnimation>
            </div>
            <div className="hide-mobile">
                <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                    <img src="/images/projects/bigbanyan/12.jpg" className="width-100" alt='image'/>
                </ScrollAnimation>
            </div>
            <div style={{marginTop:"2rem"}} className="show-mobile hide-desktop">
                <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                    <img src="/images/projects/bigbanyan/bellissima.jpg" className="width-100" alt='image'/>
                </ScrollAnimation>
            </div>
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <div className="heading neufreit">Winery <span className="inline-block project-arrow"><Arrow direction="right" /></span></div>
                <div className="winery-text">With the launch of the Big Banyan winery, we needed a stronger focus on the brand’s winemaking ethos. We created a series of films to demystify the process and bring to fore the three pillars of the brand – the land of its origins, the lore behind it and their love for winemaking.</div>
            </ScrollAnimation>
        </div>
        <GreyBox items={["EVOCATIVE STORIES","REAL MOMENTS","PROCESS CENTRIC"]} />
        {/* <div className="show-mobile hide-desktop" style={{paddingTop:"10rem",paddingBottom:"10rem"}}>
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <img src="/images/projects/bigbanyan/bellissima2.jpg" className="width-100"/>
            </ScrollAnimation>
        </div> */}
        {/* <div className="bg-white custom-padding-2 hide-mobile">
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <img src="/images/projects/bigbanyan/13.jpg" className="width-100"/>
            </ScrollAnimation>
        </div> */}
        <div className="bg-white position-relative">
            <div className="bottom-content">
                <div className="winery-bottom-heading padded-content">
                    <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                        <div className="yellow-box futura-light">WINERY</div>
                    </ScrollAnimation>
                </div>
                {/* <div style={{marginTop:"7.5rem"}} className="hide-mobile padded-content">
                    <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                        <img src="/images/projects/bigbanyan/14.jpg" className="width-100" />
                    </ScrollAnimation>
                </div> */}
                <div style={{marginTop:"7.5rem"}} className="hide-mobile padded-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6">
                                <VideoTriggerElement videoType="vimeo" thumb="/images/projects/bigbanyan/winery_bottom_1.jpg" videoid={388419241} />
                            </div>
                            <div className="col-6">
                                <VideoTriggerElement videoType="vimeo" thumb="/images/projects/bigbanyan/winery_bottom_2.jpg" videoid={388419993} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="show-mobile hide-desktop">
                    <div style={{marginTop:"6.3rem"}}>
                        <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                            <VideoTriggerElement videoType="vimeo" thumb="/images/projects/bigbanyan/winery_bottom_1.jpg" videoid={388419241} />
                        </ScrollAnimation>
                    </div>
                    <div style={{marginTop:"4rem"}}>
                        <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                            <VideoTriggerElement videoType="vimeo" thumb="/images/projects/bigbanyan/winery_bottom_2.jpg" videoid={388419993} />
                        </ScrollAnimation>
                    </div>
                </div>
                <div className="more text-center" style={{marginTop:"8rem"}}>
                    <div style={{marginTop:"3.8rem"}} className="futura-light book-style-text"><Link href="/projects?filter=films"><a className="remove-link-style">EXPLORE ALL FILMS</a></Link></div>
                </div>
                <div className="browse">
                    <Browser prev="/projects/mia-by-tanishq" next="/projects/langoor" />
                </div>
            </div>
            <img src="/images/wave-black.gif" className="width-100 wave" alt='image'/>
        </div>
        <style jsx>{` 
            .browse{
                padding-top:5rem;
                padding-bottom:14rem;
            }
            .bottom-content{
                position:relative;
                z-index:2;
                padding-bottom:7.5rem;
                padding-top:7.5rem;
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
                .browse{
                    padding-top:5rem;
                    padding-bottom:7rem;
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
