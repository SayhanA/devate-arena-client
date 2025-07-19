'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import Input from '@/components/atoms/Input';
import Button from '@/components/atoms/Button';

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

export default function LoginPage() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Login Data:', data);
    // Trigger login API later
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md bg-background p-6 rounded-xl shadow-md shadow-shadow border border-border">
        <h2 className="text-2xl font-bold mb-6 text-text-dark">Login to Debate Arena</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            name="email"
            label="Email"
            type="email"
            control={control}
            placeholder="Enter your email"
            autoFocus
            required
          />

          <Input
            name="password"
            label="Password"
            type="password"
            control={control}
            placeholder="Enter your password"
            required
          />

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
          >
            Login
          </Button>
        </form>

        <p className="text-sm text-text-lite mt-4 text-center">
          Don't have an account?{' '}
          <Link href="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
