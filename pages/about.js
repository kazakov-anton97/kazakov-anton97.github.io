import Head from "next/head"
import { connect } from "react-redux"
import React from "react"
import Layout from "../components/layout"
import Arrow from "../components/arrow"
import {openMenu} from "../redux/actions"
import Slider from "react-slick";
import ScrollAnimation from 'react-animate-on-scroll';
import {ANIMATION_DURATION} from '../config'
import Link from 'next/link'
import Clients from '../components/clients'
class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animate:false,
      animateList:false
    }
    this.servicesList = React.createRef();
    this.teamSlider = React.createRef();
  }
  handleScroll = ()=>{
    if(this.servicesList.current.getBoundingClientRect().top - window.innerHeight < -100 && !this.state.animateList){
      this.setState({animateList:true})
    }
  }
  componentDidMount() {
    setTimeout(()=>{
      this.props.openMenu(false)
      this.setState({animate:true})
    },300)
    window.addEventListener('scroll',this.handleScroll)
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.handleScroll)
  }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      loop:true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed:3000,
      pauseOnHover:false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots:false
          }
        }
      ]
    }
    return (
      <Layout page="about" navPosition="absolute" navTextColor="black" menuBtnColor="black" hindiText="white" footerType="yellow">
        <Head>
          <title>About Opposable Thumbs | Brand Identity Design Agency</title>
      <meta name="description" content="If you have a new brand to launch, we can help you, right from naming it to developing its identity."/>
    </Head>
        <div className={`top position-relative ${this.state.animate?"animate":""}`} style={{minHeight:`${this.props.common.windowHeight*0.95}px`}}>
            <div className="relative-items position-relative">
                <div className="fun futura-light overflow-hidden">
                    <div className="child">
                      WE TAKE FUN SERIOUSLY
                    </div>
                </div>
                <div className="top-title overflow-hidden">
                    <div className="child">
                      About us
                    </div>
                </div>
                <div className="bg-text helvetica-neue-condensed overflow-hidden">
                  <div className="child">
                    raison<br/>
                    d’être
                  </div>
                </div>
            </div>
            <img src="/images/wave-white-yellow.gif" className="top-wave width-100"alt='image'/>
        </div>
        <div className="ideology text-center padded-content">
          <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
            <div className="ideology-heading">Our ideology</div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
            <div className="ideology-content slightly-larger-text futura-light">
                Creative work should be insightful and engaging.<br/>But above all, the process should be enjoyable.
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
            <div style={{marginTop:"11.4rem"}}>
                <Arrow direction="down" />
            </div>
          </ScrollAnimation>
        </div>
        <div className="about-services-wrapper white-cursor white-menu-btn">
          <div className="hide-desktop show-mobile">
            <img src="/images/about-mobile-11.jpg" className="width-100" alt='image'/>
          </div>
          <div className="about-services">
            <div className="col1 position-relative">
              <img src="/images/about-1.jpg" alt='image'/>
            </div>
            <div className="col2">
                <ul ref={this.servicesList} className={`list-style-none about-services-list neufreit ${this.state.animateList?"animate":""}`}>
                  <li>
                    <Link href={{ pathname: '/projects', query: { filter: 'insights' },}}>
                        <a className="larger-cursor">
                          Insights
                        </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={{ pathname: '/projects', query: { filter: 'brand-identity' },}}>
                        <a className="larger-cursor">
                          Brand Identity
                        </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={{ pathname: '/projects', query: { filter: 'packaging' },}}>
                        <a className="larger-cursor">
                          Packaging
                        </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={{ pathname: '/projects', query: { filter: 'advertising' },}}>
                        <a className="larger-cursor">
                          Advertising
                        </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={{ pathname: '/projects', query: { filter: 'digital' },}}>
                        <a className="larger-cursor">
                          Digital
                        </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={{ pathname: '/projects', query: { filter: 'graphics' },}}>
                        <a className="larger-cursor">
                          Graphics
                        </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={{ pathname: '/projects', query: { filter: 'films' },}}>
                        <a className="larger-cursor">
                          Films
                        </a>
                    </Link>
                  </li>
                </ul>
            </div>
            <div className="col3 position-relative">
              <img src="/images/about-2.jpg" alt='image'/>
            </div>
          </div>
          {/* <div className="futura-book view-more text-center">
            <div>VIEW MORE</div>
            <div style={{marginTop:"4.9rem"}}>
              <Arrow direction="down"/>
            </div>
          </div> */}
          <div className="hide-desktop show-mobile" style={{marginTop:"6.5rem"}}>
            <img src="/images/about-mobile-22.jpg" className="width-100" alt='image'/>
          </div>
        </div>
        <div className="storytellers">
            <div className="storytellers-top text-center">
              <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <div className="storytellers-top-heading">Meet<br className="hide-desktop show-mobile"/> The Storytellers</div>
                <div className="slightly-larger-text storytellers-text">Opposable Thumbs was founded by Manavi and Neeraja, creative folk who believe in slow living, taking up “heart” projects and enjoying every moment of the process.</div>
              </ScrollAnimation>
            </div>
            <div className="team">
              <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <Slider {...settings} ref={this.teamSlider}>
                  <div className="slide slide1">
                    <img src="/images/manavi1.jpg" className="width-100" alt='image'/>
                    <div className="team-member-info text-center">
                      <div className="inline-block" style={{margin:"auto"}}>
                        <span className="name inline-block futura-mdbt">Manavi Singh</span>
                        <span className="designation inline-block futura-light">Creative Director – Design</span>
                      </div>
                    </div>
                  </div>
                  <div className="slide slide2">
                    <img src="/images/neeraja1.jpg" className="width-100" />
                    <div className="team-member-info futura-light text-center">
                      <div className="inline-block" style={{margin:"auto"}}>
                        <span className="name inline-block futura-mdbt">Neeraja</span>
                        <span className="designation inline-block futura-light">Creative Director – Strategy &amp; Content</span>
                      </div>
                    </div>
                  </div>
                </Slider>
                {/* <div className="navigator text-center hide-desktop show-mobile">
                  <div className="nav-wrapper inline-block margin-auto">
                    <span className="inline-block prev" onClick={()=>this.teamSlider.current.slickPrev()}><Arrow direction="left" /></span>
                    <span className="inline-block txt">team</span>
                    <span className="inline-block next" onClick={()=>this.teamSlider.current.slickNext()}><Arrow direction="right" /></span>
                  </div>
                </div> */}
              </ScrollAnimation>
            </div>
        </div>
        <div className="inspire text-center bg-yellow padded-content">
          <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
            We work <br className="hide-desktop show-mobile" />with brands<br/>
            that inspire us
          </ScrollAnimation>
        </div>
        <div className="position-relative">
          <Clients />
          <img src="/images/wave-yellow-white.gif" className="width-100 wave" alt='image'/>
        </div>
        <style jsx>{`
            .top-wave{
                position:absolute;
                bottom:0;
                left:0;
                z-index:1;
            }
            .wave{
              width: 100%;
              position: absolute;
              bottom:0;
              left: 0;
              z-index:1;
            }
            .brand-images-wrapper{
              position: relative;
              z-index: 2;
            }
            .animate .fun .child{
              transition-delay: 0.4s;
            }
            .animate .top-title .child{
                transition-delay: 0.6s;
            } 
            .animate .bg-text .child{
                transition-delay: 0.7s;
            }
            .about-services-list li a{
              color:#ffffff;
            }
            .about-services-list li a:hover{
              // font-family: PoppinsMediumItalic,sans-serif !important;
            }
            .about-services-list li{
              transform: rotateX(540deg);
              transition: transform 800ms, opacity 500ms;
              transition-delay:.3s;
              transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
              -webkit-backface-visibility: hidden;
              backface-visibility: hidden;
              margin: 1.6rem 0;
            }
            .about-services-list.animate li{
              transform: rotateX(0deg);
            }
            .brands{
              background:#ffffff;
              padding-left:13.2rem;
              padding-right:13.2rem;
              padding-top:20rem;
              padding-bottom:20rem;
            }
            .brands .col1 .brand-image{
              padding-right:9rem;
            }
            .brands .col2 .brand-image{
              padding-left:4.5rem;
              padding-right:4.5rem;
            }
            .brands .col3 .brand-image{
              padding-left:4.5rem;
              padding-right:4.5rem;
            }
            .inspire{
              font-size:4.6rem;
              padding-top:13.3rem;
              padding-bottom:13.3rem;
            }
            .navigator{
              font-size:4.6rem;
              margin-top:9.5rem;
            }
            .navigator .txt{
              padding:0 3rem;
            }
            .team-member-info{
              margin-top:3.2rem;
              font-size: 2rem;
            }
            .team-member-info .designation{
              margin-left:1rem;
            }
            .team .slide1{
              padding-right:4rem;
            }
            .team .slide2{
              padding-left:4rem;
            }
            .team{
              padding-left:10%;
              padding-right:10%;
            }
            .storytellers-top{
              padding-top:12.2rem;
              padding-bottom:11.7rem;
              padding-left:17%;
              padding-right:17%;
              background:#E4E4E4;
            }
            .storytellers-top-heading{
              // font-size:8.6rem;
              font-size:4.6rem;
            }
            .storytellers{
                background:#ffffff;
                padding-bottom:7.3rem;
            }
            .view-more{
              margin-top:3.3rem;
              font-size:2rem;
            }
            .about-services-wrapper{
              background:#000000;
              color:#ffffff;
              padding-top:10rem;
              padding-bottom:10rem;
            }
            .about-services{
              display:flex;
              flex-flow:row nowrap;
              text-align:center;
            }
            .about-services-list{
              font-size: 4rem;
            }
            .about-services-list li {
              line-height: 1.1;
            }
            .about-services .col1 img{
              height: 100%;
              position: absolute;
              left: -68%;
            }
            .about-services .col3 img{
              height: 100%;
              position: absolute;
              right: -68%;
            }
            .about-services .col3{
              flex:1 1 0;
              height:63rem;
            }
            .about-services .col1{
              flex:1 1 0;
              height:63rem;
            }
            .about-services .col2{
              width:43%;
              display:flex;
              flex-flow:column wrap;
              justify-content:center;
            }
            .ideology{
              padding-top: 2rem;
              padding-bottom: 10rem;
              background: #ffffff;
            }
            .ideology-heading{
                font-size:4.6rem;
            }
            .ideology-content{
                letter-spacing:0.8rem;
                text-transform:uppercase;
                margin-top:5.5rem;
                line-height:2;
            }
            .relative-items{
                z-index:3;
                position:relative;
            }
            .top{
                padding-top:21.6rem;
                background:#ffff20;
                text-align:center;
                padding-bottom: 50rem;
            }
            .fun{
                font-size:1.1rem;
                letter-spacing:1.65rem;
            }
            .top-title{
                font-size:7.2rem;
                position:relative;
                z-index:3;
            }
            .bg-text{
              font-size: 27rem;
              color: #ffffff;
              position: absolute;
              z-index: 2;
              text-align: center;
              width: 100%;
              top: 1.5rem;
              line-height: 0.8;
            }
            .prev{
              transform: translateY(-9px);
            }
            @media only screen and (max-width:1320px){
              .about-services .col1 img{
                left: -80%;
              }
              .about-services .col3 img{
                right: -80%;
              }
            }
            @media only screen and (max-width:1200px){
              .about-services .col1 img{
                left: -100%;
              }
              .about-services .col3 img{
                right: -100%;
              }
            }
            @media only screen and (max-width:1050px){
              .about-services .col1 img{
                left: -130%;
              }
              .about-services .col3 img{
                right: -130%;
              }
            }
            @media only screen and (max-width:950px){
              .about-services .col1 img{
                left: -180%;
              }
              .about-services .col3 img{
                right: -180%;
              }
            }
            @media only screen and (max-width:768px){
              .bg-text{
                font-size:14rem;
              }
              .top-title{
                font-size:5.6rem;
              }
              .fun {
                letter-spacing:0.6rem;
              }
              .top{
                padding-bottom: 25rem;
              }
              .ideology-content{
                letter-spacing: 0.32rem;
              }
              .ideology {
                padding-top: 10rem;
                padding-bottom: 10rem;
              }
              .about-services{
                text-align:center;
                padding-left:5%;
                padding-right:5%;
              }
              .about-services .col2{
                width:100%;
              }
              .about-services-list {
                font-size: 4rem;
                padding-left:0;
                margin-top:9.5rem;
              }
              .about-services-wrapper{
                padding-top: 10rem;
              }
              .storytellers-top-heading {
                font-size: 4.6rem;
              }
              .storytellers-top{
                padding-top: 9.5rem;
                padding-bottom: 9.5rem;
                padding-left:5%;
                padding-right:5%;
              }
              .storytellers-text{
                margin-top:4.1rem;
              }
              .team .slide1 {
                padding-right: 0;
              }
              .team{
                padding-left:0;
                padding-right:0;
              }
              .team .slide2 {
                padding-left: 0;
              }
              .name{
                display:block;
              }
              .designation{
                display:block;
                margin-top:2.4rem;
              }
              .navigator{
                margin-top:3.5rem;
                font-size:4.6rem;
              }
              .inspire{
                font-size:4.6rem;
              }
              .brands{
                padding-left: 15%;
                padding-right: 15%;
                padding-top: 10rem;
                padding-bottom: 10rem;
              }
              .brands .col1 .brand-image {
                padding-right: 0;
              }
              .about-services .col1,.about-services .col3{
                display:none;
              }
            }
            @media only screen and (max-width:400px){
              .bg-text{
                font-size:12rem;
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
export default connect(mapStateToProps, {openMenu})(Projects);
