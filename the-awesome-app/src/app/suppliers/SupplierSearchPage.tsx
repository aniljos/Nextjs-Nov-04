'use client'

import { Suspense, useState } from "react"
import ViewSuppliersPage from "./ViewSuppliersPage";

export default function SupplierSearchPage(){

    const [searchKey, setSearchKey] = useState("");

    return (
        <div>
            <input type="search" className="form-control" placeholder="Search" value={searchKey} onChange={e => setSearchKey(e.target.value)}/>

            <br/>

            {searchKey? <div className="alert alert-info">Searching for {searchKey}</div> : null}

            <Suspense fallback={<div className="alert alert-info">Loading Suppliers</div>}>
                <ViewSuppliersPage query={searchKey}/>
            </Suspense>
            
        </div>
    )
}