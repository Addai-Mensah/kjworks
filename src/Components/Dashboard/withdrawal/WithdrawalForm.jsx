import React, { useState, useEffect } from 'react';

const WithdrawalForm = ({ coins, onWithdraw }) => {
    const [selectedCoin, setSelectedCoin] = useState('');
    const [amount, setAmount] = useState(0);
    const [balance, setBalance] = useState(0);
    const [error, setError] = useState('');
    const [address, setaddress] = useState("")

    useEffect(() => {
        if (selectedCoin) {
            const coin = coins.find(c => c.coinType === selectedCoin);
            setBalance(coin.balance);
        }
    }, [selectedCoin, coins]);

    const handleWithdraw = () => {
        if (amount > balance) {
            setError('Insufficient balance');
            return;
        }
        setError('');
        onWithdraw({ coinType: selectedCoin, amount });
    };

    return (
        <div className="p-4 bg-white rounded shadow-md">
            <h2 className="text-xl font-semibold mb-4">Request Withdrawal</h2>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Select Coin:</label>
                <select
                    className="w-full p-2 border border-gray-300 rounded"
                    value={selectedCoin}
                    onChange={e => setSelectedCoin(e.target.value)}
                >
                    <option value="">Select a coin</option>
                    {coins.map(coin => (
                        <option key={coin._id} value={coin.coinType}>
                            {coin.coinType}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Withdrawal Address:</label>
                <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    value={address}
                    placeholder='wallet address'
                    onChange={e => setaddress(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Withdrawal Amount:</label>
                <input
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                />
            </div>
            <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick={handleWithdraw}
            >
                Withdraw
            </button>
            {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
    );
};

export default WithdrawalForm;
