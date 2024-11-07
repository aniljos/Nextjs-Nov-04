import { Customer } from "@/model/Customer";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Next React Customers",
    
  };

export default async function ListCustomers(){

    await new Promise(resolve => setTimeout(resolve, 3000));

    return (
        <div>
            <h4>Customers</h4>
            <p>This demonstates suspense and streaming</p>

            <Suspense fallback={<div className="alert alert-warning">Loading ViewCustomers loading...</div>}>
                <ViewCustomers interval={7000}/>
            </Suspense>

            <Suspense fallback={<div className="alert alert-warning">Loading ViewCustomers loading...</div>}>
                <ViewCustomers interval={10000}/>
            </Suspense>
        </div>
    )
    
}

type ViewCustomersProps = {
    interval: number
}

export async function ViewCustomers(props: ViewCustomersProps){

    //await new Promise(resolve => setTimeout(resolve, props.interval));
    
    const url = "http://localhost:9000/customers";
    const response = await fetch(url, {cache: 'no-store'});
    const customers = await response.json() as Customer[];
    console.log("customers ", customers);

    return (
        <div>
            <h4>List Customers</h4>

            <table className="table">
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Name</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td><Link href={`/customers/${item.id}`}>{item.name}</Link></td>
                                <td>{item.location}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}