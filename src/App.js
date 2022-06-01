import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Receipt from './components/Receipt';
import { Container } from '@chakra-ui/react'
import Footer from './components/Footer';

function App() {
  return (
    <Container maxW='container.xl' className='app'>
   <Navbar/>
   <Products/>
   <Receipt/>
   <Footer/>
   </Container>
  );
}

export default App;
