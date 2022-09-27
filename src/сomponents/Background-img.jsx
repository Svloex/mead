export default function BgImg({img}){
    return(
        <div className="mainToBgFunc relative h-96 w-full 
        md:h-60 overflow-hidden">            
            <img src={img} alt="mead" className="Bg-img 
            absolute w-full h-full object-cover rounded "/>
            <div className="absolute md:top-auto 
            md:left-auto right-24 md:right-auto
            text-green-300 text-5xl md:text-3xl
            p-2.5 text-center md:shadow-2xl shadow-2xl 
            shadow-yellow-200/50 md:shadow-yellow-100/50">
                <h1 className="underline md:text-white">
                    Бесплатная доставка до <span className="text-red-500">станции:</span>                              
                </h1>
                <span className="text-lime-200 no-underline">м.Беляево</span><br />             
                <span className="text-lime-200 no-underline">м.Теплый Стан</span><br />            
                <span className="text-lime-200 no-underline">м.Медведково</span> 
            </div>            
        </div>
    )
}