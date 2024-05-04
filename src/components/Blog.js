import React from 'react';

function Blog() {
    return (
    <div id='Blog' className='flex flex-col mt-7'>
      <h2 className='font-openSans text-4xl self-center font-semibold'>Blog</h2>
      <div className='flex flex-col items-start p-3 mt-4 hover:bg-slate-100'>
        <p className='text-gray-500 font-poppins'>March 22, 2022</p>
        <h3 className='text-amber-600 text-2xl underline hover:text-black font-poppins'>Lorem ipsum dolor sit amet</h3>
        <p className='font-lora'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at dolor mollis libero tempor faucibus. Sed eros orci, varius non elementum ut, euismod sit amet neque. Etiam diam mauris, tempor sit amet nibh sed, sagittis fringilla dolor. Cras luctus massa eu odio feugiat, sit amet egestas turpis dictum. Aliquam faucibus felis eget dignissim ullamcorper. Suspendisse potenti. Aenean a purus id nisi laoreet finibus. Donec eu ante ut quam euismod cursus</p>
      </div>
      <div className='flex flex-col items-start p-3 hover:bg-slate-100'>
        <p className='text-gray-500 font-poppins'>March 22, 2022</p>
        <h3 className='text-amber-600 text-2xl underline hover:text-black font-poppins'>Lorem ipsum dolor sit amet</h3>
        <p className='font-lora'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at dolor mollis libero tempor faucibus. Sed eros orci, varius non elementum ut, euismod sit amet neque. Etiam diam mauris, tempor sit amet nibh sed, sagittis fringilla dolor. Cras luctus massa eu odio feugiat, sit amet egestas turpis dictum. Aliquam faucibus felis eget dignissim ullamcorper. Suspendisse potenti. Aenean a purus id nisi laoreet finibus. Donec eu ante ut quam euismod cursus</p>
      </div>
    </div>
    )
}

export default Blog;