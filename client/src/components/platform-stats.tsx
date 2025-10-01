'use client'

import { eventPlatforms } from '@/data/constants'

export default function PlatformStats() {
  return (
    <section className="py-10 px-[10%] max-sm:px-[5%] dark:bg-slate-900" id="whyUs">
      <div className="title flex flex-col items-center gap-2">
        <p className="text-sm bg-zinc-100 text-zinc-600 dark:text-zinc-300 dark:bg-slate-700 rounded w-fit px-3 py-1">
          Why Choose Us?
        </p>
        <h1 className="text-center font-semibold capitalize text-4xl text-zinc-700 dark:text-zinc-400">
          We're the best<br />classified <span className="text-blue-600 text-4xl">Event Platform</span>
        </h1>
      </div>
      
      <div id="platform" className="grid grid-cols-4 max-sm:grid-cols-2 max-sm:gap-3 gap-6 py-10">
        {eventPlatforms.map((platform) => (
          <div key={platform.id} className="border dark:border-slate-800 rounded-md p-8 flex gap-2 items-center justify-center">
            <i className={`${platform.icon} text-5xl text-blue-500`}></i>
            <div>
              <p className="text-zinc-700 dark:text-zinc-300 font-bold text-3xl">{platform.amount}</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-300">{platform.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
