'use client';

import { useState } from 'react';
import Link from 'next/link';
export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', form);
    // TODO: Send login data to your backend
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#9F7FFF] to-[#8055FE] px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-[#8055FE] mb-6">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9F7FFF]"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9F7FFF]"
            required
          />

          <Link href="/activities">
            <button
              type="submit"
              className="w-full bg-[#8055FE] text-white py-2 rounded-lg hover:bg-[#6b46c1] transition-colors"
            >
              Log In
            </button>
          </Link>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="/signup" className="text-[#8055FE] font-medium">Sign up</a>
        </p>
      </div>
    </div>
  );
}
