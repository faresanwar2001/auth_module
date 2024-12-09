"use client";
import Image from "next/image";
import Link from "next/link";
import Signin from "../user/login/page";
import axios from "axios";
import LoginForm from "../user/login/page";


export default function signin() {
 
  
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
            href="/user/register"
            className="border px-4 font-light text-[#4461F2] rounded-2xl cursor-pointer"
          >
            Register
          </Link>
        
        </div>
        <LoginForm/>
      </div>
    </div>
  );
}
