import ScrollAnimation from 'react-animate-on-scroll';
import {ANIMATION_DURATION} from '../config'
import Arrow from '../components/arrow'
export default function LogoExplorations(props){
    return (
        <>
            <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={0}>
                <div className="book-style-text futura-light logo-exploration">
                    LOGO EXPLORATIONS
                    <div style={{marginTop:"1rem"}}>
                        <Arrow direction="down" />
                    </div>
                </div>
            </ScrollAnimation>
            {props.n=="4"?
                <div className="logo-explorations-wrapper">
                    <div className="row no-gutters">
                        {props.images.map(src=>{
                            return (
                                <div className="col-md-3">
                                    <div className="logo-exploration">
                                        <img src={src} className="width-100"alt='image' />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                :
                <div className="logo-explorations-wrapper">
                    <div className="row no-gutters">
                        {props.images.map(src=>{
                            return (
                                <div className="col-md-4">
                                    <div className="logo-exploration">
                                        <img src={src} className="width-100"alt='image' />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            }
            <style jsx>{`
                .logo-explorations-wrapper{
                    margin-top:7rem;
                }
                .logo-exploration{
                    padding-left:15%;
                    padding-right:15%;
                }
                .logo-explorations-wrapper{
                    margin-left:-5%;
                    margin-right:-5%;
                }
                @media only screen and (max-width:768px){
                    .logo-exploration{
                        padding-left: 15%;
                        padding-right: 15%;
                        margin-bottom: 7rem;
                    }
                }
            `}</style>
        </>
    )
}