'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameRegex = /^[A-Za-z]+$/;
    const passwordRegex = /^[A-Za-z0-9]+$/;

    if (!nameRegex.test(form.firstName) || !nameRegex.test(form.lastName)) {
      setMessage('First Name and Last Name should contain only alphabetic characters.');
      setIsSuccess(false);
      return;
    }

    if (!passwordRegex.test(form.password) || form.password.length < 8) {
      setMessage('Password must be alphanumeric and at least 8 characters long.');
      setIsSuccess(false);
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      const data = await res.text(); // backend sends plain text

      if (res.ok) {
        setMessage('Account created successfully! Redirecting...');
        setIsSuccess(true);
        setTimeout(() => {
          router.push('/login');
        }, 2000); // wait 2 seconds then navigate
      } else {
        setMessage(`Error: ${data}`);
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
        <h2 className="text-3xl font-bold text-center text-[#8055FE] mb-6">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9F7FFF]"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9F7FFF]"
            required
          />
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
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/login" className="text-[#8055FE] font-medium">Log in</Link>
        </p>
      </div>
    </div>
  );
}
