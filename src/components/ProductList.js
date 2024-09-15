import React from 'react';
import ProductItem from './ProductItem';

const products = [
  { id: 1, name: 'Bag', price: 100, image: '/images/bag.png' },
  { id: 2, name: 'Camera', price: 200, image: '/images/camera.png' },
  { id: 3, name: 'Hoodie', price: 300, image: '/images/hoodie.png' }
];

const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
