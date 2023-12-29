import React from 'react';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


export default function CartProduct(props) {
  const { product, onAdd } = props;
  return (
    <div class="border-2 p-0 drop-shadow-xl ">
        <div class="p-3">
            <div className="image" class="border-2">
            {/* <img src={product.image} alt={product.name} /> */}
            </div>

            <div className="productInfo" class="text-m font-semibold inline-flex grid-rows-1 grid-cols-2 ">
                <div class="p-4">{product.name}</div>
                <div class="p-4 gap-x-3"><CurrencyRupeeIcon/>{product.price}</div>
            </div>

            <div className='AddButton'>
                <button class="rounded-full bg-green-400 hover:bg-green-300 text-m font-semibold p-3 " onClick={() => onAdd(product)}>Add To Cart</button>
            </div>

        </div>

    </div>
  );
}




