import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Flex, Heading, Text, Grid, Container } from '@chakra-ui/react';
import { cryptoLinks } from '../../../constants/constant'; // Assuming this is your constant file
import Newcard from './Newcard';
import Layout from './Layout';
import Head from './head';

function Ledger() {
  return (
    <Layout>
      <Head/>
      <Box bg="gray.100" minH="100vh">
               {/* Main Content */}
        <Container maxW="container.xl" py={10}>
          {/* Hero Section */}
          <Box textAlign="center" mb={10}>
            <Heading as="h1" size="2xl" mb={2}>
              Connect Wallet
            </Heading>
            <Text fontSize="lg">
              Open protocol for connecting Wallets to <br />
              <Text as="span" fontWeight="bold">
                Dapps
              </Text>
            </Text>
          </Box>

          {/* Crypto Links Grid */}
          <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)' }} gap={8}>
            {cryptoLinks.map((coin, index) => (
              <Newcard item={coin} key={index} />
            ))}
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
}

export default Ledger;
