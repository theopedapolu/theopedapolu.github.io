import React from 'react';

export default function ProjImg({name,txt,link}) {
    return (
    <div className='relative w-[28%] h-[28%] text-center proj'>
        <a href={link}>
          <img src={name}  alt={txt} className='max-w-[100%] max-h-[100%] blur-sm brightness-50'></img>
          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-semibold text-2xl uppercase'>{txt}</div>
        </a>
    </div>
    )
}