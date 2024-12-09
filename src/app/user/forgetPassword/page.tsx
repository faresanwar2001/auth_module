"use client";
import Image from "next/image";
import Link from "next/link";
import Signin from "../login/page";
import { useFormik } from "formik";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast';


export default function forgetPassword() {
    const router = useRouter()

    function handleForgetPassword(value){
        axios.post(`https://exam.elevateegy.com/api/v1/auth/forgotPassword`,value)
        .then((response) => {
            if(response.data.message === "success"){
                toast.success("Check your email for the reset password link.")
                router.push("/user/resetCode")

            }
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    let formik = useFormik({
        initialValues: {
          email: '',
        },onSubmit:handleForgetPassword
       
      })
  return (
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
        <h3 style={{fontWeight:"700",fontSize:"24.78px",textAlign:"start"}}>Forget Your Password ?</h3>
        
        <input type="email" placeholder="Enter Email"
        style={{ border:"1px solid rgba(224, 224, 233, 1)"}}
        className="gap-[2.79] w-[410px] rounded-[9.91px] p-[11.98px] h-[55.5px]"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        
        
        />
        <button style={{backgroundColor:"rgba(68, 97, 242, 1)"}} 
        className="rounded-[20px] p-[8px] w-[410px] h-[56px] text-[16px] text-white" type="submit">Sign in</button>
        </form>
        </div>
      </div>
    </div>
  );
}
