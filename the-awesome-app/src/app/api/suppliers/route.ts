


import { NextResponse } from "next/server";


// GET http://localhost:3000/api/suppliers
export function GET(request: Request){

    return NextResponse.json({message: "Hello Suppliers"}, {status: 200});
}


//POST http://localhost:3000/api/suppliers


//PUT