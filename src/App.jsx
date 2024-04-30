import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {ProductListingPage} from './ProductListingPage/productListingPage.jsx';
import {ProductDescriptionPage} from './ProductDescriptionPage/productDescriptionPage.jsx';

function App() {
  return (  
    <Router>
      <Routes>
        <Route exact path="/" element={<ProductListingPage/>} />
        <Route path="/pokemons/:id" element={<ProductDescriptionPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
