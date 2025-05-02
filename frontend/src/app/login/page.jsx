'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await fetch('http://localhost:5000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      const role = data.role;


      if (res.ok) {
        setMessage('Login successful! Redirecting...');
        setIsSuccess(true);
        if(role=="admin"){
          setTimeout(() => {
            router.push('/dashboard');
            console.log("hhhh");
            
          }, 2000);

        }else{
        setTimeout(() => {
          router.push('/activities');
        }, 2000); }// wait 2 seconds then redirect
      } 
      
      else {
        setMessage(`Error: ${data.message || 'Unknown error'}`);
        setIsSuccess(false);
      }
      

    } catch (error) {
      console.error('Error:', error);
      setMessage('Something went wrong.');
      setIsSuccess(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#9F7FFF] to-[#8055FE] px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-[#8055FE] mb-6">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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

          {/* Message */}
          {message && (
            <p className={`text-center text-sm ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-[#8055FE] text-white py-2 rounded-lg hover:bg-[#6b46c1] transition-colors"
          >
            Log In
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link href="/signup" className="text-[#8055FE] font-medium">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
