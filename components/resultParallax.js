import { Parallax } from 'react-parallax';
import Arrow from '../components/arrow'
export default function ResultParallax(props){
    return (
        <Parallax bgImage={props.bgImage} bgImageAlt="parallax-image" strength={100}>
            <div className="result-info">
                <div className="heading neufreit">The Result <span className="inline-block project-arrow"><Arrow direction="right" /></span></div>
                <div className="result-desc">
                    {props.resultText}
                </div>
            </div>
            <style jsx>{`
                .result-info{
                    width:50%;
                    padding-left:7%;
                    padding-right:7%;
                    padding-top:10rem;
                    padding-bottom:50rem;
                    color:#ffffff;
                }
                @media only screen and (max-width:768px){
                    .result-info{
                        width:100%;
                        padding-bottom:40rem;
                    }
                }
            `}</style>
        </Parallax>
    )
}