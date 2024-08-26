import React from 'react'
import logo from "../../assets/xlm.png"
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <Link className="hover:no-underline" to="/"><img className='mx-auto my-[3rem] w-[3rem] ' src={logo} alt="" /></Link>
      <div className='flex items-center justify-center'>
      <   div className='md:w-[27rem] mb-[3rem] w-[18rem] bg-[#e2e8f0] h-[2.7rem] rounded-full flex md:gap-16 items-center justify-center  '>
                <button className='bg-[#ffff] w-[9rem]  h-[2rem] rounded-full text-[0.9rem] font-extralight'>  Decent Nano Ledger </button>
                    <h3 className='pl-[1.2rem] text-[0.8rem]'>Secure backcup</h3>          
                </div>
      </div>
    </div>
  )
}

export default Nav
