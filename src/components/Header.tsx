"use client";
import useAuth from '@/context/useAuth';
import Link from 'next/link';
import React from 'react';
import Logo from './Logo';

const menuItems = [
    {
        name: 'Home',
        href: '/',
    },
    {

        name: 'About',
        href: '#',
    },
    {
        name: 'Contact',
        href: '#',
    },
];

export default function Header() {
    const { authStatus } = useAuth()
}