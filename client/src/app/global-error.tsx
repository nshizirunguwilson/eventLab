'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global application error:', error)
  }, [error])

  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-zinc-100 dark:bg-slate-900">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-exclamation-triangle text-4xl text-red-500"></i>
              </div>
              <h1 className="text-4xl font-bold text-zinc-700 dark:text-zinc-300 mb-4">
                Critical Error
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-md mx-auto">
                A critical error has occurred. Please refresh the page or contact support if the problem persists.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={reset}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-colors"
              >
                <i className="fa-solid fa-refresh mr-2"></i>
                Refresh Page
              </button>
            </div>
            
            <div className="mt-12">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                If this problem continues, please contact our support team.
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
