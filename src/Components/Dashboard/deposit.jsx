import React, { useState, useEffect } from 'react';
import { Box, Button, Flex, Grid, Image, Text, Container, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, useClipboard, Heading, Spinner } from '@chakra-ui/react';
import Layout from './Layout';
import axios from 'axios';
import Head from './head';

// const coins = [
//     { logo: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400', coinType: 'Bitcoin', balance: '1.234', network: 'Bitcoin Network', address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa' },
//     { logo: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628', coinType: 'Ethereum', balance: '10.678', network: 'Ethereum Network', address: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe' },
//     { logo: 'https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661', coinType: 'Usdt', balance: '5.432', network: 'Litecoin Network', address: 'LX1GZe6hQmK2vaDU7NCpbQ5gJvsmXGGQ8X' },
//     { logo: 'https://assets.coingecko.com/coins/images/2/large/litecoin.png?1696501400', coinType: 'Litecoin', balance: '5.432', network: 'Litecoin Network', address: 'LX1GZe6hQmK2vaDU7NCpbQ5gJvsmXGGQ8X' },
//     // Add more coins as needed
// ];

function Deposit() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedCoin, setSelectedCoin] = useState(null);
    const { hasCopied, onCopy } = useClipboard(selectedCoin?.address || '');

    const openModal = (coin) => {
        let result = coins.filter((item) => item.coinType === coin.coinType)
        console.log({result})
        setSelectedCoin(coin);
        onOpen();
    };

    const user = JSON.parse(sessionStorage.getItem('user'));
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const response = await axios.get(`https://kadan.onrender.com/api/user/coins/${user?._doc?._id}`);
                setCoins(response.data.coins);
                // console.log(response.data.coins)
            } catch (error) {
                console.error('Error fetching coins:', error);
            }
        };

        fetchCoins();
        const interval = setInterval(fetchCoins, 3000);

        return () => clearInterval(interval);
    }, [user]);

    return (
        <Layout>
            <Head/>
            <Box bg="gray.100" minH="100vh">
                <Container maxW="container.xl" py={10}>
                    <Box textAlign="center" mb={10}>
                        <Heading as="h1" size="2xl" mb={2}>
                            Deposit
                        </Heading>
                        <Text fontSize="lg">
                            Select a coin to deposit
                        </Text>
                    </Box>

                    <Grid  width={"100%"} templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={5}>
                        {coins.length > 0 ? (
                            coins.map((item, index) => (
                                <Box
                                    key={index}
                                    borderWidth="1px"
                                    borderRadius="lg"
                                    overflow="hidden"
                                    p={5}
                                    boxShadow="sm"
                                    onClick={() => openModal(item)}
                                    cursor="pointer"
                                    width="100%"
                                    bg="white"
                                >
                                    <Flex alignItems="center">
                                        <Image src={item.logo} boxSize="50px" alt={`${item.coinType} logo`} />
                                        <Box ml={4}>
                                            <Text fontWeight="bold" color="gray.600">{item.coinType}</Text>
                                            <Text fontWeight="bold" color="gray.600">Balance: ${item.balance}</Text>
                                        </Box>
                                    </Flex>
                                </Box>
                            ))
                        ) : (
                            <Spinner size="xl" color="blue.500" />
                        )}
                    </Grid>

                    {/* Modal */}
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Deposit {selectedCoin?.coinType}</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                {/* <Text fontSize="lg" fontWeight="bold">Network:</Text>
                                <Text mb={4}>{selectedCoin?.network}</Text> */}
                                <Text fontSize="lg" fontWeight="bold">Wallet Address:</Text>
                                <Text mb={4}>{selectedCoin?.address}</Text>
                                <Button onClick={onCopy} colorScheme="blue" size="md">
                                    {hasCopied ? 'Copied' : 'Copy Address'}
                                </Button>
                            </ModalBody>
                            <ModalFooter>
                                <Button variant="ghost" onClick={onClose}>Close</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </Container>
            </Box>
        </Layout>
    );
}

export default Deposit;
