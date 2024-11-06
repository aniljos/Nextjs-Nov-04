'use client'
import { Product } from '@/model/Product';
import { AppDispatch } from '@/state/redux/store';
import React from 'react';
import { useDispatch } from 'react-redux';
import {addToCart as addToReduxCart} from '@/state/redux/gadgetsReducer';
import { CartItem } from '@/model/CartItem';
import { useTitle } from '@/hooks/useTitle';
import { useFetchProducts } from '@/hooks/useFetchProducts';


const baseUrl = "http://localhost:9000/products";
function GadgetStore(){

    //const [products, setProducts] = useState<Product[]>([]);
    const dispatch = useDispatch<AppDispatch>();
    useTitle("Gadgets");
    const {products} = useFetchProducts(baseUrl);
    
    // useEffect(() => {

    //     fetchProducts();

    // }, [])

    // async function fetchProducts(){

    //     try {  
    //         const resp = await axios.get<Product[]>(baseUrl);
    //         setProducts(resp.data);
    //         console.log("resp:", resp);

    //     } catch (error) {
    //         console.log("error:", error);
    //     }

    // }
    
    

    function addToCart(product: Product): void {
        const action = addToReduxCart(new CartItem(product, 1));
        //console.log("action", action);
        dispatch(action);
    }

    function renderProducts() {

        const productsView =  products.map((item) => {
           

            return (
                <div className="col" key={item.id} >
                    <div className="card border-warning" >
                        <div className="card-body text-success">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text text-primary">INR {item.price}</p>
                            <button className="btn btn-primary" onClick={() => addToCart(item)}>Add To Cart</button>
                        </div>
                    </div>
    
                </div>
            );
        })
        return (
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {productsView}
            </div>
        )
    }


    return (
        <div>
            <h1>Gadget Store</h1>

            <div>
                {renderProducts()}
            </div>
        </div>

    );
}

export default GadgetStore;