import Slider from "react-slick";
import Arrow from '../components/arrow'
import React from 'react'
class SingleSlider extends React.Component{
    constructor(props){
        super(props)
        this.slider = React.createRef()
    }
    render(){
        var settings = {
            infinite: this.props.infinite != undefined?this.props.infinite:true,
            loop:this.props.loop != undefined?this.props.loop:true,
            autoplay:this.props.autoplay != undefined?this.props.autoplay:true,
            slidesToShow:this.props.slidesToShow != undefined?this.props.slidesToShow:1,
            autoplaySpeed:this.props.autoplaySpeed != undefined?this.props.autoplaySpeed:5000,
            speed:this.props.animationSpeed != undefined?this.props.animationSpeed:2000,
            pauseOnHover:this.props.pauseOnHover != undefined?this.props.pauseOnHover:false
        }
        return (
            <>
                <div className="slider position-relative">
                    <Slider {...settings} ref={this.slider}>
                        {this.props.images.map(src=>{
                            return (
                                <div className="slide">
                                    <img src={src} className="width-100"alt='image' />
                                </div>
                            )
                        })}
                    </Slider>
                    {this.props.controls &&
                        <div className="control arrow-right" onClick={()=>this.slider.current.slickNext()}>
                            <Arrow />
                        </div>
                    }
                    {this.props.controls &&
                        <div className="control arrow-left" onClick={()=>this.slider.current.slickPrev()}>
                            <Arrow direction="left" />
                        </div>
                    }
                </div>
                <style js>{`
                    .control.arrow-left {
                        top: calc(50% - 3rem);
                        left: 1rem;
                    }
                    .control.arrow-right {
                        right: 1rem;
                    }
                    .control {
                        position: absolute;
                        top: calc(50% - 1.4rem);
                    }
                `}</style>
            </>
        )
    }
}
export default SingleSlider