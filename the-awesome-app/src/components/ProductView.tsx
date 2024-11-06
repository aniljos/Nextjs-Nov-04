import { Product } from "@/model/Product";
import classes from '@/app/products/page.module.css';
import React from "react";

type ProductViewProps = {
    
    product: Product,
    onDelete: (product: Product) => void,
    onEdit: (product: Product) => void,
}

function ProductView(props: ProductViewProps) {

    console.log("rendering ProductView ", props.product.name);

    const {product, onDelete, onEdit} = props;

    return (
        <div key={product.id} className={classes.product}>
            <p>Id: {product.id}</p>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>

            <button className="btn btn-warning" 
                    onClick={() => onDelete(product)}>Delete</button>&nbsp;
            <button className="btn btn-primary" 
                    onClick={() => onEdit(product)}>Edit</button>
        </div>
    )
}

export default React.memo(ProductView);