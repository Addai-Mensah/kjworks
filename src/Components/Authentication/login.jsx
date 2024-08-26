import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Swal from "sweetalert2"
import abstract from "../../assets/bg.png"
import background from "../../assets/bg.png"

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  


  async function loginUser(event) {
    event.preventDefault()

    if( email.length == 0 ||  password.length == 0  ){
      setError(true)
    }

   else{
    setIsLoading(true)
    const response = await fetch("https://kadan.onrender.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      })
    })

    const data = await response.json()

    if (data.user) {
      localStorage.setItem("token", data.token)
      sessionStorage.setItem("user", JSON.stringify({ ...data.user, password: null }))

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Login Successful ',
        showConfirmButton: false,
        timer: 2500
      })

      window.location.href = "/dashboard"
    } else {
      setIsLoading(false)
      alert("Please check username and  password")
    }
    console.log(data)
   }
    
  }

  return (
    <div>
      <div className=" flex items-center md:flex-row flex-col ">
        <div className=" md:w-2/4 w-full h-[50vh] md:h-[100vh] bg-no-repeat block md:hidden" style={{ backgroundImage: `url(${abstract})` }}>
          <h1 className='text-white flex items-center justify text-[1.5rem] text-center mt-[7rem] spartan'>Unlock the Future of Wealth With Decent Nano Ledger</h1>
          <h3 className='text-white text-center spartan'>Tokenize success, optimize returns</h3>
        </div>

        <div className=" md:w-2/4 w-full h-[50vh] md:h-[100vh] bg-no-repeat md:block hidden" style={{ backgroundImage: `url(${background})` }}>
        <h1 className='text-white  text-[1.7rem] mt-[16rem] ml-[5rem] w-[20rem] spartan'>Unlock the Future of Wealth With Decent Nano Ledger</h1>
          <h3 className='text-white text-[1rem] ml-[5rem] spartan'>Tokenize success, optimize returns</h3>
        </div>


        <div className="md:my-0 my-[3rem]">
          <Card color="transparent" shadow={false}>
            <Typography variant="h4" className="text-[#3F7AEE] gilda ">
              Login
            </Typography>
            <Typography className="mt-1 font-normal text-[#3F7AEE] gilda ">
              Enter your details to login.
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={loginUser}>
              <div className="mb-4 flex flex-col gap-6">

                <Input size="lg" label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                />
                 {error && email.length <=0? 
            <span className='text-[red] mt-[-1.3rem] text-[0.8rem]'>Email can't be empty</span>: ""
            }
                <Input size="lg" label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
                 {error && password.length <=0? 
            <span className='text-[red] mt-[-1.3rem] text-[0.8rem]'>Passward can't be empty</span>: ""
            }
              </div>



             <button className="mt-6 bg-[#3F7AEE]  gilda py-[0.2rem] text-white w-[7rem] rounded-lg" type="submit" value="Login">
              {isLoading ?  <svg className="w-[1.5rem] mx-auto" version="1.1" id="L7" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
 <path fill="#fff" d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z">
      <animateTransform 
         attributeName="transform" 
         attributeType="XML" 
         type="rotate"
         dur="2s" 
         from="0 50 50"
         to="360 50 50" 
         repeatCount="indefinite" />
  </path>
 <path fill="#fff" d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
  c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z">
      <animateTransform 
         attributeName="transform" 
         attributeType="XML" 
         type="rotate"
         dur="1s" 
         from="0 50 50"
         to="-360 50 50" 
         repeatCount="indefinite" />
  </path>
 <path fill="#fff" d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
  L82,35.7z">
      <animateTransform 
         attributeName="transform" 
         attributeType="XML" 
         type="rotate"
         dur="2s" 
         from="0 50 50"
         to="360 50 50" 
         repeatCount="indefinite" />
  </path>
</svg>: "Login"}
             </button>
              {/* <input className="mt-6 bg-[#3F7AEE]  gilda py-[0.2rem] text-white w-[7rem] rounded-lg" type="submit" value="Login" /> */}
              <Link to="/signup"> <Typography color="gray" className="mt-4 text-center  gilda text-[0.9rem] font-normal text-[#3F7AEE]">
                Click here to Signup

              </Typography>
              </Link>
            </form>
          </Card>
        </div>


      </div>
    </div>
  )
}

export default Login