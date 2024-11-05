'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "@/model/Product";
import classes from './page.module.css';
import { useRouter } from "next/navigation";


const baseUrl = "http://localhost:9000/products";

export default function ListProducts() {

    const [products, setProducts] = useState<Product[]>([]);
    const router = useRouter();

    useEffect(() => {

        fetchProducts();
    }, []);

    async function fetchProducts() {

        try {

            const response = await axios.get<Product[]>(baseUrl);
            console.log(response);
            setProducts(response.data);


        } catch (errorResponse) {
            console.log(errorResponse);
        }
    }

    async function handleDelete(product: Product){

        try {
            
            const url = baseUrl + "/" + product.id;
            await axios.delete(url);
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