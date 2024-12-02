'use client'
import toast from 'react-hot-toast';

import axios from "axios"
import { useRouter } from "next/navigation";
import { useFormik } from "formik"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import * as yup from "yup"
import Signin from "../signin/page"





export default function Register() {

  const [error ,setApiError]= useState(null)
  const [dataApi,setDataApi] = useState(null)
  let router = useRouter()
  

  function handleRegister(value){
     axios.post(`https://exam.elevateegy.com/api/v1/auth/signup`, value)    
     .then(response => {
        console.log(response)
        if(response?.data?.message ==="success"){
          toast.success(response?.data?.message)
          localStorage.setItem("tokenUser",response?.data?.token)
          setDataApi(response?.data?.token)
          router.push("/login")
        }
      })
     .catch(error => {
        console.log(error)
        toast.error(error.message)
        setApiError(error?.response?.data?.message)
      })

  }


  let validationSchema= yup.object().shape({
    username: yup.string().required("Username is required").max(25,"user name must be at least 25 characters").min(5,"user name must be at least 5 characters"),
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    phone: yup.string().required("Phone Number is required").matches(/^01[0125][0-9]{8}/),
    email: yup.string().email().required("Email is required"),
    password:yup.string().required("Password is required"),
    rePassword:yup.string().required("Password is required").oneOf([yup.ref("password")],"rePassword is not matched password")

  })

  let formik = useFormik({
    initialValues: {
      username:"",
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      rePassword: "",
    },validationSchema,
    onSubmit: handleRegister
    
  })
  

    return <>
      <div className="login grid grid-cols-3 gap-8 space-y-10 h-screen">
      <div className="welcome-elevate flex h-full flex-col justify-center bg-[#F0F4FC] col-span-1 py-8 px-8 shadow-lg rounded-tr-[100px] rounded-br-[100px]">
        <h1 className="text-5xl font-semibold leading-tight">
          Welcome to{" "}
          <span className="block text-[#122D9C] leading-loose">Elevate</span>
        </h1>
        <p className="text-lg font-normal">
          Quidem autem voluptatibus qui quaerat aspernatur architecto natus
        </p>
        <Image width={308} height={308} src="/bro.png" alt="elevate" />
      </div>
      <div className="form col-span-2 px-10">
        <div className="links flex gap-6 justify-end">
          <Link
            href=""
            className="text-black text-[20px] font-medium cursor-pointer"
          >
            <select name="" id="">
            <option value="English">English</option>
            </select>
           
          </Link>
          <Link
            href="/login"
            className="px-4 font-bold text-[#4461F2] rounded-xl cursor-pointer"
          >
            Sign in
          </Link>
          <Link
            href="/register"
            className="border px-4 font-light text-[#4461F2] rounded-2xl cursor-pointer"
          >
            Register
          </Link>
        </div>
        <div className=" flex flex-col gap-8 justify-center items-center h-full ">
    <form onSubmit={formik.handleSubmit} className="  w-[35%] flex flex-col gap-6 ">
      {error?  <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            {error }
            </div>:null}
        <h3 style={{fontWeight:"700",fontSize:"24.78px",textAlign:"start"}}>Sign Up</h3>

        <input type="username" placeholder="Enter username"
        style={{ border:"1px solid rgba(224, 224, 233, 1)"}}
        className="gap-[2.79] w-[410px] rounded-[9.91px] p-[11.98px] h-[55.5px]"
        name="username"
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}/>
        {formik.errors.username&& formik.touched.username?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            {formik.errors.username }
            </div>:null}
       

        <input type="firstName" placeholder="Enter firstName"
        style={{ border:"1px solid rgba(224, 224, 233, 1)"}}
        className="gap-[2.79] w-[410px] rounded-[9.91px] p-[11.98px] h-[55.5px]"
        name="firstName"
        value={formik.values.firstName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}/>
        {formik.errors.firstName&& formik.touched.firstName?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            {formik.errors.firstName }
            </div>:null}

        <input type="lastName" placeholder="Enter lastName"
        style={{ border:"1px solid rgba(224, 224, 233, 1)"}}
        className="gap-[2.79] w-[410px] rounded-[9.91px] p-[11.98px] h-[55.5px]"
        name="lastName"
        value={formik.values.lastName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}/>
        {formik.errors.lastName&& formik.touched.lastName?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            {formik.errors.lastName }
            </div>:null}
        
        <input type="email" placeholder="Enter Email"
        style={{ border:"1px solid rgba(224, 224, 233, 1)"}}
        className="gap-[2.79] w-[410px] rounded-[9.91px] p-[11.98px] h-[55.5px]"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        
        />
        {formik.errors.email&& formik.touched.email?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            {formik.errors.email }
            </div>:null}
        <input type="phone" placeholder="Enter phone"
        style={{ border:"1px solid rgba(224, 224, 233, 1)"}}
        className="gap-[2.79] w-[410px] rounded-[9.91px] p-[11.98px] h-[55.5px]"
        name="phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />
        {formik.errors.phone&& formik.touched.phone?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            {formik.errors.phone }
            </div>:null}

        <input type="password" placeholder="Enter password"
        style={{ border:"1px solid rgba(224, 224, 233, 1)"}}
        className="gap-[2.79] w-[410px] rounded-[9.91px] p-[11.98px] h-[55.5px]"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />
        {formik.errors.password&& formik.touched.password?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            {formik.errors.password }
            </div>:null}

        <input type="Password" placeholder="rePassword"
        style={{border:"1px solid rgba(224, 224, 233, 1)"}}
        className="gap-[2.79] w-[410px] rounded-[9.91px] p-[11.98px] h-[55.5px]"
        name="rePassword"
        value={formik.values.rePassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />
        {formik.errors.rePassword&& formik.touched.rePassword?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            {formik.errors.rePassword }
            </div>:null}
        
        <p className="text-center"><Link href={"/login"}>Already have an Account?<span className="mx-1 text-blue-600">Login</span> </Link></p>
        <button style={{backgroundColor:"rgba(68, 97, 242, 1)"}} 
        className="rounded-[20px] p-[8px] w-[410px] h-[56px] text-[16px] text-white" type="submit">Create Account</button>
    </form>

    </div>
      </div>
    </div>
    </>
      
    
  }