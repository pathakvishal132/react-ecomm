import React from 'react';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <div className="cartContainer" class="text-xl font-base font-mono text-center">
      <h2>Cart Items</h2>
      <div class='border-2 text-center p-2'>
        {cartItems.length === 0 && <div class="font-black">Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} class="inline-flex">
            <div className="">{item.name}</div>
            <div className="">
              <button onClick={() => onRemove(item)} className="remove">
                <RemoveCircleRoundedIcon/>
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                <AddCircleRoundedIcon/>
              </button>
            </div>

            <div>
              {item.qty} x <CurrencyRupeeIcon/>{item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2 text-lg">Items Price</div>
              <div className="col-1 text-right text-lg"><CurrencyRupeeIcon/>{itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2 text-lg">Tax Price</div>
              <div className="col-1 text-right text-lg"><CurrencyRupeeIcon/>{taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2 text-lg">Shipping Price</div>
              <div className="col-1 text-right text-lg">
                <CurrencyRupeeIcon/>{shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2 text-lg">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right text-lg">
                <strong><CurrencyRupeeIcon/>{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="checkoutButton" class="text-m  font-semibold justify-center items-center">
            <div>
              <button class="p-3 rounded-full bg-slate-300  p-2" onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}