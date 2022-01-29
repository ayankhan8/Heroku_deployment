import React, { useState} from 'react';
import "@fontsource/andada-pro";
import { withRouter } from 'react-router-dom';

export const Input = ({addDepa}) => {

    const heading = {
        fontSize : "40px",
        paddingTop  : "30px",
        paddingBottom  : "50px",
        fontWeight  : "bold",
        fontFamily  : "Andada Pro",
        backgroundColor : "black",
        color : "gold",
    };

    const [Dn, setDn] = useState("");
    const [Du, setDu] = useState("");
    const [Dd, setDd] = useState("");

    const submit = (e) =>{
        e.preventDefault();
        if (!Dn || !Du || !Dd) {
            alert("Title or Description cannot be blank");
        }
        addDepa(Dn,Du,Dd);
        alert("Department Added");
    }

    return (
        <>
        <pre style={heading}>           Input Details</pre>
        <div className="container">
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="Dname" className="form-label" style={{color : "gold", fontSize : "25px", fontVariant : "bold", backgroundColor : "black"}}>Enter Department Name</label>
                    <input style={{color : "brown", fontSize : "25px", fontVariant : "bold", backgroundColor : "beige"}}type="text" value = {Dn} onChange={(e) => setDn(e.target.value)} className="form-control" id="Dname" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Durl" className="form-label" style={{color : "gold", fontSize : "25px", fontVariant : "bold", backgroundColor : "black"}}>Enter Image Url</label>
                    <input style={{color : "brown", fontSize : "25px", fontVariant : "bold", backgroundColor : "beige"}}type="text" value = {Du} onChange={(e) => setDu(e.target.value)} className="form-control" id="Durl" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Ddesc" className="form-label" style={{color : "gold", fontSize : "25px", fontVariant : "bold", backgroundColor : "black"}}>Enter Department Description</label>
                    <input style={{color : "brown", fontSize : "25px", fontVariant : "bold", backgroundColor : "beige"}}type="text" value = {Dd} onChange={(e) => setDd(e.target.value)} className="form-control" id="Ddesc" aria-describedby="emailHelp"/>
                </div>
                
                <button type="submit" className="btn btn-outline-success" style={{color : "gold", fontSize : "25px", fontVariant : "bold", backgroundColor : "black"}}>Add Department</button>
            </form>
        </div>
        </>
    )
}
export default  withRouter(Input);