import Nav from './Nav.js';
import Profile from "./Profile.js";
import Coursework from "./Coursework.js";
import "./App.css"

function App() {
  return (
    <div>
    <Nav/>
    <Profile/>
    <Coursework/>

    <div id='Projects' className='flex flex-col items-center gap-y-10 bg-gray-100 mt-10 font-openSans py-10'>
      <h2 className='font-system-ui text-4xl font-semibold'>Projects</h2>
      <div className='flex flex-row justify-evenly'>
        <div className='relative w-[28%] h-[28%] text-center proj'>
          <img src="emir.jpg"  alt="Emir" className='max-w-[100%] max-h-[100%] blur-sm brightness-50'></img>
          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-semibold text-2xl uppercase'>Colorizing the Prokudin-Gorskii Collection</div>
        </div>
        <div className='relative w-[28%] h-[28%] text-center proj'>
          <img src="cameraman.jpg" alt="Cameraman" className='max-w-[100%] max-h-[100%] blur-sm brightness-50'></img>
          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-semibold text-2xl uppercase'>Image Filtering & Blending</div>
        </div>
        <div className='relative w-[28%] h-[28%] text-center proj'>
          <img src="theo_woman.jpg" alt="Theo as a woman" className='max-w-[100%] max-h-[100%] blur-sm brightness-50'></img>
          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-semibold text-2xl uppercase'>Face Morhping</div>
        </div>
      </div>
      <div className='flex flex-row justify-evenly'>
        <div className='relative w-[28%] h-[28%] text-center proj'>
          <img src="nerf.jpg" alt="Lego Truck" className='max-w-[100%] max-h-[100%] blur-sm brightness-50'></img>
          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-semibold text-2xl uppercase'>Neural Radiance Fields</div>
        </div>
        <div className='relative w-[28%] h-[28%] text-center proj'>
          <img src="campanile.jpg" alt="Campanile" className='max-w-[100%] max-h-[100%] blur-sm brightness-50'></img>
          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-semibold text-2xl uppercase'>Autostitching & Photo Mosaics</div>
        </div>
        <div className='relative w-[28%] h-[28%] text-center proj'>
          <img src="chapel.jpg" alt="Chapel" className='max-w-[100%] max-h-[100%] blur-sm brightness-50'></img>
          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-semibold text-2xl uppercase'>High Dynamic Range</div>
        </div>
      </div>
    </div>

    <div id='Blog' className='flex flex-col mt-10'>
      <h2 className='font-libre text-4xl self-center font-semibold'>Blog</h2>
      <div className='flex flex-col items-start px-5 py-5 mt-5 hover:bg-slate-100'>
        <p className='text-gray-600'>March 22, 2022</p>
        <h3 className='text-amber-600 font-roboto text-2xl underline hover:text-black'>Lorem ipsum dolor sit amet</h3>
        <p className='font-libre'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at dolor mollis libero tempor faucibus. Sed eros orci, varius non elementum ut, euismod sit amet neque. Etiam diam mauris, tempor sit amet nibh sed, sagittis fringilla dolor. Cras luctus massa eu odio feugiat, sit amet egestas turpis dictum. Aliquam faucibus felis eget dignissim ullamcorper. Suspendisse potenti. Aenean a purus id nisi laoreet finibus. Donec eu ante ut quam euismod cursus</p>
      </div>
      <div className='flex flex-col items-start px-5 py-5 hover:bg-slate-100'>
        <p className='text-gray-600'>March 22, 2022</p>
        <h3 className='text-amber-600 font-roboto text-2xl underline hover:text-black'>Lorem ipsum dolor sit amet</h3>
        <p className='font-libre'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at dolor mollis libero tempor faucibus. Sed eros orci, varius non elementum ut, euismod sit amet neque. Etiam diam mauris, tempor sit amet nibh sed, sagittis fringilla dolor. Cras luctus massa eu odio feugiat, sit amet egestas turpis dictum. Aliquam faucibus felis eget dignissim ullamcorper. Suspendisse potenti. Aenean a purus id nisi laoreet finibus. Donec eu ante ut quam euismod cursus</p>
      </div>
    </div>

    <div className='flex flex-col bg-gray-100 h-[120px] mt-20'>
      <div className='flex items-center ml-5 mt-7 font-openSans'>
        <a href="mailto:theopedapolu@gmail.com">
          <i className=" fa fa-envelope text-[#FFA500]" aria-hidden='True'></i>
          <span className='ml-2 font-semibold'>theopedapolu@gmail.com</span>
        </a>
        <a href="https://www.twitter.com/TPedapolu">
          <i className="fa-brands fa-twitter ml-7 text-[#1DA1F2]" aria-hidden='True'></i>
          <span className='ml-2 font-semibold'>Twitter</span>
        </a>
      </div>
      <div className='flex items-center space-x-1 ml-5'>
        
      </div>
      <p className='ml-5 mt-5 font-openSans'><i className='fas fa-copyright' aria-hidden='True'></i> 2023 Theophilus Pedapolu, Created with React.js & Tailwind CSS</p>
    </div>

    </div>
  );

}

export default App;
