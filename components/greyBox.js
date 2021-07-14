export default function GreyBox(props){
    return (
        <>
            <div className="grey-box text-center futura-light padded-content">
                <div className="grey-box-items-wrapper">
                    <div className="row no-gutters">
                        {props.items.map(item=>{
                            return (
                                <div className="col-md-4">
                                    <div className="grey-box-item">
                                        <span>{item}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <style jsx>{`
                .grey-box{
                    background:#E6E7E8;
                    padding-top:5rem;
                    padding-bottom:5rem;
                    letter-spacing:6px;
                    text-transform: uppercase;
                }
                .grey-box-item{
                    margin:2.45rem 0;
                }
                .grey-box-items-wrapper{
                    margin-top:-2.45rem;
                    margin-bottom: -2.45rem;
                }
                @media only screen and (max-width:768px){
                    .grey-box-item{
                        margin:0.5rem 0;
                    }
                    .grey-box-items-wrapper{
                        margin-top:-0.5rem;
                        margin-bottom: -0.5rem;
                    }      
                }
            `}</style>
        </>
    )
}