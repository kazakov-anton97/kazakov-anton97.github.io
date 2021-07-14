import Layout from "../components/layout"
import { connect } from "react-redux"
import {openMenu,setMenuBtnColor} from "../redux/actions"
import ScrollAnimation from 'react-animate-on-scroll';
import {ANIMATION_DURATION} from '../config'
import router, { useRouter } from 'next/router'
import Link from "next/link";



export default function FourNotFour(){

    const router=useRouter()

    return(
        <Layout page="404" navPosition="absolute" navTextColor="black" menuBtnColor="black" hindiText="white" footerType="yellow">
      
        
        
        <div className="inspire text-center bg-yellow padded-content">
          <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
      <p>Error Not Found..!</p>   <h1>404</h1>  <br className="hide-desktop show-mobile" />Take me to <br/>
      <button className='btn btn-black btn-send' onClick={()=>router.push('/')} > Home</button> 
          </ScrollAnimation>
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
    )
}