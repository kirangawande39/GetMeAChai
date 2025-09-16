"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

const handleLogout = async () => {
  await signOut({ redirect: false });
  router.push("http://localhost:3000");   // yaha aap khud redirect control kar rahe ho
};


  const username=session?.user?.name?.replace(/\s+/g, ""); 

  return (
    <nav className="bg-gray-900 text-white flex justify-between items-center px-5 h-[8vh] relative">
      <div className="logo">
        <h2 className="font-bold text-lg md:text-xl">GetMeAChai</h2>
      </div>

      <div className="hidden md:flex items-center gap-4">
        {session ? (
          <>
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-blue-900 px-3 rounded-sm w-fit cursor-pointer flex items-center gap-1 py-1"
              >
                Welcome {username} <span className="text-lg">&#9660;</span>
              </button>

              {isOpen && (
                <div className="absolute right-0 mt-2 bg-slate-200 rounded-lg text-black w-40 z-50 shadow-lg">
                  <div className="flex flex-col p-2 gap-y-1">
                    <Link href="/dashboard" className="hover:bg-white px-2 rounded-sm">
                      Dashboard
                    </Link>
                    <Link href={`/profile/${username}`} className="hover:bg-white px-2 rounded-sm">
                      Your Page
                    </Link>
                  </div>
                  <hr />
                  <div className="p-2">
                    <button
                      onClick={handleLogout}
                      className="hover:bg-white px-2 rounded-sm w-full text-left"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={handleLogout}
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-1.5 text-center cursor-pointer"
            >
              Sign Out
            </button>
          </>
        ) : (
          <Link
            href="/signin"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-1.5 text-center cursor-pointer"
          >
            Sign In
          </Link>
        )}
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
          &#9776;
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-[8vh] right-0 w-auto mt-2 rounded-lg bg-gray-800 text-white flex flex-col p-4 gap-2 md:hidden z-50 transition-all duration-300">
          {session ? (
            <div className="flex flex-col gap-2">
              <Link href="/dashboard" className="hover:bg-gray-700 px-2 py-1 rounded">
                Dashboard
              </Link>
              <Link href={`/profile/${username}`} className="hover:bg-gray-700 px-2 py-1 rounded">
                Your Page
              </Link>
              <button
                onClick={handleLogout}
                className="hover:bg-gray-700 px-2 py-1 rounded text-left"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link href="/signin" className="hover:bg-gray-700   px-2 py-1 rounded text-center">
              Sign In
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
