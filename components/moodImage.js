export default function MoodImage(props){
    return (
        <>
        <div className="position-relative">
            <img src={props.moodImage} className="width-100" alt='image'/>
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
                color:${props.moodTitleColor?props.moodTitleColor:"#F9ED32"};
                font-size:1.8rem;
                margin-bottom:5rem;
            }
            .moods{
                list-style:none;
                padding-left:0;
                font-size:2rem;
            }
        `}</style>
        </>
    )
}