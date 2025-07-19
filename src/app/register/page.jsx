'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (form.username && form.email && form.password) {
      localStorage.setItem('mockUser', JSON.stringify({ email: form.email, username: form.username }));
      router.push('/dashboard');
    } else {
      setError('All fields are required');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleRegister} className="bg-white p-8 rounded shadow w-80 space-y-4">
        <h2 className="text-xl font-bold">Register</h2>
        <input name="username" placeholder="Username" value={form.username} onChange={handleChange} className="border p-2 w-full" required />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} className="border p-2 w-full" required />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} className="border p-2 w-full" required />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button className="bg-green-600 text-white px-4 py-2 w-full">Register</button>
      </form>
    </div>
  );
}
