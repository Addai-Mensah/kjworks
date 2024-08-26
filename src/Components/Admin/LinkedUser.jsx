import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from './Layout';

const LinkedCoinsList = () => {
    const [linkedCoins, setLinkedCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLinkedCoins = async () => {
            try {
                const response = await axios.get('https://kadan.onrender.com/api/linked-coins');
                setLinkedCoins(response.data);
            } catch (err) {
                setError('Failed to fetch linked coins');
                console.error('Error fetching linked coins:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchLinkedCoins();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }


    return (
        <Layout>
            <div className="container mx-auto md:px-8 pt-10">
                <h2 className="text-xl font-semibold mb-4">Linked Users</h2>
                {linkedCoins.length === 0 ? (
                    <p>No linked Users found.</p>
                ) : (
                    <ul className="space-y-4">
                        {linkedCoins.map(link => (
                            <li key={link._id} className="p-4 border border-gray-200 rounded flex items-center space-x-4">
                                <div>
                                    <h3 className="font-semibold text-lg">Username: {link.username}</h3>
                                    <p className="text-gray-600">User ID: {link.userId._id}</p>
                                    <p className="text-gray-600">Coin ID: {link.coinId._id}</p>
                                    <p className="text-gray-600">Connection ID: {link.connectionId}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </Layout>
    );
};

export default LinkedCoinsList;
