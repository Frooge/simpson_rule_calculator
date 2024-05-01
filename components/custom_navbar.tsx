"use client"

import Link from "next/link";

export default function CustomNavbar () {
  return (
    <nav className=" flex flex-row justify-between items-center w-full p-4 bg-secondary backdrop-blur-sm bg-opacity-50  top-0 sticky  shadow-sm cursor-pointer">
        <h1 className="text-md text-white">
          GROUP 2
        </h1>
        <ul className="flex flex-row space-x-8 text-white">
          <Link href={'/'}>Calculator</Link>
          <Link href={'/guides'}>Guides</Link>
          <Link href={'/'}>Solutions</Link>
          <Link href={'/'}>Members</Link>
        </ul>
      <div className="px-4 py-2  bg-dark_green text-white">Explore</div>
    </nav>
  );
}