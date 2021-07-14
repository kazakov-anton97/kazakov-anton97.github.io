import Head from 'next/head'
import {connect} from "react-redux"
import React from 'react'
import Layout from '../components/layout'
import {MOBILE_BREAKPOINT} from '../config'
class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {underlineExpand:false,backgroundStyles:{top:"0",left:"0"},backgroundReady:false,backgroundShow:false,loadingLogoReady:false,animate:false}
    this.backgroundImage = React.createRef()
    this.notPerformedAnimation = true
  }
  positionImage(cb){
        let backgroundStyles = {bottom:"0rem",left:"-31.5%",width:"208%"}
          if(window.innerWidth > 400)
            backgroundStyles = {bottom:"0rem",left:"-31.5%",width:"208%"}
          if(window.innerWidth > 650)
            backgroundStyles = {top:"-1.5rem",left:"-20.5%",width:"120%"}
          if(window.innerWidth > 1024)
            // backgroundStyles = {top:"-1.5rem",left:"-20.5%",width:"120%"}
            backgroundStyles = {top:"-0.5rem",left:"-7.5%"}
          if(window.innerWidth > 1366)
            backgroundStyles = {top:"-0.5rem",left:"-7.5%"}
          if(window.innerWidth > 1440)
            backgroundStyles = {top:"-1.5rem",left:"-7.5%"}
       // }
        this.setState({backgroundStyles},()=>{
          if(cb){
            cb()
          }
        })
  }
  handleResize = ()=>{
    this.positionImage()
  }
  componentDidUpdate(prevProps,prevState){
    if(this.state.backgroundReady && this.state.loadingLogoReady && this.notPerformedAnimation){
      this.positionImage()
      this.notPerformedAnimation = false
      setTimeout(()=>{
        this.setState({animate:true})
      },1500)
    }
  }
  componentDidMount(){
    window.addEventListener('resize',this.handleResize)
    const loadingLogo = new Image()
    loadingLogo.src = "/images/loading_logo.png"
    loadingLogo.onload = ()=>{
      this.setState({loadingLogoReady:true})
    }
    const img = new Image()
    img.src = "/images/background.png"
    img.onload = ()=>{
      this.setState({backgroundReady:true})
    }
  }
  render(){
    return (
      <Layout>
        <Head>
          <title>Opposable Thumbs</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {this.state.loadingLogoReady &&
          <div className={`main-wrapper ${this.state.animate?"animate":""}`} style={{height:`${this.props.common.windowHeight}px`}}>
            <div className="loading-wrapper" style={{height:`${this.props.common.windowHeight}px`}}>
                <img src="/images/loading_logo.png" alt='loadingLogo' />
            </div>
            <img style={this.state.backgroundStyles} src="/images/bg.png" alt='bg' className={`background`} ref={this.backgroundImage} />
            <div className="content">
                <img src="/images/logo.png" className="logo" alt='homecover'/>
                <div className="text">
                    <div className="hello">
                      Hello
                      <div className="coming-soon">coming soon</div>
                    </div>
                </div>
            </div>
            <div className="contact">
                  <a href="mailto:info@opposablethumbs.in">info@opposablethumbs.in</a>
                  <span className={`underline ${this.state.underlineExpand?"expand":""}`}></span>
            </div>
          </div>
        }
        <style jsx>{`
          .main-wrapper{
            background:#ffffff;
          }
          .animate .loading-wrapper{
            transform:translateY(-${this.props.common.windowHeight+100}px)
          }
          .loading-wrapper{
            position:fixed;
            top:0;
            left:0;
            width:100%;
            height:100vh;
            z-index:99;
            background:#000000;
            transition:transform 0.6s linear;
          }
          .loading-wrapper img{
            width: 200px;
            position: absolute;
            left: calc(50% - 100px);
            top: calc(50% - 56px);
          }
          .main-wrapper{
              max-width:100%;
              width:100%;
              height:100vh;
              margin:auto;
              overflow:hidden;
              position:relative;
          }
          .content{
            position: relative;
            z-index: 2;
            text-align: center;
            height:100%;
            overflow:hidden
          }
          .logo{
            position: absolute;
            top: 2.5rem;
            width: 21.3rem;
            left: calc(50% - 10.65rem);
          }
          .text{
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position:relative;
          }
          .hello{
            font-family: HelveticaNeueCondensed,sans-serif;
            color: #ffff20;
            font-size: 40rem;
            position: relative;
            opacity:0;
            transform:translateY(156px);
            transition:all 1s;
            transition-delay:0.6s
          }
          .coming-soon{
              font-family: BigCaslon,serif;
              color: #313133;
              font-size: 7.2rem;
              margin-top: -7.8rem;
              opacity:0;
              transform:translateY(72px);
              transition:all 1s;
              transition-delay:1s;
          }
          .animate .hello,.animate .coming-soon{
            opacity:1;
            transform:translateY(0);
          }
          .background{
            position: absolute;
            width: 100%;
            opacity:0;
            transition: opacity 1.5s;
            transition-delay:2.5s;
          }
          .animate .background{
              opacity:1;
          }
          .contact{
            position: absolute;
            bottom: 3.5rem;
            right: 3.5rem;
            z-index:3;
            font-size:1.4rem;
          }
          .contact a{
            color:#212529
          }
          .contact a:hover{
            color:#212529;
            text-decoration:none;
          }
          .underline{
            position:absolute;
            display:inline-block;
            left:0;
            width:0;
            height:0.1rem;
            background:#000000;
            bottom:-1rem;
            transition: all 0.3s cubic-bezier(.785,.135,.15,.86);
          }
          .contact:hover .underline,.underline.expand{
              width:6rem;
          }
          @media only screen and (max-width:375px){
            .hello{
              font-size: 11.3rem;
            }
            .coming-soon{
              font-size: 5.2rem;
              margin-top: -5.8rem;
            }
          } 
          @media only screen and (min-width:650px){
            .hello{
              font-size: 15.6rem;
            }
            .coming-soon{
              font-size: 7.2rem;
              margin-top: -8rem;
            }
          }
          @media only screen and (max-width:768px){
            .contact{
              width:100%;
              text-align:center;
              left: 0;
              right: 0;
            }
          }
          @media only screen and (min-width:1024px){
            .coming-soon{
              font-size: 12.4rem;
              margin-top: -13.6rem;
            }
            .hello{
              font-size: 26.9rem;
            }
            .contact{
              font-size:1.4rem;
            }
          }
          // @media only screen and (min-width:1366px){
          //   .coming-soon{
          //     font-size: 16rem;
          //     margin-top: -16rem;
          //   }
          //   .hello{
          //     font-size: 39rem;
          //   }
          //   .contact{
          //     font-size:1.8rem;
          //   }
          // }
          @media only screen and (min-width:1440px){
            .coming-soon{
              font-size: 17rem;
              margin-top: -18.7rem;
            }
            .hello{
              font-size: 37rem;
            }
            .contact{
              font-size:2rem;
            }
          }
          @media only screen and (min-width:1920px){
            .coming-soon{
              font-size: 20rem;
              margin-top: -21.5rem;
            }
            .hello{
              font-size: 42rem;
            }
          }
        `}</style>
      </Layout>
    )
  }
}
function mapStateToProps({common}){
  return {
    common
  }
}
export default connect(mapStateToProps,null)(Home)