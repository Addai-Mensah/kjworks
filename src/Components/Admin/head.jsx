import React from 'react'


function Head({ title }) {
  const user = JSON.parse(sessionStorage.getItem('user'))

  return (
      <div className=' my-[3rem] '>
        <div className='flex items-center gap-3'>
          <h1 className='text-[1.2rem] text-[#000000e9] font-bold'>{title ?? `Welcome back ${user?.name ?? ""}`}</h1>
          {/* <img className='w-[3rem] rounded-lg' src={user.profilePic} alt="" /> */}
        </div>
      </div>
  )
}

export default Head