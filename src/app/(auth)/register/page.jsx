"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";




const RegisterPage = () => {

 const [isShowPassword,setIsShowPassword] = useState(false);
    
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const handleRegisterFn = async (data) => {
    const { name, photoURL, email, password } = data;
    console.log(data);

    const { data: res, error } = await authClient.signUp.email(
      {
        name: name, // required
        image: photoURL,
        email: email, // required
        password: password, // required
      },
      {
        /* Call back function for form after clicking "submit" button */
        onSuccess: () => {
          router.push("/");
        },
      },
    );
    console.log(res, error);
    if (error) {
      alert(error.message);
    }

    if (res) {
      alert("Sign up Successful");
    }
  };
  console.log(errors, "Errors");

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-zinc-200">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-6">
          Register with your account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFn)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Your Name</legend>
            <input
              type="text"
              className="input"
              // name="email"
              placeholder="Type your Name"
              {...register("name", { required: "Name field is required" })}
            />
            {errors.name && (
              <p className="text-red-500 font-semibold">
                {errors.name.message}
              </p>
            )}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              type="text"
              className="input"
              // name="email"
              placeholder="Type your photo URL"
              {...register("photoURL", {
                required: "Photo URL field is required",
              })}
            />
            {errors.photoURL && (
              <p className="text-red-500 font-semibold">
                {errors.photoURL.message}
              </p>
            )}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input"
              // name="email"
              placeholder="Type your email"
              {...register("email", { required: "Email field is required" })}
            />
            {errors.email && (
              <p className="text-red-500 font-semibold">
                {errors.email.message}
              </p>
            )}
          </fieldset>

          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <input
              type={isShowPassword ? "text" : "password"}
              className="input"
              // name="password"
              placeholder="Type your password"
              {...register("password", {
                required: "Password field is required",
              })}
            />

                 <span className="absolute left-70 top-4 cursor-pointer" onClick={() => setIsShowPassword(!isShowPassword)}>
                        {isShowPassword ? <FaEye /> : <FaEyeSlash /> }
                       </span>

            {errors.password && (
              <p className="text-red-500 font-semibold">
                {errors.password.message}
              </p>
            )}
          </fieldset>

          <button className="btn w-full bg-slate-800 text-white">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
