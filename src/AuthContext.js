import { createContext, useEffect, useState, useContext } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import { auth, db } from './config'



const UserContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [ user, setUser ] = useState({})
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser)
        })

        return () => {
            unsubscribe()
        }
    })

    useEffect(() => {
        const collection = {setUser}
    })

    

    return (
        <UserContext.Provider value={{ createUser, user, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}

