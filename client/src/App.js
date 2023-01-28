import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Products from './pages/Products/Products';
import Product from './pages/Product';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import Checkout from './pages/Checkout';
import BuyNow from './pages/BuyNow';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/add-listing' element={<AddProduct/>}/>
          <Route path='/' element={<Products/>}/>
          <Route path='/products/:id' element={<Product/>}/>
          <Route path='/products/edit/:id' element={<EditProduct/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/checkout/:id' element={<BuyNow/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
