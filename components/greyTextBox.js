import ScrollAnimation from 'react-animate-on-scroll';
import {ANIMATION_DURATION} from '../config'
export default function GreyTextBox(props){
    return (
        <>
        <div className="grey-bg-text-box text-center">
            <div className="p-lr-10">
                <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={0}>
                    <div className="heading2">{props.heading}</div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                <div className="futura-light book-style-text grey-bg-text-box-text">
                    {props.text}
                </div>
                </ScrollAnimation>
            </div>
        </div>
        <style jsx>{`
            .grey-bg-text-box{
                padding-top:10rem;
                padding-bottom:10rem;
                background:#f4f3f4;
            }
            .grey-bg-text-box-text{
                margin-top:2rem;
            }
        `}</style>
        </>
    )
}