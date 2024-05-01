"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomNavbar () {
  const pathname = usePathname();
  const navLinks = [
    {name: 'Calculator', href:'/'},
    {name: 'Guides', href:'/guides'},
    {name: 'Solutions', href:'/solutions'},
    {name: 'Members', href:'/members'},
  ]

  return (
    <nav className=" flex flex-row justify-between items-center w-full p-4 bg-secondary backdrop-blur-sm bg-opacity-50  top-0 sticky  shadow-sm cursor-pointer">
        <h1 className="text-md text-white">
          GROUP 2
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
      <div className="px-4 py-2  bg-dark_green text-white">Explore</div>
    </nav>
  );
}