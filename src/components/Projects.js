import React from 'react';
import {Link} from 'react-router-dom';

function ProjImg({name,txt,link}) {
  return (
  <div className='relative w-[28%] h-[28%] text-center proj'>
      <Link to={link}>
        <img src={name}  alt={txt} className='max-w-[100%] max-h-[100%] blur-sm brightness-50'></img>
        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-semibold text-xl uppercase'>{txt}</div>
      </Link>
  </div>
  )
}

function Projects() {
    return (
    <div id='Projects' className='flex flex-col items-center gap-y-10 bg-gray-100 pt-5 mt-5 pb-10 font-poppins'>
      <h2 className='text-4xl font-semibold font-openSans'>Projects</h2>
      <div className='flex flex-row justify-evenly'>
        <ProjImg name={"images/emir.jpg"} txt={"Colorizing the Prokudin-Gorskii Collection"} link={'/prokudin_gorskii'}/>
        <ProjImg name={"images/cameraman.jpg"} txt={"Image Filtering & Blending"} link={'/image_filtering_and_blending'}/>
        <ProjImg name={"images/theo_woman.jpg"} txt={"Face Morhping"} link={'/face_morphing'}/>
      </div>
      <div className='flex flex-row justify-evenly'>
        <ProjImg name={"images/nerf.jpg"} txt={"Neural Radiance Fields"} link={'/nerf'}/>
        <ProjImg name={"images/campanile.jpg"} txt={"Autostitching & Photo Mosaics"} link={'/autostitching'}/>
        <ProjImg name={"images/chapel.jpg"} txt={"High Dynamic Range"} link={'/hdr'}/>
      </div>
      <a href="/" className="font-semibold text-l mt-3 font-poppins"> 
        <div className='bg-emerald-300 rounded-lg p-3 hover:bg-yellow-400'>
         <span>See All Projects</span>
        </div>
      </a>
    </div>
    )
}

export default Projects;