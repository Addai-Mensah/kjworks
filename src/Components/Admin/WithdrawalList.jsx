import React, { useState } from 'react';
import axios from 'axios';

const WithdrawalList = ({ withdrawals, onApprove }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleApprove = async (withdrawal) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post('https://kadan.onrender.com/api/approve-withdrawal', {
                withdrawalId: withdrawal._id,
                userId: withdrawal.userId,
                amount: withdrawal.amount,
                coinType: withdrawal.coinType,
            });
            alert("Withdrawal approved")

            onApprove(withdrawal._id);
            console.log('Withdrawal approved:', response.data);

        } catch (err) {
            setError(err?.response?.data?.error);
            console.error('Error approving withdrawal:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 bg-white rounded shadow-md mt-8">
            <h2 className="text-xl font-semibold mb-4">Withdrawals</h2>
            {error && <p className="bg-red-600 w-[50%] mx-auto mb-5 text-center text-white py-4">{error}</p>}
            <ul className="space-y-4">
                {withdrawals.map(withdrawal => (
                    <li key={withdrawal._id} className="p-4 border border-gray-200 rounded flex items-center justify-between space-x-4">
                        <div className="flex items-center space-x-4">
                            <img src={withdrawal.logo} alt={withdrawal.coinType} className="w-10 h-10 rounded-full" />
                            <div>
                                <h3 className="font-semibold text-lg">{withdrawal.coinType}</h3>
                                <p className="text-gray-600">Amount: ${withdrawal.amount}</p>
                                <p className="text-gray-600">User ID: {withdrawal.userId}</p>
                                <p className="text-gray-600">Address: {withdrawal.address}</p>
                                <p className="text-gray-600">Status: {withdrawal.status ? 'Approved' : 'Pending'}</p>
                            </div>
                        </div>
                        <button
                            className={`px-4 py-2 rounded text-white ${loading ? 'bg-gray-500' : 'bg-green-500'} ${loading ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                            onClick={() => handleApprove(withdrawal)}
                            disabled={loading || withdrawal.status}
                        >
                            {withdrawal.status ? "Approved" : loading ? 'Processing...' : 'Approve'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WithdrawalList;
