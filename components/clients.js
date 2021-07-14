import ScrollAnimation from 'react-animate-on-scroll';
import {ANIMATION_DURATION} from '../config'
export default function Clients(){
    return (
        <>
        <div className="clients padded-content">
            <div className="clients-heading more-letter-spacing futura-light slightly-larger-text">TOP CLIENTS</div>
            <div className="client-list">
                <div className="client">
                    <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={0}>
                        <img src="/images/clients/bigbanyan.png"alt='image' />
                    </ScrollAnimation>
                </div>
                <div className="client">
                    <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={100}>
                        <img src="/images/clients/fynd.png"alt='image' />
                    </ScrollAnimation>
                </div>
                <div className="client">
                    <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={200}>
                        <img src="/images/clients/cellworks.png"alt='image' />
                    </ScrollAnimation>
                </div>
                <div className="client">
                    <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={300}>
                        <img src="/images/clients/tanishq.png"alt='image' />
                    </ScrollAnimation>
                </div>
                <div className="client">
                    <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={400}>
                        <img src="/images/clients/chandrika.png"alt='image' />
                    </ScrollAnimation>
                </div>
                <div className="client">
                    <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={500}>
                        <img src="/images/clients/langoor.png"alt='image' />
                    </ScrollAnimation>
                </div>
                <div className="client">
                    <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={600}>
                        <img src="/images/clients/iceburg.png"alt='image' />
                    </ScrollAnimation>
                </div>
                <div className="client">
                    <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={700}>
                        <img src="/images/clients/enchanteur.png"alt='image' />
                    </ScrollAnimation>
                </div>
                <div className="client">
                    <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={800}>
                        <img src="/images/clients/santoor.png" alt='image'/>
                    </ScrollAnimation>
                </div>
                <div className="client">
                    <ScrollAnimation animateIn="scrollFadeIn" duration={ANIMATION_DURATION} animateOnce={true} delay={800}>
                        <img src="/images/clients/kayal.png" alt='image'/>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
        <style jsx>{`
            .clients{
                padding-top:5rem;
                padding-bottom:10rem;
                background:#ffffff;
            }
            .client-list{
              margin-top:5rem;
              display:flex;
              flex-flow:row wrap;
              padding-left:5%;
              padding-right:5%;
              position: relative;
              z-index: 2;
              margin-bottom: 15rem;
            }
            .client{
              width:20%;
              padding:0 2.5%;
            }
            .client img{
              width:100%;
            }
            @media only screen and (max-width:768px){
                .client{
                    width: 70%;
                    margin: auto;
                }
                .clients {
                    padding-bottom: 2rem;
                }
                .clients-heading{
                    text-align:center;
                }
                .client-list{
                    margin-bottom: 7rem;
                }
            }
        `}</style>
        </>
    )
}