'use client'
import { createContext } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useRouter } from "next/navigation";
import { useContext } from "react";


const AuthContext = createContext()

export default function AuthProvider({children}){

    const [user, setUser] = useLocalStorage("user", null)
    const router = useRouter()

    const login = async(email, passsword)=>{
      try {
        await new Promise(resolve=>setTimeout(resolve, 500))
        setUser({email, name: email.split('@')[0]})
        router.push('./')
        return true
      } catch (error) {
        console.error(error)
        throw new error ('Login Failed')
      }
    }

    const register = async(email, passsword, name)=>{
        try {
          await new Promise(resolve=>setTimeout(resolve, 500))
          setUser({email, name})
          router.push('/')
          return true
        } catch (error) {
          console.error(error)
          throw new error ('registration Failed')
        }
      }


      const logOut = ()=>{
        setUser(null)
        router.push('./login')
      }


          

    return (
        <AuthContext.Provider value={{user, login, register, logOut, register, isAuthenticated: !!user}} >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);