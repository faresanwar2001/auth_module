import Signin from "@/app/signin/page";
import NextAuth from "next-auth"
import CredentialsProvider  from "next-auth/providers/credentials"
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";
import { pages } from "next/dist/build/templates/app-page";


export const Options= {
    pages:{
        signIn:'/login'

    }, 
    providers:[
      
        GitHubProvider({
            clientId: process.env.GITHUB_ID_CLIENT as string,
            clientSecret: process.env.GITHUB_ID_SECRET as string
          }),
          GoogleProvider({
            clientId: process.env.GOOGLE_ID_CLIENT as string,
            clientSecret: process.env.GOOGLE_ID_SECRET as string
          }),
        CredentialsProvider({
            async authorize(credentials, req){
                const res = await fetch(
          "https://exam.elevateegy.com/api/v1/auth/signin",
          {
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
          }
        );
        const user = await res.json();

        if (user?.user?.email === credentials?.email) return user;
        
          

                

            },
            credentials: {
                email:{
                    type:"email",
                    label:"email",
                    placeholder:"example@example.com",
                },
                password:{
                    type:"password",
                    label:"password",
                }
            }
        })
    ]
}
 const handler = NextAuth(Options)
export{handler as GET , handler as POST}