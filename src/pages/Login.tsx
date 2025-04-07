import React from "react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#1E8376] to-[#1E3A8A] px-4 py-10">
      {/* Logo e título */}
      <div className="flex flex-col items-center mb-10 text-white">
        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
          <span className="text-3xl">🦋</span>
        </div>
        <h1 className="text-4xl font-bold mt-4">GBIF</h1>
        <p className="text-center text-sm font-light">Global Biodiversity<br />Information Facility</p>
      </div>

      {/* Card de login */}
      <div className="bg-[#0F172A] text-white p-8 rounded-2xl w-full max-w-sm shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-600 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm mb-1">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-600 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-md bg-green-500 hover:bg-green-600 transition text-white font-semibold"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-300">
          Don’t have an account?{' '}
          <button
            onClick={() => router.push("Registro")}
            className="text-blue-400 hover:underline"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}