import appTitle from './assets/images/mtitle.png';
import titleq from './assets/images/titleq.png';
import leaderBoard from './assets/images/leadtf.png';
import connectBt from './assets/images/connectBt.png';
import menu from './assets/images/botmenu.png';
import oscoret from './assets/images/oscoret.png';
import na from './assets/images/na.png';

function App() {
  return (
    <>
      <div>
        <div className='relative bg-[url("assets/images/endscr.png")] bg-cover w-dvw h-dvh'>
          <img src={oscoret} className='absolute top-5 left-5' />
          <img src={na} className='absolute top-0 left-40' />
          <img src={leaderBoard} className='absolute cursor-pointer top-20 left-[45%]' />
          <img src={appTitle} className='absolute top-48 left-[42%]' />
          <img src={titleq} className='absolute top-[56%] left-[42%]' />
          <img src={connectBt} className='absolute cursor-pointer top-[66%] left-[42.5%]' />
          <a href={'www.facebook.com'}>
            <img src={menu} className='absolute cursor-pointer top-[90%] left-[43.5%] bottom-5' />
          </a>
        </div>
      </div>
    </>
  )
}

export default App
