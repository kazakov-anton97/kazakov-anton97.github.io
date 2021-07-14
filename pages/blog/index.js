import Head from 'next/head'
import {Component} from 'react'
import Layout from '../../components/layout'
import sanity from "../../sanity"
import {connect} from 'react-redux'
import {openMenu,setMenuBtnColor} from '../../redux/actions'
import Arrow from '../../components/arrow'
import Link from 'next/link'
import Slider from 'react-slick'
import React from 'react'
const query = `*[_type == "post"] | order(publishedAt desc){
  _id,
  "author":author->name,
  body,
  excerpt,
  "mainImageUrl":mainImage.asset->url,
  publishedAt,
  slug,
  title,
  brief
}`
export async function getStaticProps({params}) {
  // Call an external API endpoint to get posts.
  let posts = []
  try{
    posts = (await sanity.fetch(query))
    return { props: { posts } }
  } catch {
    return { props: { posts } }
  }
}
class Blog extends Component {
  constructor(props){
    super(props)
    this.state= {animate:false}
    this.postSlider = React.createRef()
  }
  handleScroll = ()=>{
    if(window.pageYOffset < 10){
        setTimeout(()=>{
          this.props.setMenuBtnColor("white")        
        },100)
    }
  }
  componentDidMount(){
    this.props.setMenuBtnColor("white")
    setTimeout(()=>{
        this.props.openMenu(false)
        this.setState({animate:true})
    },300)
    window.addEventListener("scroll", this.handleScroll)
  }
  componentWillUnmount(){
    window.removeEventListener("scroll", this.handleScroll)
    this.props.setMenuBtnColor("black")
  }
  render(){
    var settings = {
      dots:false,
      infinite: false,
      loop:false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
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
    let topPosts = this.props.posts.slice(0,4)
    let otherPosts = this.props.posts.slice(4)
    console.log(otherPosts.length)
    return ( 
        <Layout page="blog" navPosition="absolute" navTextColor="white" menuBtnColor="white" hindiText="white">
        <Head>
          <title>Blog | Opposable Thumbs</title>
        </Head>
        <div className={`top text-white white-menu-btn position-relative ${this.state.animate?"animate":""}`} style={{minHeight:`${this.props.common.windowHeight*0.7}px`}}>
            <div className="position-relative top-content">
                <div className="fun futura-light relative-item overflow-hidden">
                    <div className="child">
                        THE OTHER SIDE
                    </div>
                </div>
                <div className="top-title relative-item overflow-hidden">
                    <div className="child">
                        Blog
                    </div>
                </div>
                <div className="bg-text helvetica-neue-condensed overflow-hidden">
                    <div className="child">
                        Stories 
                    </div>
                </div>
            </div>
        </div>
        <div className="padded-content bg-white">
            {topPosts.map(post=>{
              return (
                <div className="post">
                  {!!post.mainImageUrl &&
                    <div className="post-image"><img src={post.mainImageUrl} className="width-100" alt='image'/></div>
                  }
                  <div className="post-info text-center">
                    <div className="post-title neufreit heading">{post.title}</div>
                    <div className="post-brief">{post.brief}</div>
                        <div className="read-more">
                          <Link href={`/blog/article/${post.slug.current}`}>
                            <a>
                              <div>
                                <div className="read-more-text futura-light more-letter-spacing">READ MORE</div>
                                <div className="read-more-arrow">
                                  <Arrow direction="down" />
                                </div>
                              </div>
                            </a>
                          </Link>
                        </div>
                  </div>
                </div>
              )
            })}
        </div>
        {otherPosts.length > 0 &&
          <>
            <div className="explore-more text-center">
              <div className="more">more</div>
              <div className="explore futura-light more-letter-spacing slightly-larger-text">EXPLORE ARTICLES</div>
            </div>
            <div className="other-posts padded-content ptb">
              <Slider {...settings} ref={this.postSlider}>
              {otherPosts.map(post=>{
                return (
                    <div className="slide">
                      <div className="slide-content-wrapper">
                        {!!post.mainImageUrl &&
                          <img src={post.mainImageUrl} className="width-100" alt='image' />
                        }
                        <div className="post-info">
                          <div className="post-title neufreit">{post.title}</div>
                          <div className="post-brief">{post.brief}</div>
                          <div className="read-more">
                            <Link href={`/blog/article/${post.slug.current}`}>
                              <a className="read-more-link">
                                <div className="read-more-text futura-mdbt more-letter-spacing">READ MORE</div>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
              })}
              </Slider>
              <div className="browser text-center">
                <div className="inline-block margin-auto">
                    <span className="inline-block arr" style={{transform:"translateY(-0.6rem)"}} onClick={()=>this.postSlider.current.slickPrev()}>
                        <Arrow direction="left" />
                    </span>
                    <span className="inline-block">browse</span>
                    <span className="arr" onClick={()=>this.postSlider.current.slickNext()}>
                            <Arrow direction="right" />
                    </span>
                    <div className="book-style-text back-home futura-light"><Link href="/"><a>BACK TO HOME</a></Link></div>
                </div>
              </div>
          </div>
          </>
        }
        <style jsx>{`
            .post-brief{
              margin-top:2rem;
            }
            .post-title{
              line-height:1.1;
            }
            .slide-content-wrapper  .post-title{
              font-size: 3rem;
            }
            .browser{
              font-size:4.6rem;
              margin-top:3rem;
            }
            .slide-content-wrapper .read-more-link:hover,.back-home a:hover{
              text-decoration:none;
              color:#414042;
            }
            .back-home a{
              color:#414042;
            }
            .read-more-text{
              color:#414042;
              margin-top:2rem;
              text-decoration:none;
            }
            .slide-content-wrapper{
              background:#E6E7E8;
            }
            .slide-content-wrapper .post-info{
                padding:7.5%;
            }
            .slide{
              padding:0 1rem;
            }
            .more{
              font-size:4.6rem;
            }
            .explore-more{
              padding:5rem 0;
              background:#E6E7E8;  
            }
            .post .read-more a{
              text-decoration:none;
              color:inherit;
            }
            .post .read-more{
              margin-top:2rem;
            }
            .read-more-arrow{
              margin-top:0.5rem;
            }
            .post{
              margin-bottom: 7rem;
            }
            .post .post-info{
              width:75%;
              margin:auto;
              padding:3rem 0;
            }
            .top{
                padding-top:15rem;
                background:#000000;
                text-align:center;
            }
            .fun{
                font-size:1.1rem;
                letter-spacing:1.65rem;
            }
            .top-title{
                font-size:7.2rem;
                z-index: 3;
                position: relative;
                color:#fcef21;
            }
            .bg-text{
                font-size: 27rem;
                color: #ffffff;
                position: absolute;
                z-index: 2;
                text-align: center;
                width: 100%;
                top: 2rem;
                line-height: 0.8;
            }
            @media only screen and (max-width:768px){
              .bg-text{
                font-size:14rem;
                top:4rem;
              }
              .top-title{
                font-size:5.6rem;
              }
              .fun {
                letter-spacing:0.6rem;
              }
              @media only screen and (max-width:400px){
                .bg-text{
                  font-size:12rem;
                }
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
export default connect(mapStateToProps,{openMenu,setMenuBtnColor})(Blog)

