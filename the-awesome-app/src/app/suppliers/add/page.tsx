'use client'

import { useFormState } from "react-dom";
import { handleSupplierSubmit } from "@/actions/actions";

export default function AddSupplierPage(){

    const [state, formAction] =  useFormState(handleSupplierSubmit, {status: -1, message: ""});

    return (
        <div>
            <h4>Add Supplier</h4>

            <form action={formAction}>

                <div className="alert alert-info">
                    {state.status + ": " + state.message }
                </div>
                
                <div className="form-group">
                    <label htmlFor="id">ID</label>
                    <input id="id" name="id" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input id="location" name="location" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="contactPerson">Contact</label>
                    <input id="contactPerson" name="contactPerson" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" className="form-control" />
                </div>
                <br />
                <div>
                    <button className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    )
}