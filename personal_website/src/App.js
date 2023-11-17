import React from 'react';

function App() {
  return (
    <div>
    <nav className='flex justify-between items-center flex-nowrap bg-white h-[75px] font-lato border-b-2 border-gray-200'>
        <div className='flex ml-10 text-gray-500 font-bold text-2xl'>
          <a href='' className='hover:text-gray-800'>Theo Pedapolu</a>
        </div>
        <div className='flex space-x-10 mr-5 text-gray-500 text-xl'>
          <a href='#About' className='border-b-4 transition duration-1 border-transparent hover:border-b-4 hover:border-amber-200'>About</a>
          <a href='#Coursework' className='border-b-4 transition duration-1 border-transparent hover:border-b-4 hover:border-amber-200'>Coursework</a>
          <a href='#Projects' className='border-b-4 transition duration-1 border-transparent hover:border-b-4 hover:border-amber-200'>Projects</a>
          <a href='#Blog' className='border-b-4 transition duration-1 border-transparent hover:border-b-4 hover:border-amber-200'>Blog</a>
          <a href='#Contact' className='border-b-4 transition duration-1 border-transparent hover:border-b-4 hover:border-amber-200'>Contact</a>
        </div>
    </nav>
    <div className='flex justify-evenly flex-wrap'>
      <div className='flex flex-1 flex-col bg-amber-500 font-lato text-gray-500 bg-zinc-100'>
        <img className=''></img>
        <h2 className='mt-20 ml-5 text-2xl font-bold'>Theo Pedapolu</h2>
        <h2 className='ml-5'>Something</h2>
        <a href='' className='ml-5 flex'>
          <img src="linkedin.png" width={'25px'} height={'10px'}></img>
          <span>Linkedin</span>
        </a>
        <a href='' className='ml-5'>
          <img></img>
          <span>Github</span>
        </a>
      </div>
      <div className='flex flex-1 flex-col items-left font-system-ui'>
        <h2 className='mt-20 font-lato font-bold text-2xl text-gray-500 underline decoration-zinc-300'>About</h2>
        <p className='text-m'>I am a new grad from UC Berkeley,  having received my Bachelor's in Computer Science & Applied Math. </p>
      </div>

    </div>

    <div className='flex flex-col items-center'>
      <h2>Coursework</h2>
      <p>Lorem ipsum dolor sit amet</p>
    </div>

    <div className='flex'>
      <div>
        <h2>Projects</h2>
      </div>

      <div>

      </div>
    </div>

    <div className='flex' id='Contact'>
      <h2>Contact</h2>
    </div>

    <div className='flex flex-col'>
      <p>&#9400; 2023 Theophilus Pedapolu</p>
      <p>Created with React.js & Tailwind CSS</p>
    </div>
    </div>

    
  );
}

export default App;
