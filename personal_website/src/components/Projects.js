import React from 'react';

function Projects() {
    return (
    <div id='Projects' className='flex flex-col items-center gap-y-10 bg-gray-100 mt-10 font-openSans py-10'>
      <h2 className='font-system-ui text-4xl font-semibold'>Projects</h2>
      <div className='flex flex-row justify-evenly'>
        <div className='relative w-[28%] h-[28%] text-center proj'>
          <img src="images/emir.jpg"  alt="Emir" className='max-w-[100%] max-h-[100%] blur-sm brightness-50'></img>
          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-semibold text-2xl uppercase'>Colorizing the Prokudin-Gorskii Collection</div>
        </div>
        <div className='relative w-[28%] h-[28%] text-center proj'>
          <img src="images/cameraman.jpg" alt="Cameraman" className='max-w-[100%] max-h-[100%] blur-sm brightness-50'></img>
          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-semibold text-2xl uppercase'>Image Filtering & Blending</div>
        </div>
        <div className='relative w-[28%] h-[28%] text-center proj'>
          <img src="images/theo_woman.jpg" alt="Theo as a woman" className='max-w-[100%] max-h-[100%] blur-sm brightness-50'></img>
          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-semibold text-2xl uppercase'>Face Morhping</div>
        </div>
      </div>
      <div className='flex flex-row justify-evenly'>
        <div className='relative w-[28%] h-[28%] text-center proj'>
          <img src="images/nerf.jpg" alt="Lego Truck" className='max-w-[100%] max-h-[100%] blur-sm brightness-50'></img>
          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-semibold text-2xl uppercase'>Neural Radiance Fields</div>
        </div>
        <div className='relative w-[28%] h-[28%] text-center proj'>
          <img src="images/campanile.jpg" alt="Campanile" className='max-w-[100%] max-h-[100%] blur-sm brightness-50'></img>
          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-semibold text-2xl uppercase'>Autostitching & Photo Mosaics</div>
        </div>
        <div className='relative w-[28%] h-[28%] text-center proj'>
          <img src="images/chapel.jpg" alt="Chapel" className='max-w-[100%] max-h-[100%] blur-sm brightness-50'></img>
          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-semibold text-2xl uppercase'>High Dynamic Range</div>
        </div>
      </div>
    </div>
    )
}

export default Projects;