"use client"

import { useState } from "react"

const leaderboardData = [
  {
    id: "1",
    username: "DebateMaster2024",
    avatar: "/placeholder.svg?height=40&width=40",
    totalVotes: 1247,
    debatesParticipated: 45,
    winRate: 68,
    rank: 1,
    badge: "Champion",
  },
  {
    id: "2",
    username: "LogicWarrior",
    avatar: "/placeholder.svg?height=40&width=40",
    totalVotes: 1156,
    debatesParticipated: 52,
    winRate: 65,
    rank: 2,
    badge: "Expert",
  },
  {
    id: "3",
    username: "ArgumentAce",
    avatar: "/placeholder.svg?height=40&width=40",
    totalVotes: 1089,
    debatesParticipated: 38,
    winRate: 71,
    rank: 3,
    badge: "Expert",
  },
  {
    id: "4",
    username: "ReasonRebel",
    avatar: "/placeholder.svg?height=40&width=40",
    totalVotes: 987,
    debatesParticipated: 41,
    winRate: 59,
    rank: 4,
    badge: "Advanced",
  },
  {
    id: "5",
    username: "ThoughtLeader",
    avatar: "/placeholder.svg?height=40&width=40",
    totalVotes: 923,
    debatesParticipated: 33,
    winRate: 73,
    rank: 5,
    badge: "Advanced",
  },
]

const timeFilters = [
  { value: "all-time", label: "All Time" },
  { value: "monthly", label: "This Month" },
  { value: "weekly", label: "This Week" },
]

export default function ScoreboardPage() {
  const [selectedFilter, setSelectedFilter] = useState("all-time")

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return (
          <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        )
      case 2:
        return (
          <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 15.39l-3.76 2.27.99-4.28-3.32-2.88 4.38-.38L12 6.09l1.71 4.03 4.38.38-3.32 2.88.99 4.28z" />
          </svg>
        )
      case 3:
        return (
          <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        )
      default:
        return <span className="w-6 h-6 flex items-center justify-center text-lg font-bold text-gray-500">#{rank}</span>
    }
  }

  const getBadgeColor = (badge) => {
    switch (badge) {
      case "Champion":
        return "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white"
      case "Expert":
        return "bg-gradient-to-r from-purple-500 to-purple-700 text-white"
      case "Advanced":
        return "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  return (
    <div className="min-h-screen bg-background text-text-lite py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-text-dark mb-4">🏆 Community Scoreboard</h1>
          <p className="text-xl text-text-lite">
            Top debaters ranked by community votes and participation
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-background rounded-lg p-1 shadow-sm border border-border">
            {timeFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setSelectedFilter(filter.value)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  selectedFilter === filter.value
                    ? "bg-blue-600 text-white"
                    : "text-text-lite hover:text-text-dark"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {leaderboardData.slice(0, 3).map((user, index) => (
            <div
              key={user.id}
              className={`bg-background rounded-lg shadow-sm border border-border text-center p-6 ${
                index === 0 ? "md:order-2 transform md:scale-110" : index === 1 ? "md:order-1" : "md:order-3"
              }`}
            >
              <div className="flex justify-center mb-4">{getRankIcon(user.rank)}</div>
              <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-text-dark">{user.username[0]}</span>
              </div>
              <h3 className="text-lg font-semibold text-text-dark mb-2">{user.username}</h3>
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getBadgeColor(user.badge)}`}
              >
                {user.badge}
              </span>
              <div className="grid grid-cols-1 gap-3 text-sm mt-4">
                <div className="flex justify-between">
                  <span className="text-text-lite">Total Votes:</span>
                  <span className="font-semibold text-text-dark">
                    {user.totalVotes.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-lite">Debates:</span>
                  <span className="font-semibold text-text-dark">{user.debatesParticipated}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-lite">Win Rate:</span>
                  <span className="font-semibold text-green-600">{user.winRate}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full Leaderboard */}
        <div className="bg-background rounded-lg shadow-sm border border-border">
          <div className="p-6 border-b border-border">
            <h2 className="text-xl font-semibold text-text-dark flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              Full Leaderboard
            </h2>
            <p className="text-text-lite mt-1">Complete ranking of all community debaters</p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {leaderboardData.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-card-bg transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10">{getRankIcon(user.rank)}</div>
                    <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold text-text-dark">{user.username[0]}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-dark">{user.username}</h3>
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor(user.badge)}`}
                      >
                        {user.badge}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-8 text-sm">
                    <div className="text-center">
                      <div className="flex items-center gap-1 text-text-lite">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                          />
                        </svg>
                        <span>Votes</span>
                      </div>
                      <div className="font-semibold text-text-dark">
                        {user.totalVotes.toLocaleString()}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center gap-1 text-text-lite">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                        <span>Debates</span>
                      </div>
                      <div className="font-semibold text-text-dark">{user.debatesParticipated}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center gap-1 text-text-lite">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        <span>Win Rate</span>
                      </div>
                      <div className="font-semibold text-green-600">{user.winRate}%</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-background rounded-lg shadow-sm border border-border p-6 text-center">
            <svg className="w-12 h-12 text-yellow-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <h3 className="text-2xl font-bold text-text-dark">1,247</h3>
            <p className="text-text-lite">Highest Vote Count</p>
          </div>
          <div className="bg-background rounded-lg shadow-sm border border-border p-6 text-center">
            <svg className="w-12 h-12 text-blue-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <h3 className="text-2xl font-bold text-text-dark">52</h3>
            <p className="text-text-lite">Most Debates Joined</p>
          </div>
          <div className="bg-background rounded-lg shadow-sm border border-border p-6 text-center">
            <svg className="w-12 h-12 text-purple-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <h3 className="text-2xl font-bold text-text-dark">73%</h3>
            <p className="text-text-lite">Highest Win Rate</p>
          </div>
        </div>
      </div>
    </div>
  )
}
