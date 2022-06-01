import { Box,Text,Button } from '@chakra-ui/react';
import React from 'react';
import { SiLinkedin,SiGithub  } from 'react-icons/si';

function Footer() {
  return (
    <Box height={100}  alignItems='center' backgroundColor='Black' m='auto'>
    <Text mt={5} mb={5} color='white' >Emre Yılmaz</Text>
    <Button me={5} type='linkedin'  leftIcon={<SiLinkedin />} >
    <a href='https://www.linkedin.com/in/emreyilmazinfo/' target='_blank'>Linkedin</a>
  </Button>
  <Button  colorScheme='gray' leftIcon={<SiGithub />} >
    <a href='https://github.com/emreylmaz' target='_blank'>Github</a>
  </Button>

    </Box>
  )
}

export default Footer;
