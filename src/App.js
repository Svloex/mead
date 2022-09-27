import BgImg from './сomponents/Background-img';
import Slider from './сomponents/Slider';
import mead2 from'./assets/mead2.jpg'
import mead3 from'./assets/mead3.jpg'

function App() {
  return (
    <div className="main bg-gradient-to-tr from-red-500 via-purple-500/0
    to-blue-500">
     <BgImg img={mead3}/>
     <Slider img={mead2} t={`Можно купить для ${"пробы"} или оптом`} subt={'Доступна бесплатная доставка'}/>
     <Slider img={mead3} t={'Быстрая доставка'} subt={''} flipped={true}/>     
    </div>
  );
}

export default App;
