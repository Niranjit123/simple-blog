import { useState } from "react"
import { useRouter } from "next/navigation"

export default function useAuth(){

    const router = useRouter()

    const [user, setUser] = useState(null)

    const  login = async(email, password)=>{
        setUser({email, name: 'Demo User'})
        router.push('/')
    }

    const logOut = () =>{
         setUser(null)
         router.push('/login')
    }

   const register = async(email, password, name)=> {
        setUser({email, name}  )
        router.push('./')
    }


    return {user, login, register, logOut }
}