"use client";
import appwriteService from "@/appwrite/config";
import { Models } from "appwrite";
import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";

const ProfileCard = () => {
     const [user, setuser] = useState<Models.User<Models.Preferences> | null>
     (null);

     useEffect(() =>{
        (async () => {
            const userData = await appwriteService.
            getCurrentUser()
            if (userData) {
                setuser(userData)
            }
        })()
     })
}

export default ProfileCard;