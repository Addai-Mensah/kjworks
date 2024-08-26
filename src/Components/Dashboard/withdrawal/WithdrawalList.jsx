import React from 'react';

const WithdrawalList = ({ withdrawals }) => {
    return (
        <div className="p-4 bg-white rounded shadow-md mt-8">
            <h2 className="text-xl font-semibold mb-4">Withdrawals</h2>
            <ul className="space-y-4">
                {withdrawals.map(withdrawal => (
                    <li key={withdrawal?._id} className="p-4 border border-gray-200 rounded flex items-center space-x-4">
                        <img src={withdrawal.logo} alt={withdrawal.coinType} className="w-10 h-10 rounded-full" />
                        <div>
                            <h3 className="font-semibold text-lg">{withdrawal.coinType}</h3>
                            <p className="text-gray-600">Amount: ${withdrawal.amount}</p>
                            <p className="text-gray-600">Status: {withdrawal.status ? 'Approved' : 'Pending'}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WithdrawalList;
