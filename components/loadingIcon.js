export default function LoadingIcon({show,width,height,weight,centered,color}){
    return (
        <>
        <div className={`loading-icon ${show?"show":""} ${color} ${weight} ${centered?"centered":""}`} style={{width,height}}></div>
        <style jsx>{`
              .loading-icon {
                border-radius: 50%;
                border-style:solid;
                width: 0;
                height: 0;
                opacity:0;
                transition: all 0.7s;
                -webkit-animation: spin 1s linear infinite;
                animation: spin 1s ease-in-out infinite;
              }
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
              .loading-icon.black{
                  border-color:#000000;
                  border-top-color:#c1c1c1;
              }
              .loading-icon.white{
                border-color:#ffffff;
                border-top-color:#414142;
            }
              .loading-icon.thin{
                  border-width:3px;
              }
              .loading-icon.thick{
                border-width: 6px;
              }
              .loading-icon.centered{
                margin:auto;
              }
              .loading-icon.show{
                opacity:1;
              }
        `}</style>
        </>
    )
}