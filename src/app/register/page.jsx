import React from 'react';
import { FaGoogle } from 'react-icons/fa';

export default function RegisterPage() {
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
          <form className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
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
          <button className="btn btn-primary btn-outline w-full flex gap-2">
            <FaGoogle />
            Continue with Google
          </button>

          {/* Login Link */}
          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <a href="/login" className="link link-primary">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}