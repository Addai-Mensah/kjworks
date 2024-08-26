import React from 'react'
import comp from "../../assets/comp.png"
import { Link } from 'react-router-dom'
import bye from "../../assets/goodby.png"


function Security() {
  return (
    <div>
       <div className='flex max-[300px]:ml-[14rem] ml-[1rem] md:mt-[5rem] mt-[5rem] gap-20  md:flex-row flex-col-reverse mb-[7rem]'>
            <img className='md:w-[40vw] object-contain mx-auto md:pl-[3rem]' src={bye} alt="" />

            <div className='  '>
                <div>
                <p className='md:text-[3rem] w-[17rem]  leading-14 md:w-[35rem]  text-[1.5rem]  md:mt-[4rem] gilda'> Say goodby to complicated statements</p>
             <p className='md:w-[25rem] md:mt-[2rem] mt-[1rem] text-[1rem] gilda'>Easy to read account statements that let you keep track of your tokens. We  make everything easy for you!</p> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Security