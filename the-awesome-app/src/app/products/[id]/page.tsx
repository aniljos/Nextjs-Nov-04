'use client'

import { Product } from "@/model/Product";
import { useParams } from "next/navigation"
import { useState } from "react";

export default function EditProductPage(){

    const params = useParams();

    const [product, setProduct] = useState<Product>(new Product(0, "", 0, ""));

    return (
        <div>
            <h4>Edit Product : {params.id}</h4>

            <form>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input className="form-control" id="name" value={product.name}/>
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input className="form-control" id="price"/>
                </div>

                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input className="form-control" id="desc"/>
                </div>

                <br/>

                <button className="btn btn-primary">Save</button>&nbsp;
                <button className="btn btn-info">Cancel</button>
            </form>
        </div>
    )
}