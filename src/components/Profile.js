import React from 'react';

function Profile() {
    return (
      <div id='About' className='flex justify-evenly flex-wrap bg-gray-100 pb-5 w-full mt-10 left-0 '>
      <div className='flex flex-1 flex-col items-center justify-center'>
          <a href="/">
            <img src="images/profile.jpg" alt="Profile" className='rounded-[50%] w-[120px] h-[120px] mt-10'></img>
          </a>
        <h2 className='text-2xl font-semibold mt-5 font-poppins'>Theo Pedapolu</h2>
        <h2 className='font-medium text-xl font-openSans mt-0'>Computer Science & Math</h2>
        <a href='https://www.linkedin.com/in/theopedapolu' className='hover:text-blue-600'>
          <i className="fa-brands fa-linkedin" aria-hidden='True'></i>
          <span className='ml-2 font-semibold font-openSans'>Linkedin</span>
        </a>
        <a href='https://github.com/theopedapolu' className='flex items-center hover:text-black'>
          <i className="fa-brands fa-github" aria-hidden='True'></i>
          <span className='ml-2 font-semibold font-openSans'>GitHub</span>
        </a>
      </div>

      <div className='flex flex-1 flex-col items-left mr-10'>
        <h2 className='mt-20 font-lato font-bold text-2xl underline decoration-zinc-300'>About</h2>
        <p className='text-m font-poppins'>I am a new grad from UC Berkeley, having graduated with a bachelor's in computer science and applied math in December of 2023. I am interested broadly in deep learning, computer security, and analytic number theory. Currently looking for software engineering jobs so if you know of any openings, please contact me at <a href="mailto:theopedapolu@gmail.com" className='text-blue-500 underline hover:text-violet-900'>theopedapolu@gmail.com</a></p>
      </div>
      </div>
    )
}

export default Profile;