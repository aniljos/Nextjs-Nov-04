'use client'

import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Product } from "@/model/Product";
//import classes from './page.module.css';
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { AppState } from "@/state/redux/store";
import ProductView from "@/components/ProductView";


const baseUrl = "http://localhost:9000/products";
//const baseUrl = "http://localhost:9000/secure_products";




export default function ListProducts() {

    
    const [products, setProducts] = useState<Product[]>([]);
    const [isMessageVisible, setMessageVisible] = useState(false);

    const router = useRouter();

    const auth = useSelector((reduxState: AppState) => reduxState.auth);

    useEffect(() => {

        fetchProducts();
    }, []);

    async function fetchProducts() {

        try {

            // if(!auth?.isAuthenticated){
            //     router.push("/login");
            //     return;
            // }

            const headers = {Authorization: `Bearer ${auth.accessToken}`};
            const response = await axios.get<Product[]>(baseUrl, {headers});
            console.log(response);
            setProducts(response.data);


        } catch (errorResponse) {
            console.log(errorResponse);
        }
    }

    const handleDelete = useCallback( async (product: Product) => {

        try {
            
            // if(!auth?.isAuthenticated){
            //     return;
            // }

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

    }, [products])

    const handleEdit = useCallback( (product: Product)=>{
        
        router.push("/products/" + product.id);

    }, [])

    const totalPrice = useMemo( () => {

        console.log("calculateTotalPrice...");
        let totalPrice = 0;
        products.forEach((product) => {
            if(product.price)
                totalPrice += product.price;
        })
        return totalPrice;

    }, [products]);

    return (
        <div>
            <h4>List Products</h4>

            {isMessageVisible ? <div className="alert alert-info">Totel Price: {totalPrice}</div> : null}
            <br/>
            <button className="btn btn-info" onClick={() => setMessageVisible(p => !p)}> {isMessageVisible? "Hide": "Show"}  </button>

            <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                {products.map((product) => {

                    return (
                        <ProductView key={product.id} product={product} onDelete={handleDelete} onEdit={handleEdit}/>
                    )
                })}
            </div>

        </div>
    )
}