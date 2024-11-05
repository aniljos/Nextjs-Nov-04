'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "@/model/Product";
import classes from './page.module.css';


const baseUrl = "http://localhost:9000/products";

export default function ListProducts() {

    const [products, setProducts] = useState<Product[]>([]);

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
                        </div>
                    )
                })}
            </div>

        </div>
    )
}