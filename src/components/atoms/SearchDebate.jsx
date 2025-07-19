'use client';

import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';
import Input from '../atoms/Input'; // adjust path as needed

const categories = [
  'All Categories',
  'Technology',
  'Politics',
  'Society',
  'Work & Career',
  'Environment',
  'Health',
  'Education',
  'Entertainment',
];

const sortOptions = [
  { value: 'newest', label: 'Newest' },
  { value: 'ending-soon', label: 'Ending Soon' },
  { value: 'most-voted', label: 'Most Voted' },
  { value: 'most-participants', label: 'Most Participants' },
];

const popularTags = [
  'AI',
  'remote-work',
  'climate',
  'crypto',
  'social-media',
  'healthcare',
  'education',
];

export function SearchDebates() {
  const { control, reset, watch } = useForm({
    defaultValues: {
      searchQuery: '',
      category: 'All Categories',
      sort: 'newest',
    },
  });

  const [activeTags, setActiveTags] = useState([]);

  const searchQuery = watch('searchQuery');
  const selectedCategory = watch('category');
  const selectedSort = watch('sort');

  const handleTagToggle = (tag) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    reset();
    setActiveTags([]);
  };

  return (
    <div className="bg-[--color-card-bg] text-[--color-text-dark] rounded-lg p-6 shadow-sm border border-[--color-border] space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[--color-icon] h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <Input
          name="searchQuery"
          placeholder="Search debates by title, description, or tags..."
          control={control}
          className="pl-10"
        />
      </div>

      {/* Filters Row */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <select
              {...field}
              className="w-full sm:w-48 px-3 py-2 border border-[--color-border] rounded-lg bg-[--color-background] text-[--color-text-dark]"
            >
              {categories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
          )}
        />

        <Controller
          name="sort"
          control={control}
          render={({ field }) => (
            <select
              {...field}
              className="w-full sm:w-48 px-3 py-2 border border-[--color-border] rounded-lg bg-[--color-background] text-[--color-text-dark]"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
        />

        <button
          onClick={clearFilters}
          className="flex items-center justify-center px-4 py-2 bg-[--color-background] text-[--color-text-dark] border border-[--color-border] rounded-lg hover:bg-[--color-bg-secondary] transition"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z"
            />
          </svg>
          Clear Filters
        </button>
      </div>

      {/* Popular Tags */}
      <div className="space-y-2">
        <p className="text-sm font-medium">Popular Tags:</p>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagToggle(tag)}
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                activeTags.includes(tag)
                  ? 'bg-blue-600 text-white'
                  : 'bg-[--color-bg-secondary] text-[--color-text-dark] hover:bg-blue-100'
              }`}
            >
              {tag}
              {activeTags.includes(tag) && (
                <svg
                  className="w-3 h-3 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Active Filters Display */}
      {(searchQuery ||
        selectedCategory !== 'All Categories' ||
        selectedSort !== 'newest' ||
        activeTags.length > 0) && (
        <div className="flex flex-wrap gap-2 pt-2 border-t border-[--color-border]">
          <span className="text-sm text-[--color-text-lite]">Active filters:</span>
          {searchQuery && (
            <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-[--color-bg-secondary] border border-[--color-border]">
              Search: "{searchQuery}"
            </span>
          )}
          {selectedCategory !== 'All Categories' && (
            <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-[--color-bg-secondary] border border-[--color-border]">
              Category: {selectedCategory}
            </span>
          )}
          {selectedSort !== 'newest' && (
            <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-[--color-bg-secondary] border border-[--color-border]">
              Sort: {sortOptions.find((o) => o.value === selectedSort)?.label}
            </span>
          )}
          {activeTags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-[--color-bg-secondary] border border-[--color-border]"
            >
              Tag: {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
