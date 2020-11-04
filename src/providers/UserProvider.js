import React, {useState, useEffect,  createContext} from "react";
import { auth } from "../services/Firebase"
import * as axios from "axios";

export const UserContext = createContext({user: null})

export default (props) => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user){
                user.getIdToken(true).then(token=>
                axios.get('http://localhost:3000/users',
                    {
                        headers: {
                            'Content-Type': 'application/json; charset=utf-8',
                            'Authorization': 'Bearer ' + token
                        }
                    }).then(res=>{
                    const { displayName, email,userData=res.data.userData}  = user;
                    setUser({
                        displayName,
                        email,
                        userData
                    })
                }).catch(err=>{
                    console.log(err)
                })
                )}
        })
    },[])

    return (
        <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
    )
}
