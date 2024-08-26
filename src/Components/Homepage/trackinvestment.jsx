import React from 'react'
import dollar from "../../assets/dollar.png"
import { Link } from 'react-router-dom'

function Trackinvestment() {
  return (
    <div>
            <div className=' bg-[#0e3c88] md:w-[80vw] h-[30rem] md:h-[24rem]  boxshadow mx-auto mb-[10rem] mt-[7rem] rounded-lg hidden md:block'>
       <div className=' flex items-center justify-center gap-10 flex-col md:flex-row'>
       <div className='mt-[5rem]'>
            <div className=' '>
                <p className='text-[2rem] text-white font-bold text-center md:w-[35rem] gilda'>Grow your profit while you track your investments!</p>
                <p className='text-white text-[1.2rem] md:w-[35rem] text-center gilda'>Use our optimized platform to keep track of your crypto investments conveniently</p>
                <Link className="hover:no-underline" to="/signup"><button className='rounded-full w-[10rem] h-[3rem] font-bold text-[#0e3c88] gilda bg-[#ffff] mt-[1.5rem] ml-[3rem] md:ml-0'>Get Started</button></Link>
            </div>
        </div>

        <div className='mt-[2rem]'>
          <img src={dollar} alt="" />
        </div>
       </div>
    </div>
    </div>
  )
}

export default Trackinvestment