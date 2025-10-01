'use client'

import Link from 'next/link'
import { toast } from 'sonner'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-100 dark:bg-slate-900">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-500">404</h1>
          <h2 className="text-3xl font-semibold text-zinc-700 dark:text-zinc-300 mb-4">
            Page Not Found
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or doesn't exist.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-colors"
          >
            <i className="fa-solid fa-home mr-2"></i>
            Go Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="bg-zinc-200 dark:bg-slate-700 text-zinc-700 dark:text-zinc-300 px-6 py-3 rounded-lg hover:bg-zinc-300 dark:hover:bg-slate-600 transition-colors"
          >
            <i className="fa-solid fa-arrow-left mr-2"></i>
            Go Back
          </button>
        </div>
        
        <div className="mt-12">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Need help? <Link href="/contact" className="text-blue-500 hover:underline">Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
