import React from 'react';

function Profile() {
    return (
      <div id='About' className='flex justify-evenly flex-wrap'>
      <div className='flex flex-1 flex-col items-center align-center font-lato text-gray-500 h-[330px] bg-gray-50'>
          <a href="." className=''>
            <img src="profile.jpg" alt="Profile" className='rounded-[50%] w-[120px] h-[120px] mt-10 self-center'></img>
          </a>
        <h2 className='text-2xl font-bold mt-5'>Theo Pedapolu</h2>
        <h2 className='font-medium'>Computer Science & Math</h2>
        <a href='https://www.linkedin.com/in/theopedapolu' className='flex items-center hover:text-blue-600'>
          <i class="fa-brands fa-linkedin" aria-hidden='True'></i>
          <span className='ml-2 font-semibold'>Linkedin</span>
        </a>
        <a href='https://github.com/theopedapolu' className='flex items-center hover:text-black'>
          <i class="fa-brands fa-github" aria-hidden='True'></i>
          <span className='ml-2 font-semibold'>GitHub</span>
        </a>
      </div>

      <div className='flex flex-1 flex-col items-left font-system-ui bg-gray-50'>
        <h2 className='mt-20 font-lato font-bold text-2xl text-gray-500 underline decoration-zinc-300'>About</h2>
        <p className='text-m'>I am a new grad from UC Berkeley, having graduated with a bachelor's in computer science and applied math in December of 2023. I am interested broadly in deep learning, computer security, and analytic number theory. Currently looking for software engineering jobs so if you know of any openings, please contact me at <a href="mailto:theopedapolu@gmail.com" className='text-blue-500 underline hover:text-violet-900'>theopedapolu@gmail.com</a></p>
      </div>
      </div>
    )
}

export default Profile;