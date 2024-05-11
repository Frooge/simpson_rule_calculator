"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomNavbar () {
  const pathname = usePathname();
  const navLinks = [
    {name: 'Calculator', href:'/'},
    {name: 'Guides', href:'/guides'},
    {name: 'Members', href:'/members'},
    // {name: 'Solutions', href:'/solutions'},
  ]

  return (
    <nav className=" flex flex-row justify-between items-center w-full p-4 bg-secondary backdrop-blur-sm bg-opacity-50  top-0 sticky  shadow-sm cursor-pointer z-10">
        <h1 className="text-md text-white">
          GROUP 2 - Simpson&apos;s Rule Caculator
        </h1>
        <ul className="flex flex-row space-x-8 justify-between items-center">
          {
          navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link href={link.href} key={link.name} className={isActive ? "text-primary rounded-full py-2 px-4 bg-secondary transition-all ease-in-out delay-100":"text-white"}>{link.name}</Link>
          ) 
          })}
        </ul>
      <div></div>
    </nav>
  );
}