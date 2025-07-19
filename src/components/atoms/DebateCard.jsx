import Link from "next/link";
import Image from "next/image";
import dummyImg from "@/assets/images/vs.avif";
import { createSlug } from "@/utils/slug";
import TimeSvg from "@/assets/svgs/TimeSvg";
import VoteSvg from "@/assets/svgs/VoteSvg";
import UsersSvg from "@/assets/svgs/UsersSvg";
import ActiveDebatesSvg from "@/assets/svgs/ActiveDebatesSvg";

export function DebateCard({ debate }) {
  const supportPercentage =
    (debate.supportCount / (debate.supportCount + debate.opposeCount)) * 100;
  const opposePercentage =
    (debate.opposeCount / (debate.supportCount + debate.opposeCount)) * 100;

  return (
    <div className="bg-card-bg rounded-lg shadow-sm border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <Image
          src={debate?.image || dummyImg}
          alt={debate.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-border/90 text-text-lite">
            <TimeSvg />
            {debate.timeLeft}
          </span>
        </div>
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-border/90 text-text-lite border border-border">
            {debate.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div>
          <h3 className="text-lg font-semibold text-text-dark mb-2 line-clamp-2">
            {debate.title}
          </h3>
          <p className="text-text-lite text-sm mb-4 line-clamp-2">
            {debate.description}
          </p>
          <div className="flex flex-wrap gap-1 mb-4">
            {debate.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-background text-text-lite"
              >
                {tag}
              </span>
            ))}
          </div>
          {/* Vote Distribution */}
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm text-text-lite">
              <span className="flex items-center">
                <VoteSvg />
                Support ({debate.supportCount})
              </span>
              <span className="flex items-center">
                <VoteSvg className="w-4 h-4 mr-1 text-red-600 rotate-180" />
                Oppose ({debate.opposeCount})
              </span>
            </div>
            <div className="w-full bg-background rounded-full h-2">
              <div
                className="bg-green-600 h-2 rounded-l-full transition-all duration-300"
                style={{ width: `${supportPercentage}%` }}
              />
              <div
                className="bg-red-600 h-2 rounded-r-full -mt-2 ml-auto transition-all duration-300"
                style={{ width: `${opposePercentage}%` }}
              />
            </div>
          </div>
        </div>
        {/* Stats */}
        <>
          <div className="flex justify-between text-sm text-text-lite mb-4">
            <span className="flex items-center">
              <UsersSvg className="w-4 h-4 mr-1 text-text-lite" />
              {debate.participants} participants
            </span>
            <span className="flex items-center">
              <ActiveDebatesSvg className="w-4 h-4 mr-1 text-text-lite" />
              {debate.totalVotes} votes
            </span>
          </div>
          <Link
            href={`/debates/${createSlug(debate.title)}`}
            className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
          >
            Join Debate
          </Link>
        </>
      </div>
    </div>
  );
}
