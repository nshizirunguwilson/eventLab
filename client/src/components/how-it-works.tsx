'use client'

import { howItWorks } from '@/data/constants'

export default function HowItWorks() {
  return (
    <section className="py-10 px-[10%] max-sm:px-[5%] dark:bg-slate-900" id="howWorks">
      <div className="title flex flex-col items-center gap-2">
        <p className="text-sm bg-zinc-100 text-zinc-600 dark:text-zinc-300 dark:bg-slate-700 rounded w-fit px-3 py-1">
          We Can Assist You Further
        </p>
        <h1 className="text-center font-semibold capitalize text-4xl text-zinc-700 dark:text-zinc-400">
          How <span className="text-blue-600 text-4xl">EventLab</span> works?
        </h1>
      </div>
      
      <div id="works" className="mt-10 grid grid-cols-4 max-sm:grid-cols-1 max-sm:gap-4 gap-10">
        {howItWorks.map((step) => (
          <div key={step.id} className="flex flex-col gap-3 text-center items-center">
            <div className="w-[80px] h-[80px] bg-blue-500 rounded-full flex items-center justify-center">
              <i className={`${step.icon} text-4xl text-zinc-100 dark:text-zinc-300`}></i>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <span className="text-base text-zinc-700 dark:text-zinc-300 font-semibold">
                {step.title}
              </span>
              <p className="w-3/5 text-sm text-zinc-500 dark:text-zinc-300">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
