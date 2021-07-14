export default function VideoEmbed(props){
    return (
        <>
        {props.video_type=="html"
                ?
                <video width="100%" id={props.html_id} controls>
                    <source src={props.video_src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                :
                <div className="video-wrap">
                    <iframe src={`https://player.vimeo.com/video/${props.videoid}?title=0&byline=0&portrait=0&loop=${props.loop?1:0}`} frameborder="0" allow="autoplay; fullscreen" allowfullscreen id={props.html_id}></iframe>
                </div>
        }
        <style jsx>{`
            .video-wrap{
                padding:56.25% 0 0 0;
                position:relative;
                background:#000000;
            }
            .video-wrap iframe{
                position:absolute;
                top:0;
                left:0;
                width:100%;
                height:100%;
            }
        `}</style>
        </>
    )
}