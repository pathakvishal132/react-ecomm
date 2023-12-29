import React, {useState} from 'react';
import ProductService from './services/ProductService';

export default function Vendor(){

    const [product, setProduct] = useState({
        id:"",
        productName:"",
        productPrice:"",
        productDesc:"",
        productData:"",
    });

    const handleChange = (e) =>{
        const value = e.target.value;
        setProduct({...product, [e.target.name]: value});
    };

    const saveProduct = (e) =>{
        e.preventDefault();
        ProductService.saveProduct(product).then((response)=>{console.log(response)}).catch((error)=>{console.log(error);})
    }
 return(
    <div className="VendorPage" style={{ margin: "auto", justifyContent: "center", marginBottom: "120px"}}>
        <div className="vendorFormContainer" class="w-2/5 m-auto justify-center">
            <form className="VendorForm" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="ProductName">Enter the Name of the product</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="ProductName" name="productName" value={product.productName} onChange={(e) => handleChange(e)}/>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="ProductPrice">Fix a price for the product</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" id="ProductPrice" name="productPrice" value={product.productPrice} onChange={(e) => handleChange(e)}/>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="ProductDescription">Describe your product</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="ProductDescription" name="productDesc" value={product.productDesc} onChange={(e) => handleChange(e)}/>
            </div>

            <div class="mb-12">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="ProductPicture">Upload a picture of the product: <h4 class="italic font-light">Upload URL of the Image </h4></label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="ProductPicture" name="productData" value={product.productData} onChange={(e) => handleChange(e)}/>
            </div>

            <div class="flex items-center justify-center">
                <button className="submitButtonValidation" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" onClick={saveProduct}>Submit for validation</button>      
            </div> 
            
            </form>
        </div>
    </div>
 )
}