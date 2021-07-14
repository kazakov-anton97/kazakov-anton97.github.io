import Slider from "react-slick";
export default function RotatingImages(props){
    var settings = {
        infinite: true,
        loop:true,
        autoplay:true,
        slidesToShow:1,
        autoplaySpeed:2500,
        speed:2000,
        arrows:false
    }
    return (
        <>
        <div className="container">
            <div className="left">
                <div className="position-relative">
                    <img src={props.left} className="width-100" alt='image'/>
                    {props.moods &&
                    <div className="moods-container">
                        <div className="moods-heading futura-light book-style-text">MOOD</div>
                        <ul className="moods" style={{color:props.moodsListColor?props.moodsListColor:"#ffffff"}}>
                            {props.moods.map(item=>{
                                return <li>{item}</li>
                            })}
                        </ul>
                    </div>
                    }
                </div>
            </div>
            <div className="right">
                <div className="position-relative">
                    <Slider {...settings}>
                        {props.right.map(src=>{
                            return (
                                <div className="slide">
                                    <img src={src} className="width-100"alt='image' />
                                </div>
                            )
                        })}
                    </Slider>
                    {!!props.logo && 
                        <div>
                            {props.logoPosition=="bottom" && 
                                <img src={props.logo} className={`${props.logoPosition} logo-bottom logo`} alt='image'/>
                            }
                            {props.logoPosition=="center" && 
                                <div className="vertical-center centered-logo">
                                    <img src={props.logo} className={`${props.logoPosition}`} className="logo" alt='image'/>
                                </div>
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
        <style jsx>{`
            .moods-container{
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                text-align:center;
            }
            .moods-heading{
                color:#F9ED32;
                font-size:1.8rem;
                margin-bottom:5rem;
            }
            .moods{
                list-style:none;
                padding-left:0;
                font-size:2rem;
            }
            .centered-logo{
                position:absolute;
                top:0;
                left:0;
                width:100%;
            }
            .centered-logo .logo{
                margin-left:30%;
            }
            .logo{
                width: 40%;
            }
            .logo-bottom{
                position: absolute;
                left: 30%;
                bottom: 5%;
            }
            .container{
                display:flex;
                flex-flow:row wrap;
            }
            .left,.right{
                width:50%;
            }
            .left{
                padding-top: 7%;
                padding-right: 7%;
            }
            @media only screen and (max-width:768px){
                .left,.right{
                    width:100%;
                }
                .left{
                    padding-left:0;
                    padding-right:0;
                    margin-bottom:2rem;
                }
            }
        `}</style>
        </>
    )
}