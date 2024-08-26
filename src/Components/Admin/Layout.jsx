import React from 'react'
import Sidebar from './sidebar'
import { useLayoutEffect } from 'react'

function Layout({ children, ...restProps }) {
    
    useLayoutEffect(() => {
        const token = sessionStorage.getItem("admin-user")
        if (!token) {
            window.location.href = '/admin/login'
        }
    }, [])
    

  return (
      <div className='flex h-screen' {...restProps}>
          <div className="h-screen bg-red-400">
              <Sidebar/>
          </div>
          <div className="h-screen overflow-auto pl-2 w-full">
              {
                  children
              }
          </div>
    </div>
  )
}

export default Layout