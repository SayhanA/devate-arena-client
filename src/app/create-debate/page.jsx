'use client';

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Input from '@/components/atoms/Input';
import Button from '@/components/atoms/Button';

const categories = [
  'Technology',
  'Politics',
  'Society',
  'Work & Career',
  'Environment',
  'Health',
  'Education',
  'Entertainment',
];

const tagsList = [
  'AI',
  'Climate',
  'Crypto',
  'Social Media',
  'Healthcare',
  'Education',
  'Politics',
];

const durations = [
  { label: '1 hour', value: 1 },
  { label: '12 hours', value: 12 },
  { label: '24 hours', value: 24 },
];

export default function CreateDebatePage() {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      description: '',
      category: categories[0],
      tags: [],
      duration: 1,
      image: null,
    },
  });

  const tags = watch('tags') || [];

  const onSubmit = (data) => {
    // For now just log and redirect
    console.log('Debate data:', data);
    alert('Debate created successfully!');
    router.push('/debates');
  };

  const toggleTag = (tag) => {
    if (tags.includes(tag)) {
      setValue(
        'tags',
        tags.filter((t) => t !== tag),
        { shouldValidate: true }
      );
    } else {
      setValue('tags', [...tags, tag], { shouldValidate: true });
    }
  };

  return (
    <main className="max-w-3xl mx-auto p-6 bg-background rounded-md shadow-md mt-10 mb-20 text-text-dark">
      <h1 className="text-3xl font-bold mb-6 text-center">Create a New Debate</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-text-lite">
        {/* Title */}
        <Input
          name="title"
          label="Title"
          control={control}
          placeholder="Enter debate title"
          required
          className="w-full"
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}

        {/* Description */}
        <Controller
          name="description"
          control={control}
          rules={{ required: 'Description is required' }}
          render={({ field }) => (
            <div>
              <label
                htmlFor="description"
                className="block mb-1 font-semibold text-[--color-text-dark]"
              >
                Description <span className="text-red-600">*</span>
              </label>
              <textarea
                {...field}
                id="description"
                rows={5}
                placeholder="Enter a detailed description..."
                className="w-full rounded border border-[--color-border] p-3 text-[--color-text-dark] bg-[--color-background] focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
              {errors.description && (
                <p className="text-red-500 text-sm">{errors.description.message}</p>
              )}
            </div>
          )}
        />

        {/* Category */}
        <Controller
          name="category"
          control={control}
          rules={{ required: 'Category is required' }}
          render={({ field }) => (
            <div>
              <label
                htmlFor="category"
                className="block mb-1 font-semibold text-[--color-text-dark]"
              >
                Category <span className="text-red-600">*</span>
              </label>
              <select
                {...field}
                id="category"
                className="w-full p-2 border border-[--color-border] rounded bg-[--color-background] text-[--color-text-dark] focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          )}
        />

        {/* Tags */}
        <div>
          <label className="block mb-2 font-semibold text-[--color-text-dark]">
            Tags (select multiple)
          </label>
          <div className="flex flex-wrap gap-2">
            {tagsList.map((tag) => {
              const isActive = tags.includes(tag);
              return (
                <button
                  type="button"
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'bg-[--color-bg-secondary] text-[--color-text-dark] hover:bg-blue-100'
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

        {/* Duration */}
        <Controller
          name="duration"
          control={control}
          rules={{ required: 'Duration is required' }}
          render={({ field }) => (
            <div>
              <label
                htmlFor="duration"
                className="block mb-1 font-semibold text-[--color-text-dark]"
              >
                Debate Duration <span className="text-red-600">*</span>
              </label>
              <select
                {...field}
                id="duration"
                className="w-full p-2 border border-[--color-border] rounded bg-[--color-background] text-[--color-text-dark] focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {durations.map(({ label, value }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          )}
        />

        {/* Image Banner */}
        <Controller
          name="image"
          control={control}
          render={({ field }) => (
            <div>
              <label
                htmlFor="image"
                className="block mb-1 font-semibold text-[--color-text-dark]"
              >
                Image/Banner (optional)
              </label>
              <input
                type="file"
                accept="image/*"
                id="image"
                onChange={(e) => field.onChange(e.target.files[0])}
                className="w-full text-sm text-[--color-text-dark]"
              />
            </div>
          )}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition"
        >
          Create Debate
        </Button>
      </form>
    </main>
  );
}
