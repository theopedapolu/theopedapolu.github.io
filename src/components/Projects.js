import React from 'react';
import {Link} from 'react-router-dom';

function ProjImg({name,txt,link}) {
  return (
  <div className='relative w-[28%] h-[28%] text-center proj'>
      <Link to={link}>
        <img src={name}  alt={txt} className='max-w-[100%] max-h-[100%] blur-sm brightness-50'></img>
        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-semibold text-2xl uppercase'>{txt}</div>
      </Link>
  </div>
  )
}

function Projects() {
    return (
    <div id='Projects' className='flex flex-col items-center gap-y-10 bg-gray-100 mt-10 font-openSans py-10'>
      <h2 className='font-libre text-4xl font-semibold'>Projects</h2>
      <div className='flex flex-row justify-evenly'>
        <ProjImg name={"images/emir.jpg"} txt={"Colorizing the Prokudin-Gorskii Collection"} link={'/prokudin_gorskii'}/>
        <ProjImg name={"images/cameraman.jpg"} txt={"Image Filtering & Blending"} link={'#'}/>
        <ProjImg name={"images/theo_woman.jpg"} txt={"Face Morhping"} link={'#'}/>
      </div>
      <div className='flex flex-row justify-evenly'>
        <ProjImg name={"images/nerf.jpg"} txt={"Neural Radiance Fields"} link={'#'}/>
        <ProjImg name={"images/campanile.jpg"} txt={"Autostitching & Photo Mosaics"} link={'#'}/>
        <ProjImg name={"images/chapel.jpg"} txt={"High Dynamic Range"} link={'#'}/>
      </div>
      <div className='bg-emerald-300 rounded-lg p-3'>
      <a href="#" className="font-bold text-l mt-5"> See All Projects</a>
      </div>
    </div>
    )
}

export default Projects;