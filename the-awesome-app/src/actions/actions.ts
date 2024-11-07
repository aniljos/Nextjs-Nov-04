'use server'


//server action
 export async function handleSupplierSubmit(prevState: object, formData: FormData){
    
    const supplier = {
        id: Number(formData.get("id")),
        name: formData.get("name"),
        location: formData.get("location"),
        contactPerson: formData.get("contactPerson"),
        email: formData.get("email"),

    }
    console.log("handleSubmit", supplier);

    // validate the input
    // save the data => database
    //return some status

    if(supplier.id <= 0){
        return {status: 1, message: "Invalid data"}
    }
    else{
        return {status: 0, message: "Success"}
    }

}


export async function sayHello(message : string){
    return "Hello " + message;
}