import Arrow from "./arrow"
import Link from "next/link"
export default function Browser(props){
    return (
        <>
        <div className="browser text-center">
            <div className="inline-block margin-auto">
                <Link href={props.prev}>
                    <a className="inline-block arr" style={{transform:"translateY(-0.6rem)"}}>
                        <Arrow direction="left" />
                    </a>
                </Link>
                <span className="inline-block">browse</span>
                <Link href={props.next}>
                    <a className="arr">
                        <Arrow direction="right" />
                    </a>
                </Link>
                <div className="book-style-text futura-light"><Link href="/"><a className="remove-link-style back-home-link">BACK TO HOME</a></Link></div>
            </div>
        </div>
        <style jsx>{`
            .back-home-link{
                margin-left:1.5rem;
            }
            .arrow{
                margin:0 3rem;
            }
            .browser{
                font-size:4.6rem;
            }
        `}</style>
        </>
    )
}