import React from 'react';
import {Link} from 'react-router-dom';

function BlogPost({title,desc,link}) {
  return (
    <div className='flex flex-col items-start p-3 mt-4 hover:bg-slate-100'>
      <Link to={link}>
        <p className='text-gray-500 font-poppins'>March 22, 2022</p>
        <h3 className='text-amber-600 text-2xl underline hover:text-black font-poppins'>{title}</h3>
        <p className='font-lora'>{desc}</p>
      </Link>
    </div>
  )
}

function Blog() {
    return (
    <div id='Blog' className='flex flex-col mt-7 w-full items-center left-0 right-0'>
      <h2 className='font-openSans text-4xl self-center font-semibold'>Blog</h2>
      <BlogPost title={"My Review of Catch-22"} desc={"I recently finished reading Catch-22 by Joseph Heller, a classic satirical anti-war novel, and I really enjoyed it. Here's my review of it, including insights I found interesting, remarks on Heller's style of writing, and an analysis of some hidden themes I found eye-opening."} link={'/catch_22_review'}/>
    </div>
    )
}

export default Blog;