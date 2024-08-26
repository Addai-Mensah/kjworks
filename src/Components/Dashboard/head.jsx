import React, { useState } from 'react';
import { FaBars, FaChevronDown, FaUser, FaWallet, FaCog, FaSignOutAlt, FaTimes } from 'react-icons/fa';

function Head({ title }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    if (confirm("Are you sure you want to logout?")) {
      sessionStorage.removeItem('user');
      window.location.href = '/login';
    }
  };

  const user = JSON.parse(sessionStorage.getItem('user'));

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-white shadow-lg sticky top-0 flex justify-between items-center p-4">
        <button onClick={toggleSidebar} className=" border-0 focus:outline-none">
          <FaBars size={20} className='block md:hidden' />
        </button>
        <div onClick={handleLogout} className="relative flex items-center space-x-4">
          <img
            src="https://secure.quantumledgersecv.com/public/dist/images/default-avatar.png"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-sm font-semibold">{user?._doc?.name}</span>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out`}
        style={{ width: '70%' }}
      >
        <div className="flex justify-between items-center p-4 bg-gray-900">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={toggleSidebar} className="border-0 focus:outline-none">
            <FaTimes size={20} />
          </button>
        </div>
        <ul className="flex flex-col p-4 space-y-4">
          <li className="flex items-center p-2 hover:bg-gray-700 rounded">
            
            <a href="/dashboard" className="text-white">Dashboard</a>
          </li>
          <li className="flex items-center p-2 hover:bg-gray-700 rounded">
            <FaWallet size={17} className="mr-2" />
            <a href="/ledger" className="text-white">Link Wallet</a>
          </li>
          <li className="flex items-center p-2 hover:bg-gray-700 rounded">
            <FaUser size={17} className="mr-2" />
            <a href="/deposit" className="text-white">Deposit</a>
            
          </li>

          <li className="flex items-center p-2 hover:bg-gray-700 rounded">
            <FaCog size={17} className="mr-2" />
            <a href="/settings" className="text-white">Settings</a>
          </li>


          <li className="flex items-center p-2 hover:bg-gray-700 rounded">
            <FaChevronDown size={17} className="mr-2" />
            <a href="/withdrawal" className="text-white">Withdrawal</a>
          </li>

          

          <li className="flex items-center p-2 hover:bg-gray-700 rounded">
            <FaSignOutAlt size={14} className="mr-2" />
            <button onClick={handleLogout} className="text-white">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Head;
