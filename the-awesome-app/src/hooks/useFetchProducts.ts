import { Product } from "@/model/Product";
import axios from "axios";
import { useEffect, useState } from "react";

export function useFetchProducts(url: string){

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchProducts();
    }, [])

    async function fetchProducts() {

        try {

            const response = await axios.get<Product[]>(url, );
            setProducts(response.data);


        } catch (errorResponse) {
            console.log(errorResponse);
        }
    }

    return {products, setProducts};

}