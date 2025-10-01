'use client'

import { testimonials } from '@/data/constants'

export default function Testimonials() {
  return (
    <section className="py-10 px-[10%] max-sm:px-[5%] dark:bg-slate-900">
      <div className="title flex flex-col items-center gap-2">
        <p className="text-sm bg-zinc-100 text-zinc-600 rounded w-fit px-3 py-1 dark:bg-slate-700 dark:text-zinc-300">
          What our clients say
        </p>
        <h1 className="text-center font-semibold capitalize text-4xl text-zinc-700 dark:text-zinc-400">
          Our <span className="text-blue-600 text-4xl">Testimonials</span>
        </h1>
      </div>
      
      <div id="testimonials" className="mt-10 grid grid-cols-3 max-sm:grid-cols-1 max-sm:gap-4 gap-10">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id}
            className="border bg-white rounded-md overflow-hidden dark:bg-slate-900 dark:border-slate-800 hover:shadow-xl"
          >
            <div className="border-b dark:border-b-slate-800 py-6 px-8 flex gap-4 items-center relative">
              <img 
                className="w-11 h-11 rounded-full object-cover" 
                src={testimonial.image} 
                alt={testimonial.name}
              />
              <div>
                <p className="font-semibold text-lg text-zinc-600 dark:text-zinc-300">{testimonial.name}</p>
                <p className="text-zinc-500 dark:text-zinc-300 font-regular">{testimonial.title}</p>
              </div>
              <i className="absolute right-[20%] bottom-[-17px] text-blue-500 text-3xl fa-solid fa-quote-right"></i>
            </div>
            <div className="p-8 flex flex-col gap-3">
              <div>
                <i className="text-blue-500 fa-solid fa-star"></i>
                <i className="text-blue-500 fa-solid fa-star"></i>
                <i className="text-blue-500 fa-solid fa-star"></i>
                <i className="text-blue-500 fa-solid fa-star"></i>
                <i className="text-blue-500 fa-solid fa-star"></i>
              </div>
              <p className="text-base text-zinc-500 dark:text-zinc-300">{testimonial.testimonial}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
