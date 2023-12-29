import { createContext } from "react";

const UserContext=createContext({
    user:{
        name:"Harsh",
        email:"Harsh@1209"
    }
})

export default UserContext