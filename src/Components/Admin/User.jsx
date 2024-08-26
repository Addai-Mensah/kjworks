import React, { useState, useEffect } from 'react'
import axios from 'axios'
function User({ users, }) {

    const handleDeleteUser = () => {
        if (confirm("Are you sure you want to delete this user?")) {
            console.log(users._doc._id)
            axios.delete(`https://kadan.onrender.com/api/user/${users._doc._id}`)
                .then(res => {
                    // console.log(res.data)
                    alert('user deleted')
                })
                .catch(err => {
                    console.log(err)
                    alert('error deleting user')
                })
        }
    }

    const [isEditingBal, setisEditingBal] = useState(false)

    const [coins, setcoins] = useState([])
    useEffect(() => {
        setcoins(users._doc?.coins)
    }, [])

    const handleBalanceChange = (coinId, newBalance) => {
        const updatedBalances = coins.map(coin => (
            coin._id === coinId ? { ...coin, balance: newBalance } : coin
        ));
        setcoins(updatedBalances);
    };

    const updateUserBalance = () => {
        // console.log('pressed')
        axios.put(`https://kadan.onrender.com/api/coins/${users._doc._id}`, { coins: coins })
            .then(res => {
                console.log(res.data)
                alert('user updated')
            })
            .catch(err => {
                console.log(err)
                alert('error updating user')
            })
    }


    return (
        <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={users._doc._id}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {users._doc.name}
                </th>
                <td className="px-6 py-4">
                    {users._doc.email}
                </td>
                <td>
                    <button className="px-6 py-2 text-white bg-blue-500 rounded-md">
                        Edit User
                    </button>
                    <button onClick={handleDeleteUser} className="px-6 py-2 text-white bg-red-500 rounded-md">
                        Delete
                    </button>
                </td>
                {
                    users._doc?.coins.map((coin, index) => (
                        <th scope="col" className="px-6 py-3" key={index}>
                            {coin?.balance}
                        </th>

                    ))
                }
                <td>
                    <button onClick={() => setisEditingBal(true)} className="px-6 py-2 text-white bg-blue-500 rounded-md">
                        Edit bal
                    </button>

                </td>
            </tr>
            {
                isEditingBal ?
                    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                        <div className="fixed inset-0 z-10 overflow-y-auto">
                            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        {
                                            coins.length > 0 &&
                                            coins.map((coin, index) => (
                                                <div className='mb-4' key={coin._id}>
                                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                                        {coin?.coinType}
                                                    </label>
                                                    <input value={coin.balance} name={coin.coinType} onChange={e => { handleBalanceChange(coin._id, e.target.value) }} type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button type="button" onClick={() => setisEditingBal(false)} className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                                        <button type="button" onClick={updateUserBalance} className="mt-3 inline-flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 sm:mt-0 sm:w-auto">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    : ""
            }
        </>
    )
}

export default User