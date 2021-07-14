import Link from 'next/link'
const renderPagination = (total_pages,page_number)=>{
    let jsx = []
    for(let i = 1;i <= total_pages;i++){
      jsx.push(<li key={`page_number_${i}`} className={`${i==page_number?"current":""}`}><Link href={`/blog/all/${i}`}><a>{i}</a></Link></li>)
    }
    return (
      <ul>
          {jsx.map(ele=>ele)}
      </ul>
    )
}
const PostsList = ({posts,total_pages,page_number})=>{
    return (
        <div>
            <div className="posts-wrapper">
                {posts.map(post=>{
                    let categories = post.categories?post.categories:[]
                    return ( 
                    <div className={`post ${post.mainImageUrl?"has-image":""}`} key={post._id}>
                        <div className="row no-gutters">
                            {post.mainImageUrl &&
                                <div className="col-4">
                                    <div className="post-image"><img src={post.mainImageUrl} alt='image' className="width-100"/></div>
                                </div>
                            }
                            <div className={`${post.mainImageUrl?"col-8":"col-12"}`}>
                                <div className="post-info vertical-center-content">
                                    <Link href="/blog/article/[slug]" as={`/blog/article/${post.slug.current}`}><a className="text-decoration-none"><h2 className="post-title">{post.title}</h2></a></Link>
                                    <div className="post-meta">
                                        {post.publishedAt &&
                                            <span className="post-time inline-block">
                                            {(new Date(post.publishedAt)).toDateString()}
                                            </span>
                                        }
                                    </div>
                                    <div className="post-excerpt">{post.excerpt}</div>
                                    <div className="post-learn-more text-center"><Link href="/blog/article/[slug]" as={`/blog/article/${post.slug.current}`}><a className="btn-thin btn-transparent-light-grey">Continue reading</a></Link></div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
            <div className="pagination">
            {renderPagination(total_pages,page_number)}
            </div>
            <style jsx>{`

                .post{
                    padding: 5rem 0 3rem 0;
                    border-bottom: 1px solid #dadada;
                  }
                  .has-image .post-info{
                      padding-left:2.5rem;
                  }
                  .post-excerpt{
                      margin-top:1.5rem;
                  }
                  .post-category-wrapper{
                    margin-left:1rem;
                  }
                  .post-excerpt{
                    color:#909090;
                  }
                  .post-meta{
                    font-size:1.2rem;
                  }
                  .post-time{
                    color:#b3b3b3;
                  }
                  .posts-wrapper,.post-learn-more{
                    padding-right:2.5rem;
                  }
                  .post-learn-more{
                    margin-top:3rem;
                  }
            `}</style>
        </div>
    )
}
export default PostsList