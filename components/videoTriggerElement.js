import {connect} from 'react-redux'
import {showFullscreenVideo} from '../redux/actions'
function VideoTriggerElement(props){
    return (
        <div className="position-relative" onClick={()=>props.showFullscreenVideo(props.videoid,props.isMobile?props.videoMobile:props.video,props.videoType)}>
            <div className="play">
                <div className="arrow-right"></div>
            </div>
            <img src={props.thumb} className="width-100" alt='image'/>
            <style jsx>{`
                .arrow-right {
                    width: 0; 
                    height: 0; 
                    border-top: 15px solid transparent;
                    border-bottom: 15px solid transparent;
                    border-left: 30px solid #ffffff;
                }
                .play{
                    position: absolute;
                    top: calc(50% - 3.7rem);
                    left: calc(50% - 3.7rem);
                    border: 2px solid #ffffff;
                    padding: 2rem;
                    border-radius: 65%;
                }
            `}</style>
        </div>
    )
}
export default connect(null,{showFullscreenVideo})(VideoTriggerElement)
