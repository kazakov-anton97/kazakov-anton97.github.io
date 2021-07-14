import Head from "next/head"
import { connect } from "react-redux"
import React from "react"
import Layout from "../components/layout"
import Arrow from "../components/arrow"
import { Parallax, Background } from 'react-parallax';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      underlineExpand: false,
      backgroundStyles: { top: "0", left: "0" },
      backgroundReady: false,
      backgroundShow: false,
      loadingLogoReady: false,
      animate: false,
    };
    this.backgroundImage = React.createRef()
    this.rellaxRef = React.createRef()
    this.notPerformedAnimation = true;
  }
  positionImage(cb) {
    let backgroundStyles = { bottom: "0rem", left: "-31.5%", width: "208%" };
    if (window.innerWidth > 400)
      backgroundStyles = { bottom: "0rem", left: "-31.5%", width: "208%" };
    if (window.innerWidth > 650)
      backgroundStyles = { top: "-1.5rem", left: "-20.5%", width: "120%" };
    if (window.innerWidth > 1024)
      // backgroundStyles = {top:"-1.5rem",left:"-20.5%",width:"120%"}
      backgroundStyles = { top: "-0.5rem", left: "-7.5%" };
    if (window.innerWidth > 1366)
      backgroundStyles = { top: "-0.5rem", left: "-7.5%" };
    if (window.innerWidth > 1440)
      backgroundStyles = { top: "-1.5rem", left: "-7.5%" };
    // }
    this.setState({ backgroundStyles }, () => {
      if (cb) {
        cb();
      }
    });
  }
  handleResize = () => {
    this.positionImage();
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.backgroundReady &&
      this.state.loadingLogoReady &&
      this.notPerformedAnimation
    ) {
      this.positionImage();
      this.notPerformedAnimation = false;
      setTimeout(() => {
        this.setState({ animate: true });
      }, 1500);
    }
  }
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
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
  }
  render() {
    return (
      <Layout navPosition="absolute" navTextColor="black" menuBtnColor="black">
        <Head>
          <title>Opposable Thumbs</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {this.state.loadingLogoReady && (
        <>
          <div className={`${this.state.animate ? "animate" : ""}`}>
            <div className="loading-wrapper" style={{height:`${this.props.common.windowHeight}px`}}>
                  <img src="/images/loading_logo.png" alt='homecover'/>
            </div>
          </div>
          <div className={`top-section-wrapper ${this.state.animate ? "animate" : ""}`} style={{ height: `${this.props.common.windowHeight}px` }}>
            <Parallax bgImage="/images/home-cover.jpg" bgImageAlt="home cover" strength={200} className="">
              <div className="top-content" style={{ height: `${this.props.common.windowHeight}px` }}>
                  <div className="text">
                      <div className="storytellers futura-book">
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
                                Full Service<br />
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
                          <div className="bottom-text">what are you looking for?</div>
                        </div>
                      </div>
                  </div>
              </div>
            </Parallax>
          </div>
          <div className="portfolio">
            <div className="portfolio-categories text-center">
              Insights / Brand Identity &amp; Packaging / Advertising / Digital / Graphics / Films
            </div>
            <div className="portfolio-items padded-content">
              <div className="row no-gutters">
                <div className="col-md-6 odd">
                        <Parallax bgImage="/images/portfolio/BigBanyan.png" bgImageAlt="big banyan" strength={200} className="portfolio-item">
                          <div className="p-info-wrapper format1">
                            <div className="p-info">
                              <div className="portfolio-title neufreit">Big Banyan <Arrow direction="right" /></div>
                              <div className="portfolio-description">An Italian winemaker. A passionate brand team. And OT. Years of tête-à-têtes and swapping insights led us to create the new identity and communication of Big Banyan.</div>
                            </div>
                          </div>
                        </Parallax>
                  </div>
                  <div className="col-md-6 even">
                        <Parallax bgImage="/images/portfolio/Langoor.png" bgImageAlt="langoor" strength={200} className="portfolio-item">
                          <div className="p-info-wrapper format1">
                            <div className="p-info">
                              <div className="portfolio-title neufreit">L'Angoor <Arrow direction="right" /></div>
                              <div className="portfolio-description">Wine can be elegant. Wine can be sophisticated. But wine and fun? Here’s how we married ‘fun’ and a new brand of wine from Big Banyan, known for its premium wines.</div>
                            </div>
                          </div>
                        </Parallax>
                  </div>
                  <div className="col-md-6 odd">
                        <Parallax bgImage="/images/portfolio/Enchanteur.png" bgImageAlt="enchanteur" strength={200} className="portfolio-item">
                          <div className="p-info-wrapper format1">
                            <div className="p-info">
                              <div className="portfolio-title neufreit">Enchanteur <Arrow direction="right" /></div>
                              <div className="portfolio-description">It’s French, it’s romantic and it’s so very floral. How can we not fall in love with Enchanteur? We have K-drama fans on our team who absolutely love this brand!</div>
                            </div>
                          </div>
                        </Parallax>
                  </div>
                  <div className="col-md-6 even">
                        <Parallax bgImage="/images/portfolio/Fynd.png" bgImageAlt="langoor" strength={200} className="portfolio-item">
                          <div className="p-info-wrapper format1">
                            <div className="p-info">
                              <div className="portfolio-title neufreit">Fynd <Arrow direction="right" /></div>
                              <div className="portfolio-description">Seeded in the idea of self-expression, Fynd inspired us with its functional clothing lines. From strategy to identity and brand architecture design, we helped bring this brand to life.</div>
                            </div>
                          </div>
                        </Parallax>
                  </div>
                  <div className="col-md-6 odd">
                        <div className="portfolio-item format2">
                            <div className="image-wrapper white-cursor">
                              <img src="/images/portfolio/Chandrika.jpg" alt='port2' />
                            </div>
                            <div className="portfolio-info">
                                <div className="portfolio-title neufreit">Chandrika <Arrow direction="right" /></div>
                                <div className="portfolio-description">Here’s a brand we all grew up with. And yet, it managed to surprise us with its secrets. We shared these little nuggets with the world in our campaign.</div>
                            </div>
                        </div>
                  </div>
                  <div className="col-md-6 even">
                        <Parallax bgImage="/images/portfolio/Santoor.png" bgImageAlt="langoor" strength={200} className="portfolio-item">
                          <div className="p-info-wrapper format1">
                            <div className="p-info">
                              <div className="portfolio-title neufreit">Santoor <Arrow direction="right" /></div>
                              <div className="portfolio-description">Who doesn’t remember the classic “mummy” ads! It gives us great pride to work on campaigns for this brand that’s as relevant today as it was a few decades ago.</div>
                            </div>
                          </div>
                        </Parallax>
                  </div>
                  <div className="col-md-6 odd">
                        <Parallax bgImage="/images/portfolio/VoiJeans.png" bgImageAlt="langoor" strength={200} className="portfolio-item">
                          <div className="p-info-wrapper format1">
                            <div className="p-info">
                              <div className="portfolio-title neufreit">VOI Jeans <Arrow direction="right" /></div>
                              <div className="portfolio-description">The very idea of these denims inspired us! These ergonomically engineered denims called for edgy, fashion forward communication. And we reveled in it.</div>
                            </div>
                          </div>
                        </Parallax>
                  </div>
                  <div className="col-md-6 even">
                        <div className="portfolio-item format2">
                          <div className="image-wrapper">
                              <img src="/images/portfolio/Iceburg.jpg" alt='image'/>
                            </div>
                            <div className="portfolio-info">
                                <div className="portfolio-title neufreit">IceBurg <Arrow direction="right" /></div>
                                <div className="portfolio-description">Intense cravings for burgers and shakes fed our brains as we worked on the brand idea and identity for this UK-based gourmet burger chain.</div>
                            </div>
                        </div>
                  </div>
                  <div className="col-md-6 odd">
                        <div className="portfolio-item format2">
                            <div className="image-wrapper">
                              <img src="/images/portfolio/Mia.jpg" alt='image'/>
                            </div>
                            <div className="portfolio-info">
                                <div className="portfolio-title neufreit">Mia by Tanishq</div>
                                <div className="portfolio-description">These films are a collection of stories of Indian women who inspire you with their resilience, charm you with their presence and awe you with their achievements.</div>
                            </div>
                        </div>
                  </div>
                  <div className="col-md-6 even">
                        <Parallax bgImage="/images/portfolio/Graphics.png" bgImageAlt="graphics" strength={200} className="portfolio-item">
                          <div className="p-info-wrapper format1">
                            <div className="p-info">
                              <div className="portfolio-title neufreit">Graphics <Arrow direction="right" /></div>
                              <div className="portfolio-description">This design project for a t-shirt brand was quirky, edgy and very tongue-in-cheek. It allowed us to unleash the (digital) artist in us.</div>
                            </div>
                          </div>
                        </Parallax>
                  </div>
              </div>
            </div>
            <div className="explore-more poppins-bold text-center">
                <div>explore more</div>
                {/* <div style={{marginTop:"4.6rem"}}> */}
                  <Arrow direction="down" />
                {/* </div> */}
            </div>
          </div>
          <div className="services position-relative padded-content white-cursor">
              <div className="service-heading more-letter-spacing futura-light slightly-larger-text yellow-text">SERVICES</div>
              <div className="service-lists">
                <ul className="service-items list-style-none white-text">
                  <li className="poppins-medium-italic">Insights</li>
                  <li className="poppins-regular">Brand Identity &amp; Packaging</li>
                  <li className="poppins-regular">Advertisement</li>
                  <li className="poppins-regular">Graphic</li>
                  <li className="poppins-regular">Digital</li>
                  <li className="poppins-regular">Films</li>
                </ul>
                <ul className="skills list-style-none slightly-larger-text futura-light yellow-text">
                  <li>CREATIVE</li>
                  <li>INSIGHT-DRIVEN</li>
                  <li>CULTURALLY RELEVANT</li>
                </ul>
              </div>
              <div className="service-image">
                <img src="/images/services-bg.jpg" className="width-100" alt='image'/>
              </div>
          </div>
          <div className="clients padded-content">
              <div className="clients-heading more-letter-spacing futura-light slightly-larger-text">TOP CLIENTS</div>
              <div className="client-list">
                <div className="client">
                  <img src="/images/clients/bigbanyan.png" alt='image' />
                </div>
                <div className="client">
                  <img src="/images/clients/fynd.png" alt='image' />
                </div>
                <div className="client">
                  <img src="/images/clients/cellworks.png"alt='image' />
                </div>
                <div className="client">
                  <img src="/images/clients/tanishq.png"alt='image' />
                </div>
                <div className="client">
                  <img src="/images/clients/chandrika.png"alt='image' />
                </div>
                <div className="client">
                  <img src="/images/clients/langoor.png" alt='image'/>
                </div>
                <div className="client">
                  <img src="/images/clients/iceburg.png"alt='image' />
                </div>
                <div className="client">
                  <img src="/images/clients/enchanteur.png" alt='image'/>
                </div>
                <div className="client">
                  <img src="/images/clients/santoor.png" alt='image'/>
                </div>
              </div>
          </div>
        </>
        )}
        <style jsx>{`
            .p-info-wrapper{
              position:relative;
            }
            .format1 .p-info{
              position: absolute;
              bottom: 0;
              color: #ffffff;
              bottom: 8rem;
              padding: 0 5%;
            }
            .child{
              transform: translateY(100%);
              transition: transform 400ms;
              transition-timing-function: cubic-bezier(.785,.135,.15,.86);
              transition-delay: 0s;
            }
            .animate .child{
              transform: translateY(0%);
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
              font-size:6rem;
              margin-top:8rem;
            }
            .clients{
                padding-top:5rem;
                padding-bottom:5rem;
                background:#ffffff;
            }
            .client-list{
              margin-top:5rem;
              display:flex;
              flex-flow:row wrap;
              padding-left:5%;
              padding-right:5%;
            }
            .client{
              width:20%;
              padding:0 2.5%;
            }
            .client img{
              width:100%;
            }
            .service-lists {
              margin-left: 14rem;
            }
            .service-items{
              font-size: 4.4rem;
              padding-left: 6.5rem;
              margin-top: 5rem;
              border-left: 1px solid #ffffff;
            }
            .skills {
              margin-top: 6rem;
              padding-left: 6.5rem;
            }
            .service-image{
              position: absolute;
              right: -22%;
              top: -7%;
              width: 55%;
            }
            .service-items{
              font-size:4.4rem;
            }
            .services{
              background:#000000;
              padding-top:8.8rem;
              padding-bottom:25rem;
              overflow:hidden;
            }
            .portfolio{
              background:#ffffff;
              padding-top:4rem;
              padding-bottom: 10rem;
              position:relative;
            }
            .portfolio-items{
                margin-top:17rem;
            }
            .portfolio-items .row .even{
              margin-top:-8rem;
            }
            .portfolio-title{
                font-size:6rem;
            }
            .portfolio-item.format2 .image-wrapper img{
              width:100%;
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
                font-size:2.4rem;
            }
            .bottom-text{
                margin-top: 5rem;
                font-size:2.4rem;
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
                letter-spacing: 2rem;
                font-size: 2rem;
                margin-top: 4rem;
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
                justify-content: flex-end;
                position: relative;
                padding-bottom: 2rem;
            }
            .hello {
                color: #ffff20;
                font-size: 36rem;
                position: relative;
                line-height:0.8;
            }
            .full-service {
                color: #313133;
                font-size: 8rem;
                position: absolute;
                left: 0;
                right: 0;
                margin: auto;
                top: 6rem;
                line-height:1.2;
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
export default connect(mapStateToProps, null)(Home);
