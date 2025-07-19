"use client"

import { useState } from "react"
import Image from "next/image"
import DebateCountdown from "@/components/atoms/DebateCountdown"
import { ArgumentCard } from "@/components/atoms/ArgumentCard"
import { JoinDebateModal } from "@/components/atoms/JoinDebateModal"
import { AutoModerationWarning } from "@/components/atoms/AutoModerationWarning"

const debateData = {
  id: "1",
  title: "Should AI replace human customer service?",
  description:
    "Exploring the pros and cons of AI automation in customer support. This debate examines whether artificial intelligence can provide better, more efficient customer service than human representatives, or if the human touch remains irreplaceable in customer interactions.",
  category: "Technology",
  tags: ["AI", "automation", "jobs", "customer-service"],
  author: {
    id: "user1",
    name: "John Doe",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  image: "/placeholder.svg?height=300&width=800",
  createdAt: "2024-01-15T10:00:00Z",
  endsAt: "2024-01-16T10:00:00Z",
  supportCount: 45,
  opposeCount: 32,
  totalVotes: 156,
  participants: 77,
  isActive: true,
  userSide: null,
  userHasJoined: false,
}

const mockArgumentsList = [
  {
    id: "1",
    content:
      "AI customer service can provide 24/7 availability and instant responses, which significantly improves customer satisfaction. Unlike human agents, AI doesn't need breaks and can handle multiple customers simultaneously.",
    author: {
      id: "user2",
      name: "Alice Smith",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    side: "support",
    votes: 23,
    createdAt: "2024-01-15T11:30:00Z",
    canEdit: false,
    userVoted: false,
  },
  {
    id: "2",
    content:
      "Human customer service representatives can understand context, emotions, and complex situations that AI simply cannot grasp. The empathy and problem-solving skills of humans are irreplaceable in customer service.",
    author: {
      id: "user3",
      name: "Bob Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    side: "oppose",
    votes: 18,
    createdAt: "2024-01-15T12:15:00Z",
    canEdit: false,
    userVoted: true,
  },
]

export default function DebatePage({ params }) {
  const [debate, setDebate] = useState(debateData)
  const [argumentsList, setArgumentsList] = useState(mockArgumentsList)
  const [newArgument, setNewArgument] = useState("")
  const [showJoinModal, setShowJoinModal] = useState(false)
  const [showModerationWarning, setShowModerationWarning] = useState(false)
  const [moderationWarning, setModerationWarning] = useState("")

  const bannedWords = ["stupid", "idiot", "dumb", "hate", "kill"]

  const checkForBannedWords = (text) => {
    const lowerText = text.toLowerCase()
    return bannedWords.some((word) => lowerText.includes(word))
  }

  const handleJoinSide = (side) => {
    setDebate((prev) => ({
      ...prev,
      userSide: side,
      userHasJoined: true,
    }))
    setShowJoinModal(false)
  }

  const handleSubmitArgument = () => {
    if (!newArgument.trim()) return

    if (checkForBannedWords(newArgument)) {
      setModerationWarning("Your argument contains inappropriate language. Please revise and try again.")
      setShowModerationWarning(true)
      return
    }

    const argument = {
      id: Date.now().toString(),
      content: newArgument,
      author: {
        id: "current-user",
        name: "Current User",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      side: debate?.userSide,
      votes: 0,
      createdAt: new Date().toISOString(),
      canEdit: true,
      userVoted: false,
    }

    setArgumentsList((prev) => [argument, ...prev])
    setNewArgument("")
  }

  const handleVote = (argumentId) => {
    setArgumentsList((prev) =>
      prev.map((arg) =>
        arg.id === argumentId
          ? { ...arg, votes: arg.userVoted ? arg.votes - 1 : arg.votes + 1, userVoted: !arg.userVoted }
          : arg,
      ),
    )
  }

  const supportArguments = argumentsList.filter((arg) => arg.side === "support")
  const opposeArguments = argumentsList.filter((arg) => arg.side === "oppose")

  const supportPercentage = (debate.supportCount / (debate.supportCount + debate.opposeCount)) * 100
  const opposePercentage = (debate.opposeCount / (debate.supportCount + debate.opposeCount)) * 100

  return (
    <div className="min-h-screen bg-background text-text-lite">
      {/* Header */}
      <div className="relative h-64 bg-gradient-to-r from-blue-600 to-purple-600">
        {debate.image && (
          <Image src={debate.image || "/placeholder.svg"} alt={debate.title} fill className="object-cover opacity-30" />
        )}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-6xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white mb-4">
              {debate.category}
            </span>
            <h1 className="text-4xl font-bold mb-4">{debate.title}</h1>
            <p className="text-lg opacity-90 max-w-3xl">{debate.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="bg-background rounded-lg shadow-sm border border-border">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-text-lite flex items-center gap-2 mb-4">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Time Remaining
                    </h3>
                    <DebateCountdown endTime={debate.endsAt} />
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-text-lite">Created by</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-6 h-6 bg-background rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-text-lite">
                          {debate.author.name[0]}
                        </span>
                      </div>
                      <span className="font-medium text-text-lite">{debate.author.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-background rounded-lg shadow-sm border border-border">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-text-lite flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Debate Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-text-lite">Participants</span>
                    <span className="font-semibold text-text-lite">{debate.participants}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-lite">Total Votes</span>
                    <span className="font-semibold text-text-lite">{debate.totalVotes}</span>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="flex items-center text-green-600">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                          />
                        </svg>
                        Support ({debate.supportCount})
                      </span>
                      <span className="flex items-center text-red-600">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v2a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
                          />
                        </svg>
                        Oppose ({debate.opposeCount})
                      </span>
                    </div>
                    <div className="w-full bg-background rounded-full h-3">
                      <div
                        className="bg-green-600 h-3 rounded-l-full transition-all duration-300"
                        style={{ width: `${supportPercentage}%` }}
                      />
                      <div
                        className="bg-red-600 h-3 rounded-r-full -mt-3 ml-auto transition-all duration-300"
                        style={{ width: `${opposePercentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {debate.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-background text-text-lite border border-border"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Join Debate or Post Argument */}
        {!debate.userHasJoined ? (
          <div className="bg-background rounded-lg shadow-sm border border-border mb-8">
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-text-lite mb-4">Join the Debate</h3>
              <p className="text-text-lite mb-6">
                Choose your side to start participating in this debate
              </p>
              <button
                onClick={() => setShowJoinModal(true)}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
              >
                Choose Your Side
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-background rounded-lg shadow-sm border border-border mb-8">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-text-lite mb-2">
                Post Your Argument - {debate.userSide === "support" ? "Supporting" : "Opposing"}
              </h3>
              <p className="text-text-lite mb-4">
                Share your perspective and contribute to the discussion
              </p>
              <div className="space-y-4">
                <textarea
                  placeholder="Write your argument here..."
                  value={newArgument}
                  onChange={(e) => setNewArgument(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-text-lite placeholder-text-lite/70 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-text-lite">{newArgument.length}/1000 characters</span>
                  <button
                    onClick={handleSubmitArgument}
                    disabled={!newArgument.trim() || !debate.isActive}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-colors duration-200"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                    Post Argument
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Arguments */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Support Arguments */}
          <div>
            <h2 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
              Supporting Arguments ({supportArguments.length})
            </h2>
            <div className="space-y-4">
              {supportArguments.map((argument) => (
                <ArgumentCard
                  key={argument.id}
                  argument={argument}
                  onVote={handleVote}
                  debateActive={debate.isActive}
                />
              ))}
              {supportArguments.length === 0 && (
                <div className="bg-background rounded-lg shadow-sm border border-border p-6 text-center text-text-dark">
                  No supporting arguments yet. Be the first to support this debate!
                </div>
              )}
            </div>
          </div>

          {/* Oppose Arguments */}
          <div>
            <h2 className="text-2xl font-bold text-red-600 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v2a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
                />
              </svg>
              Opposing Arguments ({opposeArguments.length})
            </h2>
            <div className="space-y-4">
              {opposeArguments.map((argument) => (
                <ArgumentCard
                  key={argument.id}
                  argument={argument}
                  onVote={handleVote}
                  debateActive={debate.isActive}
                />
              ))}
              {opposeArguments.length === 0 && (
                <div className="bg-background rounded-lg shadow-sm border border-border p-6 text-center text-text-dark">
                  No opposing arguments yet. Be the first to oppose this debate!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <JoinDebateModal
        isOpen={showJoinModal}
        onClose={() => setShowJoinModal(false)}
        onJoin={handleJoinSide}
        debateTitle={debate.title}
      />

      <AutoModerationWarning
        isOpen={showModerationWarning}
        onClose={() => setShowModerationWarning(false)}
        message={moderationWarning}
      />
    </div>
  )
}
