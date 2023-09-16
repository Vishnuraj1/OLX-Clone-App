import { createContext,useState } from "react";

export const UserContext = createContext([])

function UserDetails ({children}){
    const [UserDetails,setUserDetails]= useState()


    return(
        <UserContext.Provider value={{UserDetails,setUserDetails}}>
            {children}
        </UserContext.Provider>

     
    )
}

export default UserDetails