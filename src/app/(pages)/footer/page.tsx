"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Footer from "@/components/Footer";
const FooterPage = () => {
    const router = useRouter();

    return (
        <section className='px-4 py-10 sm:px-6 sm:py-16
        lg:px-8 lg:py-24'>
            <Footer />
        </section>
    )
}

export default FooterPage;