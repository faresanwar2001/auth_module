'use client'

import { useFormik } from "formik"
import { signIn } from "next-auth/react"

import Link from "next/link"
import { useState,FormEvent } from "react"






export default function Signin(){
   const [email,setEmail] = useState("")
   const [password,setPassword] = useState("")

   

  let handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    signIn("credentials", {
      email: email,
      password: password,
      callbackUrl: "/",
    });
}


    return<>
    <div className=" flex flex-col gap-8 justify-center items-center h-full ">
    <form onSubmit={handleSubmit} className="  w-[35%] flex flex-col gap-6 ">
        <h3 style={{fontWeight:"700",fontSize:"24.78px",textAlign:"start"}}>Sign In</h3>
        
        <input type="email" placeholder="Enter Email"
        style={{ border:"1px solid rgba(224, 224, 233, 1)"}}
        className="gap-[2.79] w-[410px] rounded-[9.91px] p-[11.98px] h-[55.5px]"
        name="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        
        
        />
        <input type="password" placeholder="password"
        style={{border:"1px solid rgba(224, 224, 233, 1)"}}
        className="gap-[2.79] w-[410px] rounded-[9.91px] p-[11.98px] h-[55.5px]"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        
        <p className="text-end"><Link href={"/forgetPassword"} className="text-[#4461F2]">Forget Your Password ?</Link></p>
        <button style={{backgroundColor:"rgba(68, 97, 242, 1)"}} 
        className="rounded-[20px] p-[8px] w-[410px] h-[56px] text-[16px] text-white" type="submit">Sign in</button>
    </form>

    </div>
    </>
}