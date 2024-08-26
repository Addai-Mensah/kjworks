import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WithdrawalForm from './WithdrawalForm';
import WithdrawalList from './WithdrawalList';
import Layout from '../Layout';
import Head from '../head';

const WithdrawalPage = () => {
    const [coins, setCoins] = useState([]);
    const [withdrawals, setWithdrawals] = useState([]);
    const user = JSON.parse(sessionStorage.getItem('user'));
    const userId = user?._doc?._id

    useEffect(() => {
        const fetchData = async () => {

            try {

                const withdrawalsResponse = await axios.get(`https://kadan.onrender.com/api/user/withdrawal/${userId}`);
                setWithdrawals(withdrawalsResponse.data);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchData();
    }, []);


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
    }, []);

    const handleWithdraw = async ({ coinType, amount }) => {
        try {
            const coin = coins.find(c => c.coinType === coinType);
            const withdrawal = {
                userId,
                amount,
                coinId: coin._id,
                logo: coin.logo,
                coinType
            };
            await axios.post('https://kadan.onrender.com/api/withdrawal', withdrawal);
            setWithdrawals([...withdrawals, withdrawal]);
        } catch (error) {
            console.error('Error creating withdrawal', error);
        }
    };

    return (
        <Layout>
            <Head />
            <div className="container mx-auto md:px-8 pt-10">
                <WithdrawalForm coins={coins} onWithdraw={handleWithdraw} />
                <WithdrawalList withdrawals={withdrawals} />
            </div>
        </Layout>
    );
};

export default WithdrawalPage;
