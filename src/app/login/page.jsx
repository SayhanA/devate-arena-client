'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import Input from '@/components/atoms/Input';
import Button from '@/components/atoms/Button';
import { useState } from 'react';
import { login } from '@/api/authAPIs';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(4, { message: 'Password must be at least 4 characters' }),
});

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [serverError, setServerError] = useState('');

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data) => {
    try {
      setServerError('');
      const res = await login({ data, dispatch });

      if (res?.status === 200 || res?.status === 201) {
        router.push('/');
      } else {
        setServerError(res?.message || 'Login failed. Please try again.');
      }
    } catch (err) {
      const msg = err?.response?.data?.message || 'An unexpected error occurred.';
      setServerError(msg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md bg-background p-6 rounded-xl shadow-md shadow-shadow border border-border">
        <h2 className="text-2xl font-bold mb-6 text-text-dark">Login to Debate Arena</h2>

        {serverError && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{serverError}</div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            name="email"
            label="Email"
            type="email"
            control={control}
            placeholder="Enter your email"
            autoFocus
            required
            error={errors.email?.message}
          />

          <Input
            name="password"
            label="Password"
            type="password"
            control={control}
            placeholder="Enter your password"
            required
            error={errors.password?.message}
          />

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </Button>
        </form>

        <p className="text-sm text-text-lite mt-4 text-center">
          Don't have an account?
          <Link href="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
