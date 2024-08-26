import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaBars, FaMoneyBillWave, FaUser, FaWallet, FaCog, FaSignOutAlt, FaBell } from 'react-icons/fa';
import Layout from './Layout';
import Head from './head';

function Dashboardhome() {
   const user = JSON.parse(sessionStorage.getItem('user'));
   const [coins, setCoins] = useState([]);

   useEffect(() => {
      const fetchCoins = async () => {
         try {
            const response = await axios.get(`https://kadan.onrender.com/api/user/coins/${user?._doc?._id}`);
            setCoins(response.data.coins);
         } catch (error) {
            console.error('Error fetching coins:', error);
         }
      };

      fetchCoins();
      const interval = setInterval(fetchCoins, 3000);

      return () => clearInterval(interval);
   }, [user]);

   return (
      <Layout>
         <div className="min-h-screen mx-auto bg-gray-50 p-4">
<Head/>

            {/* Main Content */}
            <div className="relative mt-8 flex flex-col flex-grow">
               <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-6">
                  {/* Left Profile Section */}
                  <div className="flex gap-4 items-center">
                     <img
                        src="https://secure.quantumledgersecv.com/public/dist/images/default-avatar.png"
                        alt="Profile"
                        className="w-24 h-24 rounded-full"
                     />
                     <div>
                        <p className="text-2xl font-semibold text-gray-800 flex items-center">
                           {user?._doc?.name}
                           <a href="https://secure.quantumledgersecv.com/profile" className="ml-2">
                              <FaUser size={18} />
                           </a>
                        </p>
                        <p className="text-sm text-gray-600 mt-2">
                           Welcome, here is a brief summary of your account.
                        </p>
                     </div>
                  </div>
                  {/* Right Profile Section */}
                  <div className="flex gap-4 items-center">
                     <a
                        href="/deposit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center justify-center space-x-2 hover:bg-blue-600 transition duration-300 ease-in-out"
                     >
                        <span className="text-sm font-medium">Deposit Now</span>
                        <FaMoneyBillWave size={18} />
                     </a>
                     <a
                        href="/ledger"
                        className="bg-yellow-500 text-gray-800 px-4 py-2 rounded-md flex items-center justify-center space-x-2 hover:bg-yellow-600 transition duration-300 ease-in-out"
                     >
                        <span className="text-sm font-medium">Connect Wallet</span>
                        <FaWallet size={18} />
                     </a>
                  </div>

               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4 flex-grow">
                  {coins?.length > 0 ?
                     coins?.map((item, index) => (
                        <div key={index} className="col-span-1 shadow h-32 flex items-center">
                           <div className="flex gap-4 items-center justify-center ml-4">
                              <img src={item.logo} className="w-12" alt="logo" />
                              <div>
                                 <h1 className="text-gray-600 text-lg font-bold">{item?.coinType}</h1>
                                 <h1 className="text-gray-600 text-center font-bold">Balance: {item?.balance}</h1>
                              </div>
                           </div>
                        </div>
                     ))
                     :
                     <h1>Loading ...</h1>
                  }
               </div>
            </div>
         </div>
      </Layout>
   );
}

export default Dashboardhome;
