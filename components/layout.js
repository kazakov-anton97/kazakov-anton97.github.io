const { Component } = require("react");
import {connect} from 'react-redux'
import {setWindow,addClassToCursor,removeClassFromCursor,hideFullscreenVideo} from '../redux/actions'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import DesktopMenu from '../components/desktopMenu'
import Head from 'next/head'
import {MOBILE_BREAKPOINT} from '../config'
import Video from '../components/video'
import Player from '@vimeo/player'
class Layout extends Component{
    constructor(props){
        super(props)
        this.state = {
            mouseX: 0,
            mouseY: 0,
            trailingX: 0,
            trailingY: 0,
            mode:"landscape",
            mouseCircleColor:"black"
        }
        this.cursor = React.createRef();
        this.cursorTrailing = React.createRef();
        this.animationFrame = null;
    }
    setWin = ()=>{
        if(window.innerWidth > MOBILE_BREAKPOINT)
            this.props.setWindow(window.innerWidth,window.innerHeight)
        else{
            let mode = window.innerWidth<window.innerHeight?"portrait":"landscape"
            if(mode!=this.state.mode){
                this.props.setWindow(window.innerWidth,window.innerHeight)
                this.setState({mode})
            }
        }
    }
    moveCursor = () => {
        const { mouseX, mouseY, trailingX, trailingY } = this.state;
        const diffX = mouseX - trailingX;
        const diffY = mouseY - trailingY;
        //  Number in expression is coeficient of the delay. 10 for example. You can play with it. 
        this.setState({
          trailingX: trailingX + diffX / 5,
          trailingY: trailingY + diffY / 5,
        },
        () => {
        // Using refs and transform for better performance.
          this.cursor.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
          this.cursorTrailing.current.style.transform = `translate3d(${trailingX}px, ${trailingY}px, 0)`;
          this.animationFrame = requestAnimationFrame(this.moveCursor);
        });
    }
    onMouseMove = (evt) => {
        const { clientX, clientY } = evt;
        this.setState({
          mouseX: clientX - 5,
          mouseY: clientY - 5,
        });
        // var elementMouseIsOver = document.elementFromPoint(clientX, clientY)
        // var mouseCircleColor = elementMouseIsOver.getAttribute("mousecirclecolor")
        // if(mouseCircleColor=="white"){
        //     this.setState({mouseCircleColor:"white"})
        //     console.log("white")
        // }
        // else
        //     this.setState({mouseCircleColor:"black"})
    }
    // mouseOverCursorEffect = ()=>{
    //     this.props.addClassToCursor("larger")
    // }
    // mouseOutCursorEffect = ()=>{
    //     this.props.removeClassFromCursor("larger")
    // }
    // mouseOverWhiteCursor = ()=>{
    //     console.log('white cursor')
    //     this.props.addClassToCursor("white")
    // }
    // mouseOutWhiteCursor = ()=>{
    //     console.log('white cursor leave')
    //     this.props.removeClassFromCursor("white")
    // }
    componentDidMount(){
        this.setState({mode:window.innerWidth<window.innerHeight?"portrait":"landscape"})
        this.setWin()
        document.addEventListener('mousemove', this.onMouseMove);
        this.moveCursor()
        window.addEventListener('resize',this.setWin)
    }
    componentWillUnmount() {
        document.removeEventListener('mousemove', this.onMouseMove)
        cancelAnimationFrame(this.animationFrame);
        // document.querySelectorAll('.larger-cursor').forEach(ele=>{
        //     ele.removeEventListener("mouseenter",this.mouseOverCursorEffect)
        //     ele.removeEventListener("mouseleave",this.mouseOutCursorEffect)
        // })
        // document.querySelectorAll('.white-cursor').forEach(ele=>{
        //     ele.removeEventListener("mouseenter",this.mouseOverWhiteCursor)
        //     ele.removeEventListener("mouseleave",this.mouseOutWhiteCursor)
        // })
    }
    componentDidUpdate(prevProps,prevState){
        if(this.props.common.show_fullscreen_video!=prevProps.common.show_fullscreen_video){
            if(this.props.common.show_fullscreen_video){
                var video = document.getElementById('fullscreen_video')
                if(this.props.common.video_type=="html"){
                    console.log('video type html')
                    video.oncanplay = ()=> {
                        video.play()
                    };
                } else{
                    var player = new Player(video);
                    player.play()
                }
            }
                
        }
    }
    render(){
        return (
            <>
                <Head>
                <link
                    rel="stylesheet"
                    type="text/css"
                    charset="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
                </Head>
                <div className={`full-screen-video-wrapper ${this.props.common.show_fullscreen_video?"show":""}`} onClick={()=>this.props.hideFullscreenVideo()}>
                    <span className="close"></span>
                    <div className="video-wrap" onClick={(e)=>e.stopPropagation()}>
                        {this.props.common.show_fullscreen_video &&
                            <Video videoid={this.props.common.video_id} video_type={this.props.common.video_type} video_src={this.props.common.video_src} html_id="fullscreen_video" />
                        }
                    </div>
                </div>
                <div id="main">
                    <div className={`cursors ${this.props.common.cursorClasses.join(' ')}`}>
                        <div className="cursor" ref={this.cursor} />
                        <div className="cursor" ref={this.cursorTrailing} />
                    </div>
                    <DesktopMenu page={this.props.page}/>
                    <Navigation hindiText={this.props.hindiText} navPosition={this.props.navPosition} navTextColor={this.props.navTextColor} menuBtnColor={this.props.menuBtnColor} />
                    {this.props.children}
                </div>
                {/* <div className="transparent-footer"></div> */}
                <Footer type={this.props.footerType} noWaveDesktop={this.props.noWaveDesktop} noWaveMobile={this.props.noWaveMobile} />
                <style jsx>{`
                        .full-screen-video-wrapper{
                            position: fixed;
                            z-index:-1;
                            top: 0;
                            left: 0;
                            width: 100%;
                            padding: 4rem ${this.props.common.video_src=="/videos/enchanteur_desktop.mp4"?"38%":"7.5%"};
                            height: 100vh;
                            background: #000000b3;
                            opacity:0;
                            transition:opacity 0.4s;
                            overflow:scroll;
                        }
                        .full-screen-video-wrapper.show{
                            z-index: 99;
                            opacity:1;
                        }
                        .full-screen-video-wrapper .close{
                            position:fixed;
                            z-index:100;
                            right:2rem;
                            top:2rem;
                        }
                        .full-screen-video-wrapper .close:after,.full-screen-video-wrapper .close:before{
                            background-color:#ffffff;
                        }
                        #main{
                            overflow:hidden;
                            position:relative;
                            z-index:10;
                        }
                        .cursor {
                            position: fixed;
                            height: 10px;
                            width: 10px;
                            border-radius: 50%;
                            transform: translateX(-50%) translateY(-50%);
                            pointer-events:none;
                        }                     
                        .cursors .cursor:nth-child(1) {
                            background-color: #3a26fd;
                            z-index: 100002;
                            opacity:0;
                        }
                        .cursors .cursor:nth-child(2) {
                            background-color: #000000;
                            z-index: 997;
                            height: 9px;
                            width: 9px;
                            transition:width 0.7s,height 0.7s;
                        }
                        .cursors.larger .cursor:nth-child(2) {
                            height: 25px;
                            width: 25px;
                        }
                        .cursors.onmenubtn .cursor:nth-child(2) {
                            height: 60px;
                            width: 60px;
                            transition:width 0.2s,height 0.2s;
                            transform:translate3d(30px,7px,0) !important;
                            background-color: ${this.props.common.menu_btn_color=="white"?"#ffffff":"#000000"}
                        }
                        .cursors.white .cursor:nth-child(2) {
                            background-color: #ffffff !important;
                        }
                        .transparent-footer{
                            height:42.7rem;
                            width:100%;
                        }
                    `}</style>
            </>
        )
    }
}
function mapStateToProps({common}){
    return {common}
}
export default connect(mapStateToProps,{setWindow,addClassToCursor,removeClassFromCursor,hideFullscreenVideo})(Layout)