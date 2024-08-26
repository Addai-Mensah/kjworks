import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from './Layout'
import WithdrawalList from './WithdrawalList';

const AllWithdrawalPage = () => {
    const [withdrawals, setWithdrawals] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            try {

                const withdrawalsResponse = await axios.get(`https://kadan.onrender.com/api/withdrawal`);
                setWithdrawals(withdrawalsResponse.data);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchData();
    }, []);

    const handleApprove = (id) => {
        setWithdrawals(withdrawals.filter(withdrawal => withdrawal._id !== id));
    };


    return (
        <Layout>
            <div className="container mx-auto md:px-8 pt-10">
                <WithdrawalList withdrawals={withdrawals} onApprove={handleApprove} />
            </div>
        </Layout>
    );
};

export default AllWithdrawalPage;
