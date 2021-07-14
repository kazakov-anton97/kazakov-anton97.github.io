import {toggleMenu,addClassToCursor,removeClassFromCursor} from '../redux/actions'
import {connect} from 'react-redux'
import Link from 'next/link'
function Navigation(props){
    function menuBtnClick(){
        if(props.common.menuOpen)
            props.removeClassFromCursor("white")
        props.toggleMenu()
    }
    return (
        <>
        <span className={`menu-btn ${props.common.menu_btn_color} ${props.common.menuOpen?"open":""}`} onClick={()=>menuBtnClick()} onMouseOver={()=>props.addClassToCursor("onmenubtn")} onMouseOut={()=>props.removeClassFromCursor("onmenubtn")}>
            <span className="lines">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </span>
        <nav className={`${props.navPosition} ${props.navTextColor}`}>
            <div className="empty"></div>
            <div className="logo-wrap">
                <Link href="/">
                    <a>
                        <div className="logo-wrapper">
                            <img src="/images/logo.png" className="logo logo-black"alt='image' />
                            <img src="/images/logo_white.png" className="logo logo-white"alt='image' />
                        </div>
                    </a>
                </Link>
            </div>
            <div className="mobile-logo-wrap">
                <Link href="/">
                    <a>
                        <img src="/images/logo-short-black.png" className="mobile-logo width-100"alt='image' />
                    </a>
                </Link>
            </div>
            <ul className="options">
                {/* <li className="larger-cursor"><a>ENGLISH</a></li>
                <li className={`larger-cursor hindi-text`}>
                    {props.hindiText=="white" 
                        ?
                            <img src="/images/hindi_white.png" />
                        :
                            <img src="/images/hindi.png" />
                    }
                </li> */}
            </ul>
        </nav>
        <style jsx>{`
            .hindi-text img{
                width: 43px;
            }
            .mobile-logo-wrap{
                display:none;
                text-align:center;
            }
            .mobile-logo{
                width:5rem;
            }
            .menu-btn{
                position:fixed;
                top:2.5rem;
                left:4.8rem;
                z-index:999;
            }
            .menu-btn .lines {
                position: relative;
                display: inline-block;
                width: 25px;
                height: 24px;
                vertical-align: middle;
                z-index: 1;
            }
            .menu-btn.open .lines span {
                background: #F9EB21 !important;
            }
            .menu-btn .lines span {
                position: absolute;
                display: block;
                height: 2px;
                width: 100%;
                transition: transform .2s 0s;
            }
            .menu-btn.black .lines span{
                background: #000000;
            }
            .menu-btn.white .lines span{
                background: #ffffff;
            }
            .menu-btn .lines span:nth-child(1) {
                top: 0;
            }
            .menu-btn.open .lines span:nth-child(1) {
                top:11px;
                transform:rotate(45deg)
            }
            .menu-btn .lines span:nth-child(2) {
                top: 11px;
            }
            .menu-btn.open .lines span:nth-child(2) {
                display:none;
            }
            .menu-btn .lines span:nth-child(3) {
                top: 22px;
            }
            .menu-btn.open .lines span:nth-child(3) {
                top:11px;
                transform:rotate(-45deg)
            }
            nav{
                display:flex;
                flex-flow:row nowrap;
                padding-top:2.3rem;
            }
            nav > * {
                flex:1 1 33.33%;
            }
            nav.absolute{
                position:absolute;
                z-index:500;
                width:100%;
            }
            .logo-wrapper{
                text-align:center;
            }
            .logo {
                width: 28rem;
                display:none;
            }
            nav.black .logo-black{
                display:inline-block;
            }
            nav.white .logo-white{
                display:inline-block;
            }
            ul.options{
                padding-left:0;
                list-style:none;
                text-align:right;
                padding-right:4.8rem;
            }
            ul.options li{
                display:inline-block;
            }
            ul.options li a{
                padding:0.5rem 0.75rem;
            }
            nav.black ul.options li a:not(.hindi){
                color:#000000;
            }
            nav.white ul.options li a:not(.hindi){
                color:#ffffff;
            }
            ul.options li a:not(.hindi){
                display:inline-block;
                font-family: FuturaBook, sans-serif;
            }
            ul.options li a.hindi{
                color:#F9EB21;
            }
            @media only screen and (min-width:768px){
                .menu-btn.black:hover .lines span {
                    background: #ffffff;
                }
                .menu-btn.white:hover .lines span {
                    background: #000000;
                }
            }
            @media only screen and (max-width:768px){
                .logo-wrap{
                    display:none;
                }
                ul.options{
                    padding-right:2rem;
                }
                .menu-btn{
                    left:2.8rem;
                }
                .mobile-logo-wrap{
                    display:block;
                }
            }
        `}</style>
        </>
    )
}
function mapStateToProps({common}){
    return {common}
}
export default connect(mapStateToProps,{toggleMenu,addClassToCursor,removeClassFromCursor})(Navigation)