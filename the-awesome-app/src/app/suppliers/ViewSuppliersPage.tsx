import { Supplier } from "@/model/Supplier";

type ViewSuppliersPageProps = {
    query: string
}

export default async function ViewSuppliersPage(props: ViewSuppliersPageProps){

    //const url = "http://localhost:3001/api/suppliers";
    const url = `http://localhost:3001/api/suppliers?query=${props.query}`;
    
    const response = await fetch(url, { cache: 'no-store' });
    const suppliers = await response.json() as Supplier[];

    return (
        <div>
             <table className="table">
                <thead>
                    <tr>
                        <th>Supplier ID</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Contact Person</th>
                    </tr>
                </thead>
                <tbody>
                    {suppliers.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.location}</td>
                                <td>{item.contactPerson}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )

}