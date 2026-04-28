"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const {register,
    handleSubmit,
    watch,
    formState: { errors },} = useForm();

    const [isShowPassword,setIsShowPassword] =useState(false);


const handleLoginFn = async(data) => {
 const { email, password } = data;
    console.log(data);

    const { data:res, error } = await authClient.signIn.email({
    email:email , // required
    password: password, // required
    rememberMe: true,
    callbackURL: "/",
});
console.log(res,error);
}
console.log(errors,"Errors");


/* console.log(watch("email"));
console.log(watch("password")); */

/*   const handleLoginFn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const passwd = e.target.password.value;
    console.log(email, passwd);
  };
 */




  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-zinc-200">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-6">
          Login with your account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(handleLoginFn)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input"
              // name="email"
              placeholder="Type your email"
              {...register("email",{ required: "Email field is required" })}
            />
          </fieldset>
         {errors.email && <p className="text-red-500 font-semibold">{errors.email.message}</p>}


          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <input
              type={isShowPassword ? "text" : "password"}
              className="input"
              // name="password"
              placeholder="Type your password"
              {...register("password",{ required: "Password field is required" })}
            />
            <span className="absolute left-70 top-4 cursor-pointer" onClick={() => setIsShowPassword(!isShowPassword)}>
             {isShowPassword ? <FaEye /> : <FaEyeSlash /> }
            </span>

            {errors.password && <p className="text-red-500 font-semibold">{errors.password.message}</p>}

          </fieldset>

  


          <button className="btn w-full bg-slate-800 text-white">Login</button>
        </form>
        <p className=" text-center mt-4">
          Don’t Have An Account ?
          <Link href={"/register"}>
            <span className="text-lg font-bold text-red-500"> Register</span>
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
