import { Box, Text, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import NumberFormat from 'react-number-format';



function Receipt() {
  const items = useSelector(state => state.product.items);
  const money = useSelector(state => state.product.money);
  const filtered = items.filter((item) => item.count > 0);
  let spendMoney=0
  filtered.map((item)=>{
    spendMoney+=item.productPrice*item.count;
  })



  if(filtered.length ===0){
    return null
  }

  return (
    
    <Grid templateColumns='repeat(3, 1fr)' gap={4}>
      <Box></Box>
      <Box>
        <Text fontSize={35} fontWeight={700}> Your Receipt</Text>
        {filtered.map((item) => 
         <Grid templateColumns='repeat(3, 1fr)' gap={4} key={item.id  }>
            <GridItem> <Text fontSize={15}> {item.productName}</Text> </GridItem>
            <GridItem><Text> x {item.count}</Text></GridItem>
            <GridItem> <Text color='green.600' > 
        <NumberFormat value={item.productPrice*item.count} displayType='text' thousandSeparator={true} prefix={'$'} />
             </Text></GridItem>
          </Grid>
        )
        }
        <hr></hr>
        <Text fontSize={20} fontWeight={700} float='left' ms={4}>TOTAL </Text>
        <Text color='green.500' float='right' me={5} mb={5} fontSize={20}> 
        <NumberFormat value={spendMoney} displayType='text' thousandSeparator={true} prefix={'$'} />
        </Text>
      </Box>
      <Box></Box>
    </Grid>
      
  )
}

export default Receipt;
