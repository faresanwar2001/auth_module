'use client'
import Link from "next/link"



export default function Navbar(){


    return<>
    <nav className=" p-5 ">
        <ul className="flex gap-8 justify-center ">
            <li><Link className="font-bold text-xl" href={"/"}>Home</Link></li>
            <li><Link className="font-bold text-xl"href={"/login"}>Login</Link></li>
            <li><Link className="font-bold text-xl" href={"/register"}>Register</Link></li>
            <li><Link className="font-bold text-xl" href={"/logout"}>Log out</Link></li>
        </ul>
    </nav>
    </>
}