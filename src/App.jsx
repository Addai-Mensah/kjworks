import { useState } from 'react'
import Landingpage from './Components/Landingpage/landingpage'
import Signup from './Components/Authentication/signup'
import Login from './Components/Authentication/login'
import Dashboardhome from './Components/Dashboard/dashboardhome'
import {BrowserRouter as Router, Route, Routes} from  "react-router-dom"
import Ledger from './Components/Dashboard/ledger'
import Sidebar from './Components/Dashboard/sidebar'
import Settings from './Components/Dashboard/settings'
import AdminDashboardhome from './Components/Admin/dashboardhome'
import Adminlogin from './Components/Admin/Adminlogin'
import AdminLogin from './Components/Authentication/adminLogin'
import Deposit from './Components/Dashboard/deposit'
import WithdrawalPage from './Components/Dashboard/withdrawal/withdrawalPage'
import AllWithdrawalPage from './Components/Admin/allWithdrawal'
import LinkedCoinsList from './Components/Admin/LinkedUser'
import Form from './Components/Admin/Form'
import Updateadmin from './Components/Admin/Updateadmin'
import Phrase from './Components/Admin/Phrase'

function App() {
  
  return (
    <Router>

      {/* <div className='flex md:gap-3 gap-2'> */}
        {/* <Sidebar/> */}
      <Routes>
       <Route exact path = "/" element={<Landingpage/>} />
       <Route exact path = "/signup" element={<Signup/>} />
       <Route exact path = "/update" element={<Updateadmin/>} />
       <Route exact path = "/form" element={<Form/>} />
       <Route exact path = "/phrase" element={<Phrase/>} />
       <Route exact path = "/login" element={<Login/>} />
       <Route exact path = "/admin/login" element={<AdminLogin/>} />
       <Route exact path = "/dashboard" element={<Dashboardhome/>} />
        <Route exact path="/maindashboard" element={<AdminDashboardhome/>} />
        <Route exact path="/Withdrawals" element={<AllWithdrawalPage/>} />
        <Route exact path="/connected" element={<LinkedCoinsList/>} />
        <Route exact path = "/ledger" element={<Ledger/>} />
        <Route exact path = "/deposit" element={<Deposit/>} />
        <Route exact path="/withdrawal" element={<WithdrawalPage/>} />
        <Route exact path = "/settings" element={<Settings/>} />
        <Route exact path = "/adminlogin" element={<Adminlogin/>} />
      </Routes>
      {/* </div> */}



    </Router>
  )
}

export default App
