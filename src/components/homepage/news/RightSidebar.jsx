"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";


const RightSidebar = () => {
    const handleGoogleLogin = async() => {
    const data = await authClient.signIn.social({
    provider: "google",
  });
  console.log(data,"Google Login");
    }
    return (
        <div className='container mx-auto'>
            <h2 className='font-bold text-lg text-left'>Login with</h2>
            <div className='flex flex-col gap-2'>

            <button className='btn border-blue-500 text-blue-500'onClick={handleGoogleLogin}><FaGoogle /> Login with google</button>
            <button className='btn border-slate-500 text-black'><FaGithub /> Login with github</button>
            </div>
           
            <h2 className='font-bold text-lg my-5 mt-5 text-left'>Finds Us on</h2>
            <div >
                <ul className='flex flex-col items-start mt-8 ' >
                    <li className='flex items-center gap-3 text-slate-500 font-semibold border-2 border-zinc-400 rounded-lg p-3 w-full'> <FaFacebookF /> Facebook</li>
                    <li className='flex items-center gap-3 text-slate-500 font-semibold border-2 border-zinc-400 rounded-lg p-3 w-full'> <FaTwitter />Twitter</li>
                    <li className='flex items-center gap-3 text-slate-500 font-semibold border-2 border-zinc-400 rounded-lg p-3 w-full'><FaInstagram /> Instagram</li>
                </ul>
            </div>
           
        </div>
    );
};

export default RightSidebar;