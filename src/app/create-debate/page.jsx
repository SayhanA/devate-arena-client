'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().min(10, 'Description is required'),
  tags: z.string().optional(),
  category: z.string().min(1, 'Please select a category'),
  duration: z.enum(['1h', '12h', '24h']),
  image: z.any().optional(),
});

export default function CreateDebatePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      tags: '',
      category: '',
      duration: '1h',
    },
  });

  const onSubmit = (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (key === 'image' && value?.[0]) {
        formData.append(key, value[0]);
      } else {
        formData.append(key, value);
      }
    });

    console.log([...formData.entries()]); // Will send this later via axios
  };

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-text-dark)' }}>
      <div className="max-w-2xl mx-auto p-6 rounded-xl shadow" style={{ backgroundColor: 'var(--color-card-bg)', boxShadow: '0 4px 12px var(--color-shadow)' }}>
        <h1 className="text-2xl font-semibold mb-4">Create New Debate</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Title */}
          <div>
            <input
              type="text"
              placeholder="Debate Title"
              {...register('title')}
              className="w-full p-3 rounded border"
              style={{
                backgroundColor: 'var(--color-bg-secondary)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-text-dark)',
              }}
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
          </div>

          {/* Description */}
          <div>
            <textarea
              rows="4"
              placeholder="Description"
              {...register('description')}
              className="w-full p-3 rounded border"
              style={{
                backgroundColor: 'var(--color-bg-secondary)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-text-dark)',
              }}
            />
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
          </div>

          {/* Tags */}
          <div>
            <input
              type="text"
              placeholder="Tags (comma-separated)"
              {...register('tags')}
              className="w-full p-3 rounded border"
              style={{
                backgroundColor: 'var(--color-bg-secondary)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-text-dark)',
              }}
            />
          </div>

          {/* Category */}
          <div>
            <select
              {...register('category')}
              className="w-full p-3 rounded border"
              style={{
                backgroundColor: 'var(--color-bg-secondary)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-text-dark)',
              }}
            >
              <option value="">Select Category</option>
              <option value="tech">Tech</option>
              <option value="ethics">Ethics</option>
              <option value="politics">Politics</option>
              <option value="science">Science</option>
            </select>
            {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
          </div>

          {/* Image */}
          <div>
            <input
              type="file"
              accept="image/*"
              {...register('image')}
              className="w-full p-3 rounded border"
              style={{
                backgroundColor: 'var(--color-bg-secondary)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-text-lite)',
              }}
            />
          </div>

          {/* Duration */}
          <div>
            <select
              {...register('duration')}
              className="w-full p-3 rounded border"
              style={{
                backgroundColor: 'var(--color-bg-secondary)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-text-dark)',
              }}
            >
              <option value="1h">1 Hour</option>
              <option value="12h">12 Hours</option>
              <option value="24h">24 Hours</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 px-6 rounded text-white font-medium"
            style={{ backgroundColor: 'var(--color-icon)' }}
          >
            Create Debate
          </button>
        </form>
      </div>
    </div>
  );
}
