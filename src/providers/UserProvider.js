import React, {useState, useEffect,  createContext} from "react";
import { auth } from "../services/Firebase"
export const UserContext = createContext({user: null})

export default (props) => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user){
                const { displayName, email }  = user;
                setUser({
                    displayName,
                    email
                })
            }
        })
    },[])

    return (
        <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
    )
}
