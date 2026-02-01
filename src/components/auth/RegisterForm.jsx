"use client";

import { postUser } from "@/actions/server/auth";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import SocialButton from "./SocialButton";
import { signIn } from "next-auth/react";

export default function RegisterForm() {
    const params = useSearchParams();
    const callbackUrl = params.get("callbackUrl") || "/";
    const router = useRouter();
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    })
    const [loading, setLoading] = useState(false);

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const result = await postUser(form);

            if (result?.acknowledged) {
                // router.push("/login");
                const result = await signIn("credentials", {
                    email: form.email,
                    password: form.password,
                    redirect: false,
                    callbackUrl: callbackUrl,
                });
                if(result.ok){
                    alert("Registration successful. Please login.");
                    router.push(callbackUrl);
                }
                
            } else {
                alert("Registration failed");
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong");
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="card w-full max-w-md bg-base-100 shadow-xl">
                <div className="card-body">
                    {/* Title */}
                    <h2 className="text-2xl font-bold text-center mb-2">
                        Create an account
                    </h2>

                    <p className="text-sm text-center text-gray-500 mb-6">
                        Join us and start your learning journey.
                    </p>

                    {/* Register Form */}
                    <form onSubmit={(handleChange, handleSubmit)} className="space-y-4">
                        <div>
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Create a password"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <button className="btn btn-primary w-full">
                            Register
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="divider">OR</div>

                    {/* Google Register */}
                    <SocialButton></SocialButton>

                    {/* Login Link */}
                    <p className="text-sm text-center mt-4">
                        Already have an account?{" "}
                        <Link href="/login" className="link link-primary">
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
