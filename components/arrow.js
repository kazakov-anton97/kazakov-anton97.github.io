export default function Arrow(props){
    return (
        <>
        <div className={`pointer ${props.direction}`}>
            <img src="/images/arrow.svg" className="arrow-image"alt='image' />
        </div>
        <style jsx>{`
            .arrow-image{
                width:2.8rem;
            }
            .pointer.left{
                transform:rotate(180deg) translateY(-15px)
            }
            .pointer.down{
                transform:rotate(90deg)
            }
            .pointer{
                display:inline-block;
            }
        `}</style>
        </>
    )
}