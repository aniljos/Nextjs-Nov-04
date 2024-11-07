
import Link from "next/link";
import SupplierSearchPage from "./SupplierSearchPage";

export default async function SupplierPage() {

    

    return (

        
        <div>

            <Link href={"suppliers/add"}>Add Supplier</Link>
            <br />
            <SupplierSearchPage/>
        </div>

    )


}