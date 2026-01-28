"use client"
import Link from 'next/link';
import React from 'react';
import { MdError } from "react-icons/md";

const error = () => {
    return (
        <div className='flex flex-col min-h-screen justify-center 
        items-center gap-5'>
            <MdError size={100} className='text-primary animate-bounce 
            duration-1000'></MdError>
            <h2 className='text-4xl font-bold'>Something Went Wrong!</h2>
            <Link href={"/"} className='btn'>Go to Home</Link>
        </div>
    );
};

export default error;