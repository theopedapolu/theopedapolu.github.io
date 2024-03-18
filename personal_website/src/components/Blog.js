import React from 'react';

function Blog() {
    return (
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
    )
}

export default Blog;