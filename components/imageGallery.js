export default function col3Images(props){
    return (
        <>
        {props.cols=="3" &&
            <div className="col-img-wrapper">
                <div className="row no-gutters">
                    {props.images.map(src=>{
                        return (
                            <div className="col-md-4">
                                <div className="col-img">
                                    <img src={src} className="width-100"alt='image' />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        }
        {props.cols=="4" &&
            <div className="col-img-wrapper">
                <div className="row no-gutters">
                    {props.images.map(src=>{
                        return (
                            <div className="col-md-3">
                                <div className="col-img">
                                    <img src={src} className="width-100" alt='image'/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        }
        <style jsx>{`
            .col-img-wrapper{
                padding-left:-5%;
                padding-right:-5%;
            }
            .col-img{
                padding-left:5%;
                padding-right:5%;
                padding-bottom:10%;
            }
        `}</style>
        </>
    )
}