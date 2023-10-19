"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const success = () => {
    toast.success("success");
  };

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed", error.message);
      toast.error(error.mess);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="h-[1000px] flex items-center justify-center">
      <div className="border rounded-3xl flex flex-col items-center justify-center h-[450px] w-[400px] py-2">
        <h1 className="mb-7 text-xl">{loading ? "Processing" : "Signup"}</h1>
        <hr />
        <label htmlFor="username">username</label>
        <input
          className="text-black p-2 border border-gray-300 rounded-lg focus:border-gray-600 mb-4"
          id="username"
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="username"
        />
        <label htmlFor="email">email</label>
        <input
          className="text-black p-2 border border-gray-300 rounded-lg focus:border-gray-600 mb-4"
          id="email"
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email"
        />
        <label htmlFor="password">password</label>
        <input
          className="text-black p-2 border border-gray-300 rounded-lg focus:border-gray-600 mb-4"
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
        />
        <button
          onClick={onSignup}
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 hover:border-gray-800"
        >
          {buttonDisabled ? "No Signup" : "Signup"}
        </button>
        <Link href="/login">Visit login page</Link>
      </div>
    </div>
  );
}
