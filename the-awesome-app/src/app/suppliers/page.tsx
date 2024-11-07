
import Link from "next/link";
import SupplierSearchPage from "./SupplierSearchPage";


//http://localhost:3000/suppliers
export default async function SupplierPage() {

    return (

        
        <div>

            <Link href={"suppliers/add"}>Add Supplier</Link>
            <br />
            <SupplierSearchPage/>
        </div>

    )


}