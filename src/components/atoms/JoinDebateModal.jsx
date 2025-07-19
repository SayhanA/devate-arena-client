"use client"

import { useEffect } from "react"

export const JoinDebateModal = ({ isOpen, onClose, onJoin, debateTitle }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center text-text-lite">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-card-bg rounded-lg shadow-lg max-w-md w-full mx-4 p-6">
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-text-dark">Choose Your Side</h2>
          <p className="text-text-lite mt-1">Select whether you support or oppose: "{debateTitle}"</p>
        </div>
        <div className="space-y-4">
          <p className="text-sm text-text-lite">
            Once you choose a side, you cannot switch to the other side in this debate. You'll have 5 minutes to post
            your first argument after joining.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => onJoin("support")}
              className="h-20 flex flex-col items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
              Support
            </button>
            <button
              onClick={() => onJoin("oppose")}
              className="h-20 flex flex-col items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v2a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
                />
              </svg>
              Oppose
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
