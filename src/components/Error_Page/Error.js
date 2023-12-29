import React from "react";
import { useRouteError } from "react-router-dom"

const Error=()=>{
const err=useRouteError()
const {status,statusText}=useRouteError()
    return(
        <><h2>Oops Erro</h2><h2>{err.status+" : "+err.statusText}</h2></>
        
    )
}
export default Error