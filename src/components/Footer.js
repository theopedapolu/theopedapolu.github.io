import React from 'react';

function Footer() {
    return (
    <div className='flex flex-col bg-gray-100 h-[120px] mt-20'>
      <div className='flex items-center ml-5 mt-7 font-poppins'>
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
      <p className='ml-5 mt-5 font-openSans'><i className='fas fa-copyright' aria-hidden='True'></i> 2024 Theophilus Pedapolu, Created with React.js & Tailwind CSS</p>
    </div>
    )
}

export default Footer;