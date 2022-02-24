import { Box, Container, Text } from '@chakra-ui/react';
import React from 'react';
import Todos from './Todos';

const Home = () => {
    return (
        <Container >
            <Text fontSize='18px' fontWeight={700} color='green' padding={'20px 5px '} mt={55}>Hey user !! <br /> Add your information here..</Text>
            <Todos></Todos>
        </Container >
    );
};

export default Home;