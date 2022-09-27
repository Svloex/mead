import { useInView } from "react-intersection-observer"
export default function Slider({img,t,subt,flipped}){
    const {ref,inView}=useInView({
        threshold:0.4
    })

    const rendCnt= ()=>{
        if(!flipped){
            return <>
            <img src={img} alt="meadToSlider" className="sl-img w-3/6 rounded md:w-full 
            shadow-2xl shadow-rose-900" />            
            <div className="Sl-cnt flex flex-1 
            flex-col justify-center items-center p-5 
            text-center w-full md:bg-slate-100 rounded
            md:mt-1">
                <h2 className="Sl-t text-center text-3xl">{t}</h2>
                <p>{subt}</p>
            </div>
            </>
        }
        else{
            return <>
            <div className="Sl-cnt flex flex-1 
            flex-col justify-center items-center p-5 
            text-center w-full md:bg-slate-100 rounded
            md:mb-1 md:mt-0">
                <h2 className="Sl-t text-center text-3xl">{t}</h2>
                <p>{subt}</p>
            </div>
            <img src={img} alt="meadToSlider" className="sl-img w-3/6 rounded md:w-full 
            shadow-2xl shadow-cyan-900" />
            </>
        }
    }
    return(
        <div className={inView? 'Slider md:flex-col flex items-center mt-3 mx-3 opacity-0 scale-75 duration-[2000ms] slider--zoom'
        :'slider md:flex-col flex items-center mt-3 mx-3 opacity-0 scale-75 duration-[2000ms]'} ref={ref}>
            {rendCnt()}
        </div>
    )
}