import { Button } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import './productRow.style.scss';


const IconButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  min-width: 40px;
  min-height: 40px;
    border: none;
    color: #000000;
`; 


const ProductRow = ({ product, onToggleBought, onDelete }) => {

    return (
        <tr className='product-row'
            onClick={() => onToggleBought(product.id)}
            style={{ textDecoration: product.isBought ? 'line-through' : 'none' }}>
              
            <td>{product.name}</td>
            <td>{product.shop}</td>
            <td>{product.category}</td>
            <td>{product.isBought ? 'Yeah' : 'Nah'}</td>

            <td>
        <IconButton className='icon-btn' onClick={(event) => { event.stopPropagation(); onDelete(product.id); }}>
          <FaTrash />
        </IconButton>
      </td>
        </tr>
    );
};



ProductRow.propTypes = {
    product: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          shop: PropTypes.string.isRequired,
          category: PropTypes.string.isRequired,
          isBought: PropTypes.bool.isRequired
        })
      ).isRequired,
      onToggleBought: PropTypes.func.isRequired,
      onDelete: PropTypes.func.isRequired,
};


export default ProductRow;