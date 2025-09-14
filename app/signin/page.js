"use client";

import React, { useEffect } from "react";
import { FaGithub, FaGoogle, FaFacebook, FaInstagram } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect if user is already logged in
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard"); // home page
    }
  }, [status, router]);

  // Show nothing while loading session
  if (status === "loading") {
    return <p className="text-center mt-20 text-white">Loading...</p>;
  }

  return (
    <div>
      <h2 className="text-center font-extrabold mt-12 text-2xl">
        Welcome to SignUp Page
      </h2>
      <div className="flex flex-col items-center justify-center mt-10 gap-y-4">
        <button
          onClick={() => signIn("github")}
          className="flex items-center justify-center gap-3 w-64 py-2 rounded-lg border hover:shadow-md transition cursor-pointer"
        >
          <FaGithub className="text-xl" />
          Sign up with GitHub
        </button>
        <button className="flex items-center justify-center gap-3 w-64 py-2 rounded-lg border hover:shadow-md transition cursor-pointer">
          <FaGoogle className="text-red-500 text-xl" />
          Sign up with Google
        </button>
        <button className="flex items-center justify-center gap-3 w-64 py-2 rounded-lg border hover:shadow-md transition cursor-pointer">
          <FaFacebook className="text-blue-600 text-xl" />
          Sign up with Facebook
        </button>
        <button className="flex items-center justify-center gap-3 w-64 py-2 rounded-lg border hover:shadow-md transition cursor-pointer">
          <FaInstagram className="text-pink-500 text-xl" />
          Sign up with Instagram
        </button>
      </div>
    </div>
  );
};

export default SignIn;
