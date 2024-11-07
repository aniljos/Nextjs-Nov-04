import { Customer } from "@/model/Customer";

type CustomerViewPageProps = {

    params: {id: number}
}

export default async function CustomerViewPage(props: CustomerViewPageProps){

    const url = "http://localhost:9000/customers";
    const response = await fetch(url, {cache: 'no-store'});
    const customers = await response.json() as Customer[];

    const customer = customers.find(item => item.id.toString() === props.params.id.toString());

    if(customer){
        return (
            
            <div>
                <p>Customer Id: {customer.id}</p>
                <p>Name: {customer.name}</p>
                <p>Location: {customer.location}</p>
            </div>
        )
    }
    else{
        return (
            <div>Customer Not Found...</div>
        )
    }
}