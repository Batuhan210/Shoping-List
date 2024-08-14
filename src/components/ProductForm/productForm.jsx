import { useState } from 'react';
import PropTypes from 'prop-types';
import { shops, categories } from '../options/data';
import { Form } from 'react-bootstrap';

import './productForm.style.scss';


const ProductForm = ({  onAddProduct }) => {
    const [productName, setProductName] = useState('');
    const [selectedShop, setSelectedShop] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        onAddProduct({ name: productName, shop: selectedShop, category: selectedCategory });
        setProductName('');
        setSelectedShop('');
        setSelectedCategory('');
    };

        return (
            <Form className='product-form' onSubmit={handleSubmit}>
            <Form.Group className='form-group' controlId='formProductName'>
            <Form.Label className='form-label'>Product Name</Form.Label>
            <Form.Control className='form-control'
                type='text'
                placeholder= 'Enter a product name'
                value={productName}
                onChange={(event) => setProductName(event.target.value)}
                required 
                />
            </Form.Group>

            <Form.Group controlId='formShop'>
                <Form.Label>Shop</Form.Label>
                <Form.Control className='select-form-control'
                    as='select'
                    value={selectedShop}
                    onChange={(event) => setSelectedShop(event.target.value)}
                    required
                    >
                      <option value="">Select Shop</option>
                        {shops.map(shop => (
                            <option key={shop.id} value={shop.id}>{shop.name}</option>
                        ))}

            </Form.Control>
            </Form.Group>
            
            <Form.Group controlId="formCategory">
        <Form.Label>Category</Form.Label>
        <Form.Control
          as="select"
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
          required
        >
          <option value="">Select Category</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <button className='btn' type="submit">Add Product</button>
</Form>
    );
}

    
ProductForm.propTypes = {
    onAddProduct: PropTypes.func.isRequired
  };


export default ProductForm;