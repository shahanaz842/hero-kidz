import React from 'react';
import { FaGoogle } from 'react-icons/fa';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          {/* Title */}
          <h2 className="text-2xl font-bold text-center mb-2">
            Login to your account
          </h2>

          <p className="text-sm text-center text-gray-500 mb-6">
            Welcome back! Please login to continue.
          </p>

          {/* Login Form */}
          <form className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
            </div>

            <button className="btn btn-primary w-full">
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Google Login */}
          <button className="btn btn-primary btn-outline w-full flex gap-2">
            <FaGoogle />
            Continue with Google
          </button>

          {/* Register Link */}
          <p className="text-sm text-center mt-4">
            New to the site?{" "}
            <a href="/register" className="link link-primary">
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}