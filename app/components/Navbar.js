"use client";
import React, {useState} from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'

const navLinks = [
    {
        title: "About",
        href: "/",
    },
    {
        title: "Projects",
        href: "#projects",
    },
    {
        title: "Contact",
        href: "#contact",
    },
]

function Navbar() 
{
    const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className='fixed top-0 left-0 w-full z-10 bg-white/60'>
        <div className='flex container lg:py-4 flex-wrap items-center justify-end mx-auto px-4 py-1'>
            <div className='menu md:block md:w-auto' id='navbar'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                 {
                    navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.href} title={link.title} />
                        </li>
                    ))
                 }
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar