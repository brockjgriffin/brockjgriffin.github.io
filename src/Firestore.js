import { collection, doc, getDocs, onSnapshot } from 'firebase/firestore'
import React from 'react'
import { AuthContextProvider } from './AuthContext'
import { UserAuth } from './AuthContext'
import { auth } from 'firebase/auth'
function Firestore() {
    const collectionRef = collection(db, 'users')

    
    const { currentUser } = UserAuth()
    const [users, setUsers] = useState()
    const currentUserId = currentUser ? currentUser.uid : null

    useEffect(() => {
        const getUsers = async () => {
            const querySnapshot = await getDocs(dbRef)
            const items = []

            querySnapshot.forEach((doc) => {
                items.push(doc.data())
            })
            setUsers(items)
        }

        try {
            getUsers();
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        const g = query(

        )

        const unsub = onSnapshot(collectionRef, (querySnapshot) => {
            const items = []
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
            })
            setUsers(items)
        });
        return () => {
            unsub();
        }
    })

    async function addUser() {
        
        const owner = currentUser ? auth.currentUser.uid : 'unknown';
        const ownerEmail = currentUser ? currentUser.email : 'unknown'

        const newUser = {
            owner,
            ownerEmail
        }

        try {
            const userRef = doc(collectionRef, newUser.uid)
            await setDoc(userRef, newUser)
        } catch (error) {
            console.error(error)
        }
        
    }




  return ( 
    <h1></h1>
  )
}

export default Firestore