"use client";
import appwriteService from "@/appwrite/config";
import useAuth from "@/context/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import router from "next/router";
import React, {FormEvent, useState} from "react";

const Login = () => {
    const router = useRouter()
    const {setAuthStatus} = useAuth()
    const [formData, setFormData] = useState({
        email:"",
        password:"",
    })
    const [error, setError] = useState("")

    const login = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const session = await appwriteService.login
            (formData);
            if (session) {
                setAuthStatus(true)
                router.push("/profile")
            }
        } catch (error: any) {
            setError(error.message)
        }
    }
}

export default Login;