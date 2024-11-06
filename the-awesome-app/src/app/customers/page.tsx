import { Customer } from "@/model/Customer";


export default async function ListCustomers(){


    await new Promise(resolve => setTimeout(resolve, 7000));
    
    const url = "http://localhost:9000/customers";
    const response = await fetch(url);
    const customers = await response.json() as Customer[];
    console.log("customers ", customers) ;

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
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.location}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}