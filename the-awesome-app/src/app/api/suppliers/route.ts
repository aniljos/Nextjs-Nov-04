import { suppliers } from '@/data/suppliers';
import { NextResponse } from "next/server";


// GET http://localhost:3000/api/suppliers
// GET http://localhost:3000/api/suppliers?query=abc
export function GET(request: Request) {

    const url = new URL(request.url);
    const query = url.searchParams.get("query")?.toString();

    if (query) {

        const results = suppliers.filter(item => item.name.toLowerCase().includes(query)
                                                        || item.contactPerson.toLowerCase().includes(query)
                                                        || item.location.toLowerCase().includes(query));

        return NextResponse.json(results, { status: 200 });

    }
    return NextResponse.json(suppliers, { status: 200 });
}


//POST http://localhost:3000/api/suppliers : body=> supplier

export async function POST(request: Request){
    
    try {
        
        const supplier = await request.json()
        if(!supplier){
            return NextResponse.json({}, {status: 400});
        }
        else{

            suppliers.push(supplier);
            return NextResponse.json(supplier, {status: 200});
        }

    } catch  {
        //return NextResponse.error();
        return NextResponse.json({error: "Error saving..."}, {status: 500});

    }
}


//PUT