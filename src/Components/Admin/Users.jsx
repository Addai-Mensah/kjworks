import React, { useEffect, useState } from 'react'
import axios from 'axios'
import User from './User'

function Users() {

    const [usersFound, setusersFound] = useState([])

    useEffect(() => {
        axios.get('https://kadan.onrender.com/api/users')
            .then(res => {
                setusersFound(res.data)
                // console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])


    return (
        <div className="relative overflow-x-auto my-10">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            User Actions
                        </th>
                        {
                            usersFound?.users?.length > 0 ?
                                usersFound?.users[0]?._doc?.coins.map((coin) => (
                                    <th scope="col" className="px-6 py-3">
                                        {coin?.coinType}
                                    </th>

                                ))
                                :
                                ""
                        }
                        <th scope="col" className="px-6 py-3">
                            Bal Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersFound?.users?.length > 0 ?
                            usersFound?.users?.map((users, index) => (
                                <User users={users} key={index} />
                            ))
                            :
                            <td>
                                <h1>Loading ...</h1>
                            </td>
                    }

                </tbody>
            </table>
        </div>


    )
}

export default Users