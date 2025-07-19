'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('mockUser');
    if (!stored) {
      router.push('/login');
    } else {
      setUser(JSON.parse(stored));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('mockUser');
    router.push('/login');
  };

  if (!user) return null;

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold">Welcome, {user.username || user.email}</h1>
      <p>You are now logged in. 🎉</p>
      <button onClick={handleLogout} className="mt-4 px-4 py-2 bg-red-500 text-white">Logout</button>
    </div>
  );
}
