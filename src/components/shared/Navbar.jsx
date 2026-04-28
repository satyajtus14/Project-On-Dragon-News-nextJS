"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import userAvatar from "@/assets/user.png";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session,isPending } = authClient.useSession();
  const user = session?.user;
  console.log(session);

  return (
    <div className="flex justify-between container mx-auto">
      <div></div>
      <ul className="flex justify-between items-center gap-4 text-gray-700">
        <li className="font-semibold text-lg">
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li className="font-semibold text-lg">
          <NavLink href={"/about-us"}>About</NavLink>
        </li>
        <li className="font-semibold text-lg">
          <NavLink href={"/career"}>Career</NavLink>
        </li>
      </ul>

      {isPending ? (<span className="loading loading-dots loading-sm"></span> ) : (user ? (
        <div className="flex items-center gap-2">
          <h3>
            <small>Hello, {user?.name}</small>
          </h3>
          <Image
            src={user?.image || userAvatar}
            width={60}
            height={60}
            alt="Navbar user icon"
            className="rounded-full"
          />
          <button className="btn bg-gray-700 text-white" onClick={async ()=> await authClient.signOut()}>
            <Link href={"/logout"}>Logout </Link>{" "}
          </button>
        </div>
      ) : (
        <button className="btn bg-gray-700 text-white">
          <Link href={"/login"}>Login</Link>
        </button>
      ))} 
    </div>
  );
};

export default Navbar;
