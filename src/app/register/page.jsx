'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import Input from '@/components/atoms/Input';
import Button from '@/components/atoms/Button';
import { useDispatch } from 'react-redux';
import { register } from '@/api/authAPIs';
import { useRouter } from 'next/navigation';

const loginSchema = z.object({
  name: z.string().min(1, { message: 'User name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

export default function RegisterPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
    },
  });

  const onSubmit = async (data) => {
    try {
      const res = await register({ data, dispatch });

      if (res.status === 200 || res.status === 201) {
        router.push('/verify');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md bg-background p-6 rounded-xl shadow-md shadow-shadow border border-border">
        <h2 className="text-2xl font-bold mb-6 text-text-dark">Register to Debate Arena</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            name="name"
            label="Name"
            type="text"
            control={control}
            placeholder="Enter your name"
            error={errors.name?.message}
            required
            autoFocus
          />

          <Input
            name="email"
            label="Email"
            type="email"
            control={control}
            placeholder="Enter your email"
            error={errors.email?.message}
            required
          />

          <Input
            name="password"
            label="Password"
            type="password"
            control={control}
            placeholder="Enter your password"
            error={errors.password?.message}
            required
          />

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
          >
            Sign Up
          </Button>
        </form>

        <p className="text-sm text-text-lite mt-4 text-center">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
