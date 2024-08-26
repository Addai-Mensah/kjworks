import React from 'react';
import { FiHome, FiUser, FiBarChart, FiSettings } from "react-icons/fi";
import WithdrawIcon from '../icons/withdrawIcon';

function Sidebar2() {
    const menuItems = [
        { href: "/dashboard", icon: <FiHome />, label: "Dashboard" },
        { href: "/ledger", icon: <FiUser />, label: "Link Wallet" },
        { href: "/deposit", icon: <FiBarChart />, label: "Deposit" },
        { href: "/settings", icon: <FiSettings />, label: "Settings" },
    ];

    const withdrawalSubMenu = [
        { href: "/withdrawal", label: "Withdraw Money" },
        { href: "/withdrawal", label: "Withdrawal List" },
    ];

    return (
        <div className="flex flex-col h-screen w-64 bg-gray-800 text-white fixed">
            <div className="flex items-center justify-center mt-10">
                <a href="/dashboard">
                    <img className="h-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd9z19X-baC79zTXU4KZmopMcqJ2JPowoo_w&s" alt="quantumledgersecv" />
                </a>
            </div>
            <div className="flex-grow overflow-y-auto mt-10">
                <ul className="space-y-4">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href} className="flex items-center p-2 hover:bg-gray-700 rounded-md">
                                <span className="mr-3">{item.icon}</span>
                                <span>{item.label}</span>
                            </a>
                        </li>
                    ))}
                    <li className="text-yellow-500 uppercase font-semibold text-sm mt-10 px-2">
                        Transactions
                    </li>
                    {withdrawalSubMenu.map((item, index) => (
                        <li key={index} >
                            <a href={item.href} className="flex items-center p-2 hover:bg-gray-700 rounded-md">
                                {item.label}
                            </a>
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    );
}

export default Sidebar2;
