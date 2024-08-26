import React from 'react'
import Sidebar from './sidebar'
import { useLayoutEffect } from 'react'
import Sidebar2 from './Sidebar2'

function Layout({ children, ...restProps }) {
    
    useLayoutEffect(() => {
        const token = sessionStorage.getItem('user')
        if (!token) {
            window.location.href = '/login'
        }
    }, [])
    

  return (
      <div className='flex justify-between h-screen' {...restProps}>
          <div className="hidden md:block h-screen bg-red-400">
              <Sidebar2/>
          </div>
          <div className="h-screen w-full md:w-[82%] overflow-auto md:pl-2">
              {
                  children
              }
          </div>
    </div>
  )
}

export default Layout