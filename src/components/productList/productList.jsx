import { Table } from 'react-bootstrap';
import styled from 'styled-components';
import ProductRow from '../productRow/productRow';
import PropTypes from 'prop-types';

import './productList.style.scss';


const StyledTable = styled(Table)`
    margin-top: 20px;
    `;

const ProductList = ({ products, onToggleBought, onDelete }) => {
    return (
        <div className='product-list'>
        <StyledTable striped bordered hover>
            <thead>
                <tr className='tr-container'>
                    <th>Product Name</th>
                    <th>Shop</th>
                    <th>Category</th>
                    <th>Bought</th>
                    <th>Delete</th>
                </tr>
            </thead>
                <tbody>
                    {products.map(product => (
                        <ProductRow
                            key={product.id}
                            product={product}
                            onToggleBought={onToggleBought}
                            onDelete={(onDelete)}
                            />
                    ))}
                </tbody>
        </StyledTable>
        </div>
    );
};


ProductList.propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        shop: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        isBought: PropTypes.bool.isRequired
      })
    ).isRequired,
    onToggleBought: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
  };


export default ProductList;