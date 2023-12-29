import React from 'react';
import CartProduct from './CartProduct';

export default function Cart(props) {
  const { products, onAdd } = props;
  return (
    <div>
        <div class="p-0 grid grid-cols-3 grid-rows-3">
            { products && (products.map((product) => 
              <CartProduct key={product.prodId} product={product} onAdd={onAdd}/>
            ))}
        </div>
    </div>
  );
}

