"use client"
import { formatDistanceToNow } from "date-fns"

export function ArgumentCard({ argument, onVote, debateActive }) {
  const timeAgo = formatDistanceToNow(new Date(argument.createdAt), { addSuffix: true })
  const createdTime = new Date(argument.createdAt)
  const now = new Date()
  const timeDiff = now.getTime() - createdTime.getTime()
  const canEditTime = timeDiff < 5 * 60 * 1000 // 5 minutes in milliseconds

  return (
    <div
      className={`bg-background rounded-lg shadow-sm border-l-4 transition-all duration-200 hover:shadow-md ${
        argument.side === "support" ? "border-l-green-500" : "border-l-red-500"
      } border-r border-t border-b border-border`}
    >
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-background rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-text-lite">{argument.author.name[0]}</span>
            </div>
            <div>
              <p className="font-medium text-sm text-text-lite">{argument.author.name}</p>
              <p className="text-xs text-text-lite">{timeAgo}</p>
            </div>
          </div>
          <span
            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
              argument.side === "support"
                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
            }`}
          >
            {argument.side === "support" ? "Support" : "Oppose"}
          </span>
        </div>

        <p className="text-text-lite mb-4 leading-relaxed">{argument.content}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onVote(argument.id)}
              disabled={!debateActive}
              className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200 ${
                argument.userVoted
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
              {argument.votes}
            </button>
          </div>

          <div className="flex items-center gap-2">
            {argument.canEdit && canEditTime && (
              <>
                <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </button>
                <button className="p-1 text-gray-400 hover:text-red-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </>
            )}
            <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                />
              </svg>
            </button>
          </div>
        </div>

        {argument.canEdit && canEditTime && (
          <div className="mt-2 text-xs text-amber-600 dark:text-amber-400">
            You can edit or delete this argument for {Math.ceil((5 * 60 * 1000 - timeDiff) / 60000)} more minutes
          </div>
        )}
      </div>
    </div>
  )
}
