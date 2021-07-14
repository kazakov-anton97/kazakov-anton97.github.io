import Head from "next/head"
import { connect } from "react-redux"
import React from "react"
import Layout from "../components/layout"
import Arrow from "../components/arrow"
import {openMenu,removeClassFromCursor,addClassToCursor} from "../redux/actions"
import { Parallax } from 'react-parallax'
import Link from 'next/link'
import { MOBILE_BREAKPOINT } from "../config"
const projects = [
    {
        name: "Big Banyan",
        image: "/images/projects/bigbanyan2.jpg",
        mobile_image: "/images/projects/bigbanyan_mobile.jpg",
        categories: [{key:"insights",title:"Insights"},{key:"packaging",title:"Packaging"},{key:"advertising",title:"Advertising"}],
        description: "The re-positioning and packaging exercise for Big Banyan stemmed from brand insights, core philosophy, consumer research and the need to recraft the brand’s imagery to be on par with the sophistication of the wines.",
        link:"/projects/big-banyan",
        menuBtnColor:"white"
    },
    {
        name: "L'angoor",
        image: "/images/projects/langoor111.jpg",
        mobile_image: "/images/projects/langoor_mobile.jpg",
        categories: [{key:"brand-identity",title:"Brand Identity"},{key:"packaging",title:"Packaging"}],
        description: "The launch of a new brand of wines by Big Banyan led us to draft its positioning, name it, develop its identity and packaging, and communication strategy.",
        link:"/projects/langoor"
    },
    {
        name: "Enchanteur",
        image: "/images/projects/enchanteur1.jpg",
        mobile_image: "/images/projects/enchanteur_mobile1.jpg",
        categories: [{key:"digital",title:"Digital"}],
        description: "We create social media and e-commerce content for this global brand of French perfumes and bath & body products.",
        link:"/projects/enchanteur"
    },
    {
        name: "FYND",
        image: "/images/projects/fynd.jpg",
        mobile_image: "/images/portfolio/fynd.jpg",
        categories: [{key:"insights",title:"Insights"},{key:"brand-identity",title:"Brand Identity"},{key:"brand-identity",title:"Architechture and Identity for sub-brands"}],
        description: "A fashion forward brand with multiple lines of functional clothing, Fynd engaged us to develop strategy, identity for the mother brand and brand architecture (including identities) for sub-brands.",
        link:"/projects/fynd"
    },
    {
        name: "Chandrika",
        image: "/images/projects/chandrika.jpg",
        mobile_image: "/images/portfolio/Chandrika3.jpg",
        categories: [{key:"digital",title:"Digital"},{key:"films",title:"Films"}],
        description: "A household name, Chandrika inspired us with its natural goodness and timeless secrets to create digital content.",
        link:"/projects/chandrika"
    },
    {
        name: "Santoor",
        image: "/images/projects/santoor.jpg",
        mobile_image: "/images/portfolio/Santoor.jpg",
        categories: [{key:"digital",title:"Digital"}],
        description: "For this classic brand with a remarkable advertising pivot, we create digital and social media content.",
        link:"/projects/santoor"
    },
    {
        name: "VOI Jeans",
        image: "/images/projects/voijeans.jpg",
        mobile_image: "/images/projects/voijeans_mobile.jpg",
        categories: [{key:"advertising",title:"Advertising"}],
        description: "This brand of engineered denims got our left brain and right brain working in sync to blend technical thinking and creative intuition – all through the lens of high fashion.",
        link:"/projects/voi-jeans",
        menuBtnColor:"white"
    },
    {
        name: "IceBurg",
        image: "/images/projects/iceburg.jpg",
        mobile_image: "/images/projects/iceburg_mobile.jpg",
        categories: [{key:"brand-identity",title:"Brand Identity"},{key:"packaging",title:"Packaging"}],
        description: "When a UK-based company wanted to launch a gourmet burger chain, we pulled out all the stops. And the result was an on-trend identity and packaging design.",
        link:"/projects/iceburg",
        menuBtnColor:"white"
    },
    {
        name: "Mia - Tanishq",
        image: "/images/projects/mia.jpg",
        mobile_image: "/images/portfolio/Mia1.jpg",
        categories: [{key:"films",title:"Films"}],
        description: "As jewelry brand, Mia captures stories about women from various walks of life who’ve charted their own paths and mastered their own destinies, and we made a small capsule of films for them.",
        link:"/projects/mia-by-tanishq"
    },
    {
        name: "Graphics",
        image: "/images/projects/graphics.jpg",
        mobile_image: "/images/portfolio/Graphics1.jpg",
        categories: [{key:"graphics",title:"Graphics"}],
        description: "This digital art project that led us to create edgy, modern graphics for clothing and merchandise.",
        link:"#"
    }
]
const allowedFilters = [
    "all","insights","brand-identity","social-media","packaging","advertising","digital","graphics","films"
]
class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {animate:false,selectedCategory:"all",projectsHide:false,isMobile:false}
  }  
  static async getInitialProps({query}) {
    return {query}
  } 
  onMount = ()=>{
    // this.mouseEvents()
    if(allowedFilters.includes(this.props.query.filter))
        this.setState({selectedCategory:this.props.query.filter})
    setTimeout(()=>{
        this.props.openMenu(false)
        this.setState({animate:true})
        // this.props.removeClassFromCursor("larger")  
        // this.props.removeClassFromCursor("white")  
    },300)
  }
    mouseOverCursorEffect = ()=>{
        this.props.addClassToCursor("larger")
    }
    mouseOutCursorEffect = ()=>{
        this.props.removeClassFromCursor("larger")
    }
    mouseOverWhiteCursor = ()=>{
        this.props.addClassToCursor("white")
    }
    mouseOutWhiteCursor = ()=>{
        this.props.removeClassFromCursor("white")
    }
    mouseEvents(){
        document.querySelectorAll('.larger-cursor').forEach(ele=>{
            ele.addEventListener("mouseenter",this.mouseOverCursorEffect)
            ele.addEventListener("mouseleave",this.mouseOutCursorEffect)
        })
        document.querySelectorAll('.white-cursor').forEach(ele=>{
            ele.addEventListener("mouseenter",this.mouseOverWhiteCursor)
            ele.addEventListener("mouseleave",this.mouseOutWhiteCursor)
        })
    }
    handleResize = () => {
        this.setState({isMobile:window.innerWidth < MOBILE_BREAKPOINT?true:false})
    }
  componentDidMount() {
    if(window.innerWidth<MOBILE_BREAKPOINT){
        this.setState({isMobile:true},()=>{
            this.onMount()
        })
    } else {
        this.onMount()
    }
    window.addEventListener("resize", this.handleResize)
  }
  categoryClicked(selectedCategory){
      this.setState({projectsHide:true},()=>{
        setTimeout(()=>{
            this.setState({selectedCategory},()=>{
                setTimeout(()=>{
                    this.setState({projectsHide:false})
                },400)
              })
        },400)    
      })
  }
  render() {
    let filteredProjects = projects
    if(this.state.selectedCategory!="all"){
        filteredProjects = projects.filter(project=>{
            return project.categories.findIndex(item=>item.key==this.state.selectedCategory) > -1
        })
    }
    return (
      <Layout page="projects" navPosition="absolute" navTextColor="black" menuBtnColor="black" hindiText="white">
        <Head>
          <title>Projects | Opposable Thumbs</title>
        </Head>
        <div className={`projects-top black-cursor position-relative text-center ${this.state.animate?"animate":""}`}>
            <div className="text-wrapper">
                <div className="overflow-hidden our-work-heading">
                    <div className="child">
                        <div className="our-work futura-light">OUR WORK</div>
                    </div>
                </div>
                <div className="projects position-relative">
                    <div className="overflow-hidden projects-heading">
                        <div className="child">
                            <span className="helvetica-neue-condensed">Projects</span>
                        </div>
                    </div>
                    <div className="overflow-hidden the-latest">
                        <div className="child">
                            <div>The latest</div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="/images/wave-white-yellow.gif" className="top-wave width-100" alt='image'/>
        </div>
        <div className="portfolio-categories text-center padded-content black-cursor">
              <span className={`${this.state.selectedCategory=="all"?"active":""} cat-item`} onClick={()=>this.categoryClicked("all")}>All</span> <span className="separator">/</span>  <span className={`${this.state.selectedCategory=="insights"?"active":""} cat-item`} onClick={()=>this.categoryClicked("insights")}>Insights</span> <span className="separator">/</span> <span className={`${this.state.selectedCategory=="brand-identity"?"active":""} cat-item`} onClick={()=>this.categoryClicked("brand-identity")}>Brand Identity</span> <span className="separator">/</span> <span className={`${this.state.selectedCategory=="packaging"?"active":""} cat-item`} onClick={()=>this.categoryClicked("packaging")}>Packaging</span> <span className="separator">/</span> <span className={`${this.state.selectedCategory=="advertising"?"active":""} cat-item`} onClick={()=>this.categoryClicked("advertising")}>Advertising</span> <span className="separator">/</span> <span className={`${this.state.selectedCategory=="digital"?"active":""} cat-item`} onClick={()=>this.categoryClicked("digital")}>Digital</span> <span className="separator">/</span> <span className={`${this.state.selectedCategory=="graphics"?"active":""} cat-item`} onClick={()=>this.categoryClicked("graphics")}>Graphics</span> <span className="separator">/</span> <span className={`${this.state.selectedCategory=="films"?"active":""} cat-item`} onClick={()=>this.categoryClicked("films")}>Films</span>
        </div>
        <div className={`projects-wrapper ${this.state.projectsHide?"hide":""}`}>
            {filteredProjects.map(project=>{
                if(project.link=="#"){
                    return (
                        <Parallax bgImage={this.state.isMobile?project.mobile_image:project.image} bgImageAlt={project.name} strength={200} className={`project ${project.menuBtnColor=="white"?"white-menu-btn":""}`}>
                            <div className={`project-info larger-cursor ${project.name=="Big Banyan" || project.name=="VOI Jeans" || project.name=="IceBurg"?"white-cursor":"black-cursor"}`}>
                                <div className="project-title neufreit">{project.name}&nbsp;
                                    {project.link!="#" &&
                                        <span className="inline-block project-arrow"><Arrow direction="right" /></span>
                                    }
                                </div>
                                <div className="project-categories slightly-larger-text">
                                    {project.categories.map((project_category,i)=>{
                                        if(i==project.categories.length-1){
                                            return (
                                                <span>{project_category.title}</span>
                                            )
                                        } else {
                                            return (
                                                <span>{project_category.title} | </span>
                                            )
                                        }
                                    })}
                                </div>
                                <div className="project-description">
                                    {project.description}
                                </div>
                            </div>
                        </Parallax>
                    )
                } else {
                    return (
                        <Link href={project.link}>
                            <a>
                                <Parallax bgImage={this.state.isMobile?project.mobile_image:project.image} bgImageAlt={project.name} strength={200} className={`project ${project.menuBtnColor=="white"?"white-menu-btn":""}`}>
                                    <div className={`project-info larger-cursor ${project.name=="Big Banyan" || project.name=="VOI Jeans" || project.name=="IceBurg"?"white-cursor":""}`}>
                                        <div className="project-title neufreit">{project.name} <span className="inline-block project-arrow"><Arrow direction="right" /></span></div>
                                        <div className="project-categories slightly-larger-text">
                                            {project.categories.map((project_category,i)=>{
                                                if(i==project.categories.length-1){
                                                    return (
                                                        <span>{project_category.title}</span>
                                                    )
                                                } else {
                                                    return (
                                                        <span>{project_category.title} | </span>
                                                    )
                                                }
                                            })}
                                        </div>
                                        <div className="project-description">
                                            {project.description}
                                        </div>
                                    </div>
                                </Parallax>
                            </a>
                        </Link>
                    )
                }
            })}
        </div>
        <div className="position-relative bottom-part">
            <img src="/images/wave-black.gif" className="width-100 wave" alt='homecover'/>
        </div>
        <style jsx>{`
            .bottom-part{
                padding-bottom:24rem;
                background:#ffffff;
            }
            .wave{
                width: 100%;
                position: absolute;
                // bottom: -78%;
                bottom:0;
                left: 0;
            }
            .top-wave{
                position:absolute;
                bottom:0;
                left:0;
                z-index:1;
            }
            .projects-wrapper a:hover{
                text-decoration:none;
            }
            .projects-wrapper.hide{
                opacity:0;
            }
            .projects-wrapper{
                opacity:1;
                transition:opacity 0.4s ;
            }
            .cat-item.active, .cat-item:hover{
                color:#F9EB21;
            }
            .animate .our-work-heading .child{
                transition-delay: 0.4s;
            }
            .animate .the-latest .child{
                transition-delay: 0.6s;
            } 
            .animate .projects-heading .child{
                transition-delay: 0.7s;
            }
            .project-title{
                font-size:4.6rem;
            }
            .project-description{
                margin-top: 3rem;
            }
            .project-info{
                width:100%;
                padding:20rem 5%;
                color:#ffffff;
            }
            .project-description{
                width:30%;
            }
            .portfolio-categories{
                font-size:1.8rem;
                padding-top:10rem;
                padding-bottom:10rem;
                background:#ffffff;
            }
            .projects-top{
                background:#ffff20;
                padding-top:27.7rem;
                padding-bottom:10rem;
            }
            .text-wrapper{
                display:inline-block;
                margin:auto;
                position:relative;
                z-index:2;
                margin-bottom:11rem;
            }
            .our-work{
                letter-spacing: 1.65rem;
            }
            .projects span{
                font-size:25rem;
                color:#ffffff;
                line-height: 1.1;
            }
            .the-latest{
                font-size: 10.2rem;
                position: absolute;
                top: -1.5rem;
                width: 100%;
            }
            @media only screen and (max-width:768px){
                .our-work{
                    font-size:1rem;
                    letter-spacing:0.5rem;
                }
                .projects span{
                    font-size:10rem;
                }
                .the-latest{
                    font-size:4.7rem;
                }
                .projects{
                    margin-top:1rem;
                }
                .project-description{
                    width:100%;
                }
                .portfolio-categories {
                    padding-top: 5rem;
                    padding-bottom: 5rem;
                }
                .bottom-part{
                    padding-bottom: 10rem;
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
export default connect(mapStateToProps, {openMenu,removeClassFromCursor,addClassToCursor})(Projects);
