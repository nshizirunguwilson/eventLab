'use client'

import { useEffect } from 'react'
import { toast } from 'sonner'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
    toast.error('Something went wrong! Please try again.')
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-100 dark:bg-slate-900">
      <div className="text-center">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
            <i className="fa-solid fa-exclamation-triangle text-4xl text-red-500"></i>
          </div>
          <h1 className="text-4xl font-bold text-zinc-700 dark:text-zinc-300 mb-4">
            Oops! Something went wrong
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-md mx-auto">
            We're sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={reset}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-colors"
          >
            <i className="fa-solid fa-refresh mr-2"></i>
            Try Again
          </button>
          <button 
            onClick={() => window.location.href = '/'}
            className="bg-zinc-200 dark:bg-slate-700 text-zinc-700 dark:text-zinc-300 px-6 py-3 rounded-lg hover:bg-zinc-300 dark:hover:bg-slate-600 transition-colors"
          >
            <i className="fa-solid fa-home mr-2"></i>
            Go Home
          </button>
        </div>
        
        <div className="mt-12">
          <details className="text-left max-w-md mx-auto">
            <summary className="cursor-pointer text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300">
              Technical Details
            </summary>
            <div className="mt-2 p-4 bg-zinc-200 dark:bg-slate-800 rounded-lg text-xs text-zinc-600 dark:text-zinc-400 font-mono">
              {error.message}
              {error.digest && (
                <div className="mt-2">
                  <strong>Error ID:</strong> {error.digest}
                </div>
              )}
            </div>
          </details>
        </div>
      </div>
    </div>
  )
}
