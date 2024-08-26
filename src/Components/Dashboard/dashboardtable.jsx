import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Reorder } from 'framer-motion';
import axios from 'axios';

const Container = styled.div`
  margin-top: 20px;
  overflow-x: auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const TableContainer = styled.div`
  min-width: 100%;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  background-color: #f7fafc;
`;

const Th = styled.th`
  padding: 12px 15px;
  border-bottom: 2px solid #edf2f7;
  text-align: left;
  font-size: 0.875rem;
  font-weight: 600;
  color: #2d3748;
  text-transform: uppercase;
`;

const Tbody = styled.tbody``;

const Tr = styled.tr`
  background-color: #ffffff;

  &:nth-child(even) {
    background-color: #f7fafc;
  }
`;

const Td = styled.td`
  padding: 12px 15px;
  border-bottom: 1px solid #edf2f7;
  font-size: 0.875rem;
  color: #4a5568;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const TextContainer = styled.div`
  margin-left: 12px;
`;

const TextBold = styled.p`
  font-weight: bold;
`;

const TextSecondary = styled.p`
  font-size: 0.875rem;
  color: #718096;
`;

const TrendText = styled.span`
  display: inline-block;
  padding: 3px 10px;
  font-weight: bold;
  color: ${({ trend }) => (trend > 0 ? '#38a169' : '#e53e3e')};
  background-color: ${({ trend }) => (trend > 0 ? '#c6f6d5' : '#fed7d7')};
  border-radius: 12px;
`;

function Dashboardtable() {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
        const sortedData = response.data.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
        setCryptoData(sortedData);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };

    fetchCryptoData();
    const interval = setInterval(fetchCryptoData, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Title>Cryptocurrency Ranking</Title>
      <TableContainer>
        <Reorder.Group values={cryptoData} onReorder={setCryptoData}>
          <Table>
            <Thead>
              <Tr>
                <Th>Cryptocurrency</Th>
                <Th>Price</Th>
                <Th>Market Cap</Th>
                <Th>Total Volume</Th>
                <Th>Price Change 24h</Th>
                <Th>Price Percentage 24h</Th>
                <Th>Price Trend</Th>
              </Tr>
            </Thead>
            <Tbody>
              {cryptoData.map((crypto, index) => (
                <Reorder.Item as="tr" key={crypto.id} value={crypto.price_change_percentage_24h}>
                  <Td>
                    <FlexContainer>
                      <Img src={crypto.image} alt={crypto.name} />
                      <TextContainer>
                        <TextBold>{crypto.name}</TextBold>
                        <TextSecondary>{crypto.symbol.toUpperCase()}</TextSecondary>
                      </TextContainer>
                    </FlexContainer>
                  </Td>
                  <Td>${crypto.current_price}</Td>
                  <Td>{crypto.market_cap}</Td>
                  <Td>{crypto.total_volume}</Td>
                  <Td>${crypto.price_change_24h}</Td>
                  <Td>{crypto.price_change_percentage_24h}%</Td>
                  <Td>
                    <TrendText trend={crypto.price_change_percentage_24h}>
                      {crypto.price_change_percentage_24h > 0 ? 'Upward Trend' : 'Downward Trend'}
                    </TrendText>
                  </Td>
                </Reorder.Item>
              ))}
            </Tbody>
          </Table>
        </Reorder.Group>
      </TableContainer>
    </Container>
  );
}

export default Dashboardtable;
