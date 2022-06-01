import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

function Navbar() {
    return (
        <Box alignItems='center' mb={5}>
            <Image src='https://neal.fun/spend/billgates.jpg' m='auto' borderRadius='full' />
            <Text fontSize={40} mt={2} mb={2} fontWeight={700}>Spend Bill Gates' Money</Text>
        </Box>
       
    );
}

export default Navbar;
