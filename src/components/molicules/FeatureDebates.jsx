import React from "react";
import { DebateCard } from "../atoms/DebateCard";
import Link from "next/link";
import dummyImg from '@/assets/images/vs.avif'


const FeatureDebates = () => {
  const featuredDebates = [
    {
      id: "1",
      title: "Should AI replace human customer service?",
      description:
        "Exploring the pros and cons of AI automation in customer support",
      category: "Technology",
      tags: ["AI", "automation", "jobs"],
      supportCount: 45,
      opposeCount: 32,
      totalVotes: 156,
      timeLeft: "2h 15m",
      participants: 77,
      image: dummyImg,
    },
    {
      id: "2",
      title: "Remote work is more productive than office work",
      description:
        "Debating the effectiveness of remote vs traditional office environments",
      category: "Work & Career",
      tags: ["remote", "productivity", "workplace"],
      supportCount: 67,
      opposeCount: 23,
      totalVotes: 203,
      timeLeft: "5h 42m",
      participants: 90,
      image: dummyImg,
    },
    {
      id: "3",
      title: "Social media does more harm than good",
      description:
        "Examining the impact of social platforms on society and mental health",
      category: "Society",
      tags: ["social-media", "mental-health", "society"],
      supportCount: 89,
      opposeCount: 56,
      totalVotes: 287,
      timeLeft: "1h 8m",
      participants: 145,
      image: dummyImg,
    },
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Trending Debates
          </h2>
          <Link
            href="/debates"
            className="px-4 py-2 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredDebates.map((debate) => (
            <DebateCard key={debate.id} debate={debate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureDebates;
