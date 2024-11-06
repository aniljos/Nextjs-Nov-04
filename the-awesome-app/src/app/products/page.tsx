'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "@/model/Product";
import classes from './page.module.css';
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { AppState } from "@/state/redux/store";


//const baseUrl = "http://localhost:9000/products";
const baseUrl = "http://localhost:9000/secure_products";

export default function ListProducts() {

    const [products, setProducts] = useState<Product[]>([]);
    const router = useRouter();

    const auth = useSelector((reduxState: AppState) => reduxState.auth);

    useEffect(() => {

        fetchProducts();
    }, []);

    async function fetchProducts() {

        try {

            if(!auth?.isAuthenticated){
                router.push("/login");
                return;
            }

            const headers = {Authorization: `Bearer ${auth.accessToken}`};
            const response = await axios.get<Product[]>(baseUrl, {headers});
            console.log(response);
            setProducts(response.data);


        } catch (errorResponse) {
            console.log(errorResponse);
        }
    }

    async function handleDelete(product: Product){

        try {
            
            if(!auth?.isAuthenticated){
                return;
            }

            const headers = {Authorization: `Bearer ${auth.accessToken}`};
            const url = baseUrl + "/" + product.id;
            await axios.delete(url, {headers});
            //await fetchProducts();
            //copy of products
            const copy_of_products = [...products];
            const index = copy_of_products.findIndex(item => item.id === product.id);
            if(index !== -1){
                copy_of_products.splice(index, 1);
                setProducts(copy_of_products);
            }
        

            alert("Deleted product with id: " + product.id);

        } catch  {
            alert("Failed to delete product with id: " + product.id);
        }

    }

    function handleEdit(product: Product){
        
        router.push("/products/" + product.id);

    }

    return (
        <div>
            <h4>List Products</h4>
            <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                {products.map((product) => {

                    return (
                        <div key={product.id} className={classes.product}>
                            <p>Id: {product.id}</p>
                            <p>{product.name}</p>
                            <p>{product.description}</p>
                            <p>Price: {product.price}</p>

                            <button className="btn btn-warning" onClick={() => { handleDelete(product)}}>Delete</button>&nbsp;
                            <button className="btn btn-primary" onClick={() => handleEdit(product)}>Edit</button>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}