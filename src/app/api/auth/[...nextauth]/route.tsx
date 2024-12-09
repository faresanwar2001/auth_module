import Signin from "@/app/user/login/page";
import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider  from "next-auth/providers/credentials"
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";


export const OPTIONS:NextAuthOptions = {
    pages:{
        signIn:'/login',
        newUser:'/register',

    }, 
    session: {
      strategy: "jwt", 
    },
    callbacks: {
      async jwt({ token, user }) {
      
        if (user) {
          token.email = user.email;
          token.password = user.name;
        }
        return token;
      },
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
            name: "Credentials",
            credentials: {
              email: {
                label: "Email",
                placeholder: "Enter your email",
                type: "text",
              },
              password: {
                label: "Password",
                placeholder: "Enter your password",
                type: "password",
              },
            },
            async authorize(credentials) {
              const res = await fetch("https://exam.elevateegy.com/api/v1/auth/signin", {
  
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: credentials?.email,
                  password: credentials?.password,
                }),
              });
        const user = await res.json();

        if (user && user.user?.email === credentials?.email) {
          
          return {
            email: user.user?.email,
            password: user.user?.password,
            
          };
        } else {
          
          return null;
        }

            },
    
        })
    ]
}
const handler = NextAuth(OPTIONS);
export{handler as GET , handler as POST}