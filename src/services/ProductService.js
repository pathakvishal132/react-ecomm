import axios from "axios";

const PRODUCT_API_BASE_URL = "http://localhost:8080/api/v1/products";
class ProductService{
    
    saveProduct(product) {
        return axios.post(PRODUCT_API_BASE_URL, product);
    }

    getProducts(){
        //TODO: get all the products from the database.
        return axios.get(PRODUCT_API_BASE_URL);
    }
}

export default new ProductService();