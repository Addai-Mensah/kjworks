import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Layout from './Layout';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:100vw;
  height: 100vh;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormButton = styled.button`
  width: 100%;
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

function Settings() {
    const user = JSON.parse(sessionStorage.getItem('user')) || {};
    const [email, setEmail] = useState(user.email || '');
    const [name, setName] = useState(user.name || '');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const updateUser = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const res = await axios.post('https://kadan.onrender.com/api/user', {
                name,
                email,
                password,
            });
            console.log(res.data);

            alert('Data updated successfully');
            window.location.href = '/login';
            setLoading(false);
        } catch (error) {
            console.error('Error updating user:', error);
            setLoading(false);
        }
    };

    return (
        <Layout>
            <Container>
                <ContentContainer>
                    <FormTitle>User Settings</FormTitle>
                    <form onSubmit={updateUser}>
                        <FormGroup>
                            <FormLabel htmlFor="username">Username</FormLabel>
                            <FormInput
                                id="username"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Username"
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <FormInput
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <FormInput
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                        </FormGroup>
                        <FormButton type="submit" disabled={loading}>
                            {loading ? 'Updating...' : 'Update'}
                        </FormButton>
                    </form>
                </ContentContainer>
            </Container>
        </Layout>
    );
}

export default Settings;
