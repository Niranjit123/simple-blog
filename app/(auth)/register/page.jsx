'use client'
import Header from "@/components/common/Header";
import Footer from "@/components/common/footer";
import { useState } from "react";
import useAuth from "@/hooks/useAuth";


export default function Register(){

    const {register} = useAuth()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError ] = useState('')
    
    const handleSubmit = (e)=>{
        e.preventDefault()

           if(!name || !email || !password){
            setError('All fields are required')
            return
           }

        try{
             register(email, password, name)
        } catch(err){
            setError(err.message || 'Registration failed')
        }

    }

    return(
        <div>

              <Header/>

            {error && <p>There is error : {error}</p> }

              <form onSubmit={handleSubmit} >

              <div className="flex my-5 flex-col px-10 border-4 py-5">

                <label htmlFor="name">Name:</label>
                <input onChange={(e)=>setName(e.target.value)} value={name} type="text" id="name" placeholder="enter your name" />
                

                <label htmlFor="email">Email</label>
                <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" id="email" name="email" placeholder="write email" />
                 
                <label htmlFor="password">Password</label>
                <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" id="password" name="password" required />

               
              </div>

              <button type="submit" className="bg-blue-300 rounded px-3 py-2  ">Register</button>
              </form>
              <Footer/>

        </div>
    )

}