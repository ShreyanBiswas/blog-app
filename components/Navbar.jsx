import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
      <div className='flex justify-between  shadow-xl bg-slate-700 '>
          <div className='flex gap-10 p-5'>
        <p><Link className='text-white text-1xl hover:text-white/70' href={"/"}>Home</Link></p>
              
        <p><Link className='text-white text-1xl hover:text-white/70' href={"/"}>About</Link></p>
          </div>
    </div>
  )
}
