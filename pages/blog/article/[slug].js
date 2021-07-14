import Head from 'next/head'
import React from 'react'
import Layout from '../../../components/layout'
import sanity from "../../../sanity";
import {connect} from 'react-redux'
import {openMenu} from '../../../redux/actions'
const BlockContent = require("@sanity/block-content-to-react");
import imageUrlBuilder from '@sanity/image-url'
import Slider from 'react-slick'
import Link from 'next/link'
import Arrow from '../../../components/arrow'
import ImageGallery from '../../../components/imageGallery'
import Video from '../../../components/video'
import { MOBILE_BREAKPOINT } from '../../../config';
export async function getStaticPaths() {
    const query = `*[_type == "post"]{
        slug
    }`
    let posts = (await sanity.fetch(query))
    let paths = posts.map(post=>{
      return {params:{slug:post.slug.current}}
    })
  return {
    paths,
    fallback: false,
  }
}
export async function getStaticProps({params}) {
    const query = `*[_type == "post"] | order(publishedAt desc){
        _id,
        "author":author->name,
        body,
        "mainImageUrl":mainImage.asset->url,
        publishedAt,
        slug,
        categories[]->{title,slug},
        tags[]->{title,slug},
        title,
        brief
    }`
  // Call an external API endpoint to get posts.
    let post = null
    let recommended_posts = null
    let recent_posts = null
    try{
        let posts = (await sanity.fetch(query))
        let post_index = posts.findIndex(post=>post.slug.current==params.slug)
        let posts_without_current = posts.filter(post=>post.slug.current!=params.slug)
        recent_posts = posts_without_current.slice(0,5)
        if(post_index > -1)
            post = posts[post_index]
        const shuffled = posts.filter(post=>{
            return post.slug.current != params.slug
        }).sort(() => 0.5 - Math.random());
        recommended_posts = shuffled.slice(0, 3);
        return { props: { post, recommended_posts, recent_posts } }
    } catch(err) {
        console.log(err)
        return { props: { post, recommended_posts, recent_posts } }
    }
}
function urlFor (source) {
  return imageUrlBuilder(sanity).image(source)
}
const serializers = {
  types: {
      "image":(props)=>{
          return (
              <div style={{margin:"3rem 0"}}>
                   <img
                      src={urlFor(props.node).url()}
                      style={{maxWidth:"100%"}}
                      alt='image'
                  />
              </div>
          )
      },
      "image_and_text":(props)=>{
              return (
                <div style={{margin:"3rem 0"}}>
                  <div className={`row no-gutters image-position-${props.node.image_position}`}>
                      <div className="col-md-6 content-wrap">
                        <div className="block-content">
                          <BlockContent
                            blocks={props.node.text}
                            serializers={serializers}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 image-wrap">
                        <img
                        src={urlFor(props.node.image).url()}
                        style={{width:"100%"}}
                        alt='image'
                        />
                      </div>
                  </div>
                <style jsx>{`
                  .order-1 .block-content{
                    padding-right:10%;
                  }
                  .order-2 .block-content{
                    padding-left:10%;
                  }
                  .block-content{
                    height:100%;
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                  }
                  .image-position-right .block-content{
                    padding-right:5%;
                  }
                  .image-position-left .block-content{
                    padding-left:5%;
                  }
                  .image-position-left .content-wrap{
                    order:2;
                  }
                  .image-position-left .image-wrap{
                    order:1;
                  }
                  .image-position-right .content-wrap{
                    order:1
                  }
                  .image-position-right .image-wrap{
                    order:2
                  }
                  @media only screen and (max-width:768px){
                    .image-position-right .content-wrap{
                      order:2
                    }
                    .image-position-right .image-wrap{
                      order:1
                    } 
                    .image-position-left .content-wrap{
                      order:2
                    }
                    .image-position-left .image-wrap{
                      order:1
                    } 
                    .image-wrap img{
                      margin-bottom:3rem;
                    }
                    .image-position-right .block-content{
                      padding-right:0;
                    }
                    .image-position-left .block-content{
                      padding-left:0;
                    }
                  }
                `}</style>
                </div>
              )
          },
      "image_gallery": (props) => {
          let srcs = props.node.images.map(img_obj=>urlFor(img_obj).url())
          return (
            <div style={{margin:"3rem 0"}}>
              <ImageGallery cols="3" images={srcs} />
            </div>
          )
      },
      "white_space":(props)=>{
              return (
                  <div style={{height:props.node.height}}></div>
              )
      },
      "vimeo_video":(props)=>{

        return (
          <div style={{margin:"3rem 0"}}>
            <Video videoid={props.node.video_id} type="vimeo" />
          </div>
        )
      }
  },
}
class Article extends React.Component {
  constructor(props){
    super(props)
    this.state = {animate:false,slidesShown:3}
    this.postSlider = React.createRef()
  }
  componentDidMount(){
    setTimeout(()=>{
        this.props.openMenu(false)
        this.setState({animate:true})
    },300)
    this.setState({slidesShown:window.innerWidth < MOBILE_BREAKPOINT?1:3})
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
    let {post,recommended_posts} = this.props
    return ( 
      <Layout page="blog" navPosition="absolute" navTextColor="black" menuBtnColor="black" hindiText="black">
        <Head>
          <title>{post.title} | Opposable Thumbs</title>
        </Head>
        <div className={`top padded-content text-center ${this.state.animate?"animate":""}`} style={{height:`${this.props.common.windowHeight*0.6}px`}}>
            <div className="vertical-center">
                <div className="project-name overflow-hidden">
                    <div className="child">
                        {post.title}
                    </div>
                </div>
                <div className="slightly-larger-text overflow-hidden">
                    <div className="child">
                        {post.brief}
                    </div>
                </div>
            </div>
        </div>
        {!!post.mainImageUrl &&
          <div className="post-image"><img src={post.mainImageUrl} className="width-100"/></div>
        }
        <div className="padded-content ptb bg-white">
          <BlockContent
              blocks={post.body}
              serializers={serializers}
          />
        </div>
        <div className="explore-more text-center">
          <div className="more">more</div>
          <div className="explore futura-light more-letter-spacing slightly-larger-text">EXPLORE ARTICLES</div>
        </div>
        <div className="other-posts padded-content ptb">
            <Slider {...settings} ref={this.postSlider}>
            {recommended_posts.map(post=>{
              return (
                  <div className="slide">
                    <div className="slide-content-wrapper">
                      {!!post.mainImageUrl &&
                        <img src={post.mainImageUrl} className="width-100" />
                      }
                      <div className="post-info">
                        <div className="post-title neufreit heading">{post.title}</div>
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
            {recommended_posts.length > this.state.slidesShown &&
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
            }
        </div>
        <style jsx>{`
            .slide-content-wrapper  .post-title{
              font-size: 3rem;
            }
            .browser{
              font-size:4.6rem;
              margin-top:3rem;
            }
            .back-home a{
              color:#414042;
            }
            .top{
              background:#ffffff;
            }
            .project-name{
                font-size:7rem;
                line-height:1.2;
            }
            .project-description{
                font-size:2rem;
                margin-top:5.1rem;
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
            .more{
              font-size:4.6rem;
            }
            .explore-more{
              padding:5rem 0;
              background:#E6E7E8;  
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
            .read-more-text{
              color:#414042;
              margin-top:2rem;
              text-decoration:none;
            }
            @media only screen and (max-width:768px){
              .project-name{
                font-size:4.6rem;
              }
            }
        `}</style>
      </Layout>   
    )
  }
}
function mapStateToProps({common}){
  return {common}
}
export default connect(mapStateToProps,{openMenu})(Article)

