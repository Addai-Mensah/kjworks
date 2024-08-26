import React from 'react'
import comp from "../../assets/comp.png"
import { Link } from 'react-router-dom'

function Managefunds() {
  return (
    <div>
      <div className='mt-[7rem] ml-[1rem] sm:ml-[7rem] flex items-center justify-center gap-20 md:flex-row flex-col '>
      <div>
        <p className='md:text-[3rem] leading-14 md:w-[35rem] text-[1.5rem]  md:mt-[4rem] gilda '>Control your security completely</p>
          <p className='md:w-[25rem] md:mt-[2rem] mt-[1rem] text-[1rem] gilda '>Our website has HTTPS encryption, robust firewall and we always ensure reqular security update</p>
           <Link className="hover:no-underline" to="/signup">  <button className='rounded-full gilda w-[9rem] h-[2rem] md:w-[10rem] md:h-[3rem] text-white bg-[#3b82f6] mt-[1.5rem]'>Get Started</button></Link>
        </div>
        <img className=' object-contain md:w-[40rem]  md:ml-0' src={comp} alt="Bitcoin image" />
      </div>
    </div>
  )
}

export default Managefunds