"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Verification from "@/components/Verification";
const VerificationPage = () => {
    const router = useRouter();

    return (
        <section className='px-4 py-10 sm:px-6 sm:py-16
        lg:px-8 lg:py-24'>
            <Verification />
        </section>
    )
}

export default VerificationPage;