"use client"
import Link from "next/link";
import React from "react";



const LoginPage = () => {

    const handleLoginFn = (e) => {
       e.preventDefault();

    }

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-zinc-200">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-6">
          Login with your account
        </h2>

        <form className="space-y-4" onSubmit={handleLoginFn}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input"
              placeholder="Type your email"
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              className="input"
              placeholder="Type your password"
            />
          </fieldset>

          <button className="btn w-full bg-slate-800 text-white">Login</button>
        </form>
        <p className=" text-center mt-4">Dont’t Have An Account ? 
            <Link href={"/register"}><span className="text-xl font-bold text-red-500"> Register</span>
            </Link> </p>
      </div>
    </div>
  );
};

export default LoginPage;
