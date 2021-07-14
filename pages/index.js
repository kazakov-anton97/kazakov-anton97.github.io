import Head from "next/head"
import { connect } from "react-redux"
import React from "react"
import Layout from "../components/layout"
import Arrow from "../components/arrow"
import { Parallax } from 'react-parallax';
import Link from 'next/link'
import {openMenu} from '../redux/actions'
import Clients from '../components/clients'
import {addClassToCursor,removeClassFromCursor} from '../redux/actions'
import { MOBILE_BREAKPOINT } from "../config"
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile:false,
      underlineExpand: false,
      backgroundStyles: { top: "0", left: "0" },
      backgroundReady: false,
      backgroundShow: false,
      loadingLogoReady: false,
      animate: false,
      menuBtnColor:"black"
    };
    this.backgroundImage = React.createRef()
    this.rellaxRef = React.createRef()
    this.notPerformedAnimation = true
    this.whiteMenuSections = [React.createRef()]
  }
  // handleScroll = ()=>{
  //   for(let i=0;i<this.whiteMenuSections.length;i++){
  //     let boundingVals = this.whiteMenuSections[i].current.getBoundingClientRect()
  //     if(boundingVals.top < 0 && (boundingVals.top * -1 < boundingVals.height)){
  //       this.setState({menuBtnColor:"white"})
  //     } else {
  //       this.setState({menuBtnColor:"black"})
  //     }
  //   }
  // }
  handleResize = () => {
    this.positionImage();
    this.setState({isMobile:window.innerWidth < MOBILE_BREAKPOINT?true:false})
  }
  positionImage(cb) {
    let backgroundStyles = { bottom: "0rem", left: "-31.5%", width: "208%" };
    if (window.innerWidth > 400)
      backgroundStyles = { bottom: "0rem", left: "-31.5%", width: "208%" };
    if (window.innerWidth > 650)
      backgroundStyles = { bottom: "0", left: "-20.5%", width: "120%" };
    if (window.innerWidth > 1024)
      // backgroundStyles = {top:"-1.5rem",left:"-20.5%",width:"120%"}
      // backgroundStyles = { top: "-0.5rem", left: "-7.5%" };
      backgroundStyles = { bottom: "0", left: "-7.5%" };
    if (window.innerWidth > 1366)
      // backgroundStyles = { top: "-0.5rem", left: "-7.5%" };
      backgroundStyles = { bottom: "0", left: "-7.5%" };
    if (window.innerWidth > 1440)
      // backgroundStyles = { top: "-1.5rem", left: "-7.5%" };
      backgroundStyles = { bottom: "0", left: "-7.5%" };
    // }
    this.setState({ backgroundStyles }, () => {
      if (cb) {
        cb();
      }
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.backgroundReady &&
      this.state.loadingLogoReady &&
      this.notPerformedAnimation
    ) {
      this.positionImage();
      this.notPerformedAnimation = false;
      this.props.openMenu(false);
      // this.mouseEvents()
      setTimeout(() => {
        this.setState({ animate: true },()=>{
          // this.props.removeClassFromCursor("larger")  
          // this.props.removeClassFromCursor("white")  
        });
      }, 750);
    }
  }
  componentDidMount() {
    this.setState({isMobile:window.innerWidth < MOBILE_BREAKPOINT?true:false})
    window.addEventListener("resize", this.handleResize)
    // window.addEventListener("scroll", this.handleScroll)
    const loadingLogo = new Image();
    loadingLogo.src = "/images/loading_logo.png";
    loadingLogo.onload = () => {
      this.setState({ loadingLogoReady: true });
    };
    const img = new Image();
    img.src = "/images/home-cover.jpg";
    img.onload = () => {
      this.setState({ backgroundReady: true });
    }
    this.props.removeClassFromCursor("white")
  }
  componentWillUnmount(){
    window.removeEventListener("resize", this.handleResize)
    // window.removeEventListener("scroll", this.handleScroll)
  }
  render() {
    
    
//     for seo purpose
      const schemaData={

      "@context": "http://schema.org",
      "@type": "service",
      "name": "Opposable Thumbs",
      "url": "https://opposable-thumbs.vercel.app/"
   }

   JSON.stringify(schemaData)
    
    
    
    return (
      <Layout navPosition="absolute" navTextColor="black" menuBtnColor={this.state.menuBtnColor} page="home">
        <Head>
  <meta name="google-site-verification" content="fTp7loBzDTAjXEutiEclfst4c3vt13uktqW_dAFTWoI" />
  <meta name="keywords" content="brand identity agency, brand identity design agency, corporate identity agency, brand identity, branding design, digital media management,digital media agency, social media agencies,digital media marketing companies"/>
          <title>Brand Identity Agency | Opposable Thumbs</title>
          {/* <h1>Opposable Thumbs</h1> */}
<meta name="description" content="Opposable Thumbs work with companies for their branding. If you have a new brand to launch, we can help you, right from naming it to developing its identity."/>
          <link rel="icon" href="/favicon.ico" />
            
            
           
             <script async src="https://www.googletagmanager.com/gtag/js?id=G-VTMF70P7HW"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VTMF70P7HW');
          `,
            }}
          /> 

 {/* schema is implemented */}
<script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
  />
                  
</Head>
        {this.state.loadingLogoReady && (
        <>
          <div className={`${this.state.animate ? "animate" : ""}`}>
            <div className="loading-wrapper" style={{height:`${this.props.common.windowHeight}px`}}>
                  <img src="/images/loading_logo.png" alt='homecover' />
            </div>
          </div>
          <div className={`top-section-wrapper black-cursor ${this.state.animate ? "animate" : ""}`} style={{ height: `${this.props.common.windowHeight}px` }}>
            {/* <Parallax bgImage="/images/home-cover.jpg" bgImageAlt="home cover" strength={200} className=""> */}
            <img style={this.state.backgroundStyles} src="/images/home-cover.jpg" className={`background`} ref={this.backgroundImage} alt='homecover'/>
              <div className="top-content">
                  <div className="text">
                      <div className="storytellers futura-light">
                        <div className="overflow-hidden">
                          <div className="child">
                            
                           MEET THE STORYTELLERS  
                           
                          </div>
                        </div>
                      </div>
                      <div className="hello helvetica-neue-condensed">
                        <div className="overflow-hidden">
                          <div className="child">
                            Hello
                          </div>
                        </div>
                        <div className="full-service big-caslon">
                          <div className="overflow-hidden">
                              <div className="child">
                                 Independent<br />
                                Agency
                               
                              </div>
                          </div>
                        </div>
                      </div>
                      <div className="home-down-arrow">
                        <div className="arrow down"> </div>
                      </div>
                      <div className="overflow-hidden looking-for">
                        <div className="child">
                          <div className="bottom-text"><h1>Brand Identity Agency</h1></div>
                        </div>
                      </div>
                  </div>
              </div>
            {/* </Parallax> */}
            <div className="white-fade"></div>
          </div>
          <div className="portfolio">
            <div className="portfolio-categories text-center padded-content">
              Insights / Brand Identity / Packaging / Advertising / Digital / Graphics / Films
            </div>
            <div className="portfolio-items">
              <div className="row no-gutters">
                <div className="col-md-6 odd larger-cursor white-cursor">
                        <Parallax bgImage="/images/portfolio/BigBanyan.jpg" bgImageAlt="big banyan" strength={200} className={`portfolio-item ${this.state.isMobile?"white-menu-btn":""}`}>
                          <Link href="/projects/big-banyan">
                            <a>
                              <div className="p-info-wrapper format1">
                                <div className="p-info">
                                  <div className="portfolio-title neufreit">Big Banyan <span className="arrow-right"><Arrow direction="right" /></span></div>
                                  <div className="portfolio-description">An Italian winemaker. A passionate brand team. And us. Years of tête-à-têtes and research-driven insights led us to recreate the packaging and communication strategy for Big Banyan. </div>
                                </div>
                              </div>
                            </a>
                          </Link>
                        </Parallax>
                  </div>
                  <div className="col-md-6 even larger-cursor white-cursor">
                        <Parallax bgImage="/images/portfolio/langoor.jpg" bgImageAlt="langoor" strength={200} className={`portfolio-item ${this.state.isMobile?"white-menu-btn":""}`}>
                          <Link href="/projects/langoor">
                            <a>
                              <div className="p-info-wrapper format1">
                                <div className="p-info">
                                  <div className="portfolio-title neufreit">L'angoor <span className="arrow-right"><Arrow direction="right" /></span></div>
                                  <div className="portfolio-description">Wine can be elegant. Wine can be sophisticated. But wine and fun? Here’s how we married ‘fun’ and a new brand of wines from Big Banyan, known for its premium wines.</div>
                                </div>
                              </div>
                            </a>
                          </Link>
                        </Parallax>
                  </div>
                  <div className="col-md-6 odd larger-cursor white-cursor">
                        <Parallax bgImage="/images/portfolio/Enchanteur.jpg" bgImageAlt="enchanteur" strength={200} className="portfolio-item">
                          <Link href="/projects/enchanteur">
                            <a>
                                <div className="p-info-wrapper format1">
                                  <div className="p-info">
                                    <div className="portfolio-title neufreit">Enchanteur <span className="arrow-right"><Arrow direction="right" /></span></div>
                                    <div className="portfolio-description">It’s French, it’s romantic and it’s so very floral. How can we not fall in love with Enchanteur? We have K-drama fans on our team who absolutely love this brand!</div>
                                  </div>
                                </div>
                            </a>
                          </Link>
                        </Parallax>
                  </div>
                  <div className="col-md-6 even larger-cursor white-cursor">
                        <Parallax bgImage="/images/portfolio/fynd.jpg" bgImageAlt="langoor" strength={200} className="portfolio-item">
                          <Link href="/projects/fynd">
                            <a>
                              <div className="p-info-wrapper format1">
                                <div className="p-info">
                                  <div className="portfolio-title neufreit">FYND <span className="arrow-right"><Arrow direction="right" /></span></div>
                                  <div className="portfolio-description">Seeded in the idea of self-expression, FYND inspired us with its functional clothing lines. From strategy to identity and brand architecture design, we helped bring this brand to life. </div>
                                </div>
                              </div>
                            </a>
                          </Link>
                        </Parallax>
                  </div>
                  <div className="col-md-6 odd larger-cursor white-cursor">
                      <Parallax bgImage="/images/portfolio/Chandrika3.jpg" bgImageAlt="langoor" strength={200} className={`portfolio-item ${this.state.isMobile?"white-menu-btn":""}`}>
                          <Link href="/projects/chandrika">
                            <a>
                              <div className="p-info-wrapper format1">
                                <div className="p-info">
                                  <div className="portfolio-title neufreit">Chandrika <span className="arrow-right"><Arrow direction="right" /></span></div>
                                  <div className="portfolio-description">Here’s a brand we all grew up with. And yet, it managed to surprise us with its secrets. We shared these little nuggets with the world in our campaign.</div>
                                </div>
                              </div>
                            </a>
                          </Link>
                      </Parallax>
                  </div>
                  <div className="col-md-6 even larger-cursor white-cursor">
                        <Parallax bgImage="/images/portfolio/Santoor.jpg" bgImageAlt="langoor" strength={200} className="portfolio-item">
                          <Link href="/projects/santoor">
                            <a>
                              <div className="p-info-wrapper format1">
                                <div className="p-info">
                                  <div className="portfolio-title neufreit">Santoor <span className="arrow-right"><Arrow direction="right" /></span></div>
                                  <div className="portfolio-description">Who doesn’t remember the classic “mummy” ads! It gives us great pride to work on campaigns for a brand that’s as relevant today as it was a few decades ago.</div>
                                </div>
                              </div>
                            </a>
                          </Link>
                        </Parallax>
                  </div>
                  <div className="col-md-6 odd larger-cursor white-cursor">
                        <Parallax bgImage="/images/portfolio/VoiJeans.png" bgImageAlt="langoor" strength={200} className={`portfolio-item ${this.state.isMobile?"white-menu-btn":""}`}>
                          <Link href="/projects/voi-jeans">
                            <a>
                              <div className="p-info-wrapper format1">
                                <div className="p-info">
                                  <div className="portfolio-title neufreit">VOI Jeans <span className="arrow-right"><Arrow direction="right" /></span>
                                  </div>
                                  <div className="portfolio-description">The very idea of these denims inspired us! VOI has ergonomically engineered denims that called for edgy, fashion forward communication. And we reveled in it.</div>
                                </div>
                              </div>
                            </a>
                          </Link>
                        </Parallax>
                  </div>
                  <div className="col-md-6 even larger-cursor white-cursor">
                      <Parallax bgImage="/images/portfolio/Iceburg1.jpg" bgImageAlt="langoor" strength={200} className={`portfolio-item ${this.state.isMobile?"white-menu-btn":""}`}>
                          <Link href="/projects/iceburg">
                            <a>
                              <div className="p-info-wrapper format1">
                                <div className="p-info">
                                  <div className="portfolio-title neufreit">IceBurg <span className="arrow-right"><Arrow direction="right" /></span>
                                  </div>
                                  <div className="portfolio-description">Intense cravings for burgers and shakes fed our brains as we worked on the brand idea and identity for this UK-based gourmet burger chain.</div>
                                </div>
                              </div>
                            </a>
                          </Link>
                        </Parallax>
                  </div>
                  <div className="col-md-6 odd mia-by-tanishq larger-cursor white-cursor">
                        <Parallax bgImage="/images/portfolio/Mia1.jpg" bgImageAlt="langoor" strength={200} className={`portfolio-item ${this.state.isMobile?"white-menu-btn":""}`}>
                          <Link href="/projects/mia-by-tanishq">
                            <a>
                              <div className="p-info-wrapper format1">
                                <div className="p-info">
                                  <div className="portfolio-title neufreit">Mia - Tanishq <span className="arrow-right"><Arrow direction="right" /></span>
                                  </div>
                                  <div className="portfolio-description">These films are a collection of stories of Indian women who inspire you with their resilience, charm you with their presence and awe you with their achievements.</div>
                                </div>
                              </div>
                            </a>
                          </Link>
                        </Parallax>
                  </div>
                  <div className="col-md-6 even larger-cursor white-cursor">
                        <Parallax bgImage="/images/portfolio/Graphics1.jpg" bgImageAlt="graphics" strength={200} className="portfolio-item">
                              <div className="p-info-wrapper format1">
                                <div className="p-info">
                                  <div className="portfolio-title neufreit">Graphics 
                                    {/* <span className="arrow-right"><Arrow direction="right" /></span> */}
                                  </div>
                                  <div className="portfolio-description">A digital art project that led us to create edgy, modern graphics for clothing and merchandise.</div>
                                </div>
                              </div>
                        </Parallax>
                  </div>
              </div>
            </div>
            <Link href="/projects">
              <a className="no-css">
                <div className="explore-more text-center padded-content">
                    <div className="browse">browse</div>
                    {/* <div style={{marginTop:"4.6rem"}}> */}
                      <span className="explore-arrow">
                        <Arrow direction="down" />
                      </span>
                    {/* </div> */}
                </div>
              </a>
            </Link>
          </div>
          <div className="services position-relative padded-content white-cursor white-cursor white-menu-btn" ref={this.whiteMenuSections[0]}>
              <div className="service-heading more-letter-spacing futura-light slightly-larger-text yellow-text">SERVICES</div>
              <div className="service-lists">
                <ul className="service-items list-style-none white-text larger-text">
                  <li className="poppins-regular">
                    <Link href={{ pathname: '/projects', query: { filter: 'insights' },}}>
                      <a className="larger-cursor">
                        Insights
                      </a>
                    </Link>
                  </li>
                  <li className="poppins-regular">
                    <Link href={{ pathname: '/projects', query: { filter: 'brand-identity' },}}>
                        <a className="larger-cursor">
                          Brand Identity
                        </a>
                    </Link>
                  </li>
                  <li className="poppins-regular">
                    <Link href={{ pathname: '/projects', query: { filter: 'packaging' },}}>
                        <a className="larger-cursor">
                          Packaging
                        </a>
                    </Link>
                  </li>
                  <li className="poppins-regular">
                    <Link href={{ pathname: '/projects', query: { filter: 'advertising' },}}>
                        <a className="larger-cursor">
                          Advertising
                        </a>
                    </Link>
                  </li>
                  <li className="poppins-regular">
                    <Link href={{ pathname: '/projects', query: { filter: 'digital' },}}>
                        <a className="larger-cursor">
                          Digital
                        </a>
                    </Link>
                  </li>
                  <li className="poppins-regular">
                    <Link href={{ pathname: '/projects', query: { filter: 'digital' },}}>
                        <a className="larger-cursor">
                          Graphics
                        </a>
                    </Link>
                  </li>
                  <li className="poppins-regular">
                    <Link href={{ pathname: '/projects', query: { filter: 'films' },}}>
                        <a className="larger-cursor">
                          Films
                        </a>
                    </Link>
                  </li>
                </ul>
                <ul className="skills list-style-none slightly-larger-text futura-light yellow-text">
                  <li>CREATIVE</li>
                  <li>INSIGHT-DRIVEN</li>
                  <li>CULTURALLY RELEVANT</li>
                </ul>
              </div>
              <div className="service-image">
                <img src="/images/services-bg-2.png" className="width-100"  alt='homecover'/>
              </div>
              <div className="show-mobile hide-desktop text-center" style={{marginTop:"7.2rem"}}>
                <Arrow direction="down" />
              </div>
          </div>
          <div className="position-relative">
            <Clients />
            <img src="/images/wave-black.gif" className="width-100 wave" alt='homecover' />
          </div>
        </>
        )}
        {!this.state.loadingLogoReady && (
          <div className="black-bg"></div>
        )}
        <style jsx>{`
            .white-fade{
              position: absolute;
              bottom: 0;
              height: 10rem;
              width: 50%;
              background: -moz-linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255,255,255, 1));
              background: -webkit-linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255,255,255, 1));
              background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255,255,255, 1));
              background: linear-gradient(to bottom, rgba(255, 255, 255, 0), white);
            }
            .arrow-right{
              transition: transform 400ms cubic-bezier(0.77, 0, 0.175, 1);
              display:inline-block;
            }
            .p-info-wrapper:hover .arrow-right,.portfolio-item:hover .arrow-right{
              transform:translateX(1rem)
            }
            .wave{
              width: 100%;
              position: absolute;
              // bottom: -78%;
              bottom:0;
              left: 0;
            }
            .service-items li a{
              color:#ffffff;
            }
            .service-items li a:hover{
              text-decoration:none;
              color:#F9ED32;
            }
            .service-items li:hover{
              font-family: PoppinsMediumItalic,sans-serif !important;
            }
            .p-info-wrapper{
              position:relative;
            }
            .format1 .p-info{
              position: absolute;
              bottom: 0;
              color: #ffffff;
              bottom: 7rem;
              padding: 0 5%;
            }
            .animate .hello .child{
              transition-delay: 0.4s;
            }
            .animate .storytellers .child{
              transition-delay: 0.6s;
            }
            .animate .full-service .child{
              transition-delay: 0.8s;
            } 
            .animate .looking-for .child{
              transition-delay: 1s;
            }
            .explore-more{
              font-size:4.6rem;
              margin-top:8rem;
            }
            .service-lists {
              margin-left: 14rem;
            }
            .service-items{
              padding-left: 6.5rem;
              margin-top: 5rem;
              line-height: 1.2;
              border-left: 1px solid #ffffff;
            }
            .skills {
              margin-top: 6rem;
              padding-left: 6.5rem;
            }
            .service-image{
              position: absolute;
              right: -5%;
              top: -1%;
              width: 47%;
            }
            .services{
              background:#000000;
              padding-top:8.8rem;
              padding-bottom:25rem;
              overflow:hidden;
            }
            .portfolio{
              background:#ffffff;
              padding-top:8rem;
              padding-bottom: 8rem;
              position:relative;
            }
            .portfolio-items{
                margin-top:17rem;
                padding-left:15%;
                padding-right:15%;
            }
            .portfolio-items .row .even{
              margin-top:-8rem;
            }
            .portfolio-title{
                font-size:4.6rem;
            }
            .portfolio-item.format2 .image-wrapper img{
              width:100%;
            }
            .portfolio-description{
              width: 80%;
            }
            .even .format2 .portfolio-info{
              margin-bottom:12rem;
            }
            .format2 .portfolio-info{
              margin-top:3rem;
              padding:0 5%;
            }
            .format1 .portfolio-info{
                position: absolute;
                bottom: 0;
                color: #ffffff;
                bottom: 8rem;
                padding: 0 5%;
            }
            .format1{
                padding-top: 125%;
                background-attachment: fixed;
                background-size: 50%;
                background-repeat: no-repeat;
            }
            .even .format1{
                background-position: calc(100%) 0px;
            }
            .portfolio-categories{
                font-size:1.8rem;
            }
            .bottom-text{
                margin-top: 4.5rem;
                font-size:1.8rem;
            }
            .home-down-arrow{
                margin-top:4rem;
                opacity:0;
                animation-name: floating;
                animation-duration: 3s;
                animation-iteration-count: infinite;
                animation-timing-function: ease-in-out;
                transition: opacity 1s;
                transition-delay:1.4s;
            }
            .animate .home-down-arrow{
              opacity:1;
            }
            @keyframes floating {
              from { transform: translate(0,  0px); }
              65%  { transform: translate(0, 15px); }
              to   { transform: translate(0, -0px); }    
            }
            .storytellers {
                letter-spacing: 1.7rem;
                font-size: 1.2rem;
                margin-top: 15rem;
            }
            .animate .loading-wrapper {
                transform: translateY(-${this.props.common.windowHeight + 100}px);
            }
            .loading-wrapper {
              transform: translateY(0);
            }
            .loading-wrapper {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100vh;
                z-index: 1000;
                background: #000000;
                transition: transform 0.6s cubic-bezier(0.77, 0, 0.175, 1);
            }
            .black-bg{
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100vh;
              z-index: 999;
              background: #000000;
            }
            .loading-wrapper img {
                width: 200px;
                position: absolute;
                left: calc(50% - 100px);
                top: calc(50% - 56px);
            }
            .top-section-wrapper {
                max-width: 100%;
                width: 100%;
                height: 100vh;
                margin: auto;
                overflow: hidden;
                position: relative;
                background: #ffffff;
            }
            .top-content {
                position: relative;
                z-index: 2;
                text-align: center;
                height: 100%;
                overflow: hidden;
            }
            .text {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content:center;
                position: relative;
                padding-bottom: 5rem;
            }
            .hello {
                color: #ffff20;
                font-size: 36rem;
                position: relative;
                line-height:0.8;
            }
            .full-service {
                color: #414042;;
                font-size: 7rem;
                position: absolute;
                left: 0;
                right: 0;
                margin: auto;
                top: 3rem;
                line-height: 1.15;
            }
            .background {
                position: absolute;
                width: 100%;
                opacity: 0;
                transition: opacity 1.5s;
                transition-delay: 1.2s;
            }
            .animate .background {
                opacity: 1;
            }
            .contact {
                position: absolute;
                bottom: 3.5rem;
                right: 3.5rem;
                z-index: 3;
                font-size: 1.4rem;
            }
            .contact a {
                color: #212529;
            }
            .contact a:hover {
                color: #212529;
                text-decoration: none;
            }
            .underline {
                position: absolute;
                display: inline-block;
                left: 0;
                width: 0;
                height: 0.1rem;
                background: #000000;
                bottom: -1rem;
                transition: all 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
            }
            .contact:hover .underline,
            .underline.expand {
                width: 6rem;
            }
            .browse{
              margin-bottom:-1rem;
            }
            @media only screen and (max-width:768px){
              .text{
                justify-content: flex-end;
                padding-bottom: 40%;
              }
              .hello{
                font-size:16rem;
              }
              .full-service{
                font-size: 3.5rem;
              }
              .storytellers{
                font-size:1.1rem;
                margin-top:0;
              }
              .bottom-text{
                margin-top: 7rem;
              }
              .portfolio-items{
                margin-top: 3rem;
                padding-left:0;
                padding-right:0;
              }
              .portfolio-items .row .even{
                margin-top:0;
              }
              .mia-by-tanishq{
                margin-top:-5rem;
              }
              .service-lists {
                margin-left: 0rem;
                position: relative;
                z-index: 10;
              }
              .service-heading{
                text-align:center;
              }
              .service-items{
                padding-left:0;
                border-left:none;
                text-align:center;
              }
              .skills{
                padding-left:0;
                text-align:center;
              }
              .service-image {
                // right: -10%;
                // top:auto;
                // bottom: -1%;
                // width: 57%;
                // z-index: 1;
                display:none;
              }
              .services{
                padding-bottom:8.8rem;
              }
              .white-fade{
                  height:3rem;
              }
              .full-service{
                top:0;
              }
              .storytellers {
                margin-bottom: 2rem;
              }
              .portfolio{
                padding-bottom:4rem;
              }
              .explore-more{
                margin-top:4rem;
              }
              .explore-arrow{
                display:inline-block;
                margin-left:1rem;
              }
              .browse{
                margin-bottom:-2rem;
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
export default connect(mapStateToProps, {openMenu,addClassToCursor,removeClassFromCursor})(Home);
