import React from 'react'
import { useEffect } from 'react'
import Sidebar from '../Dashboard/sidebar'
import Dashboardhome from '../Dashboard/dashboardhome'
// import jwt from "jsonwebtoken"
import {useNavigate} from "react-router-dom"

function Alldash() {

  const navigate = useNavigate()

  async function populateDashboard(){
    const req = await fetch("https://kadan.onrender.com/api/dashboard", {
      headers: {
        "x-access-token":  localStorage.getItem("token")
      }
    })

    const data = req.json()
    console.log(data)
  }
  useEffect(() =>{
    const token = localStorage.getItem("token")
    if(token){
      const user = jwt.decode(token)

      if (!user) {
        localStorage.removeItem("token")
        navigate("/login")
      } else {
        populateDashboard()
      }
    }
  }, [])
  return (
    <div>
      <div className='flex md:gap-[3rem] gap-5'>  
      <Sidebar/>
      <div>
      <Dashboardhome/>   
      
      </div>
    </div>

    
    </div>
  )
}

export default Alldash