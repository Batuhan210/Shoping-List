import { useState, useEffect } from 'react';
import ProductForm from './components/ProductForm/productForm';
import ProductList from './components/productList/productList';
import { Container, Alert } from 'react-bootstrap';

import './App.scss';


const App = () => {
    const [products, setProducts] =  useState([]);

    const handleAddProduct = (product) => {
        const newProduct = {
            id: Math.floor((Math.random() * 1000)),
            ...product,
            isBought: false
        };
        setProducts([...products, newProduct]);
    };

    const handleToggleBought = (id) => {
        setProducts(products.map(product =>
          product.id === id ? { ...product, isBought: !product.isBought } : product
        ));
      };
    
      const handleDeleteProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
      };
    
      const allBought = products.length > 0 && products.every(product => product.isBought);
    
      useEffect(() => {
        if (allBought) {
          Alert("Alışveriş Tamamlandı");
        }
      }, [products, allBought]);
    
      return (
        <Container className="app-container">
          <h1>Shoping List</h1>
          <ProductForm onAddProduct={handleAddProduct} />
          <ProductList className='product-list'
            products={products}
            onToggleBought={handleToggleBought}
            onDelete={handleDeleteProduct}
          />
        </Container>

      );
    }

export default App;