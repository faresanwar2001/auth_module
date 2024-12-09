'use client'
import Image from "next/image"
import google from "../../assets/img/google.png"
import twitter from "../../assets/img/x.png"
import facebook from "../../assets/img/facebook.png"
import iphone from "../../assets/img/iphone.png"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { useState,FormEvent } from "react"
import { useFormik } from "formik";
import * as yup from "yup"


export default function LoginForm(){
  const [tokenUser,setToken]=useState(null)

let submitLogin = async (values :{email:string,password:string})=>{
  console.log(values);
  const data =await signIn("credentials", {
    email:values.email,
    password:values.password,
    callbackUrl: "/",
  });
  
}


let validationSchema= yup.object().shape({
  email: yup.string()
   .email("Invalid email address")
   .required("Email is required"),
  password: yup.string()
  .matches(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,}$/,
    "Password must be at least 8 characters, including uppercase, lowercase, number, and special character.")
   .required("Password is required")
})

let formik = useFormik({
  initialValues: {
    email: '',
    password: '',
  },validationSchema,
  onSubmit: submitLogin
})




    return<>
    <div className=" flex flex-col gap-8 justify-center items-center h-full ">
    <form onSubmit={formik.handleSubmit} className="  w-[35%] flex flex-col gap-6 ">
        <h3 style={{fontWeight:"700",fontSize:"24.78px",textAlign:"start"}}>Sign In</h3>
        
        <input type="email" placeholder="Enter Email"
        style={{ border:"1px solid rgba(224, 224, 233, 1)"}}
        className="gap-[2.79] w-[410px] rounded-[9.91px] p-[11.98px] h-[55.5px]"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        
        
        />
        <input type="password" placeholder="password" name="password"
        style={{border:"1px solid rgba(224, 224, 233, 1)"}}
        className="gap-[2.79] w-[410px] rounded-[9.91px] p-[11.98px] h-[55.5px]"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />
        
        <p className="text-end"><Link href={"/user/forgetPassword"} className="text-[#4461F2]">Forget Your Password ?</Link></p>
        <button style={{backgroundColor:"rgba(68, 97, 242, 1)"}} 
        className="rounded-[20px] p-[8px] w-[410px] h-[56px] text-[16px] text-white" type="submit">Sign in</button>
    </form>

      <h4
       className="continueH text-[#6C737F] "
      >Or Continue with</h4>
    <div className="flex gap-8 justify-center items-center mt-2">
      <Image src={google} alt="Google" className="  rounded-[15.38]    w-[23.57px] h-[23.57px]" />
      <Image src={twitter} alt="Twitter" className=" rounded-[15.38]  w-[23.57px] h-[23.57px]" />
      <Image src={facebook} alt="Facebook" className=" rounded-[15.38]  w-[23.57px] h-[23.57px]" />
      <Image src={iphone} alt="Facebook" className=" rounded-[15.38]  w-[23.57px] h-[23.57px]" />
    </div>

    </div>
    </>
}