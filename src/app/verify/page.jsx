'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import Input from '@/components/atoms/Input';
import Button from '@/components/atoms/Button';
import api from '@/api/config/axiosInstance';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const verifySchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  token: z.string().min(4, { message: 'Token must be at least 4 characters' }),
});

export default function VerifyPage() {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(verifySchema),
    defaultValues: {
      email: '',
      token: '',
    },
  });

  const [serverError, setServerError] = useState('');
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      setServerError('');
      const res = await api.post('/auth/verify', data);

      if (res.status === 200 || res.status === 201) {
        // ✅ Client-side redirect
        router.push('/login');
      } else {
        setServerError('Verification failed. Please try again.');
      }
    } catch (error) {
      const message = error?.response?.data?.message || 'An unexpected error occurred';
      setServerError(message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md bg-background p-6 rounded-xl shadow-md shadow-shadow border border-border">
        <h2 className="text-2xl font-bold mb-6 text-text-dark">Verify Your Account</h2>

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
            name="token"
            label="Token"
            type="text"
            control={control}
            placeholder="Enter your verification token"
            required
            error={errors.token?.message}
          />

          {serverError && <p className="text-red-600 text-sm font-medium">{serverError}</p>}

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Verifying...' : 'Verify'}
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
