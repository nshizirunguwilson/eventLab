'use client'

import { categories, eventPlaces } from '@/data/constants'
import { toast } from 'sonner'

export default function PopularPlaces() {
  const handleCategoryClick = (categoryName: string) => {
    toast.info(`Filtering by ${categoryName}`)
  }

  const handleEventClick = (eventTitle: string) => {
    toast.info(`Clicked on ${eventTitle}`)
  }

  const handleViewAll = () => {
    toast.info('View all events')
  }

  return (
    <section id="places" className="py-10 px-[10%] max-sm:px-[5%] dark:bg-slate-900">
      <div className="title flex flex-col gap-2">
        <p className="text-sm bg-zinc-100 dark:bg-slate-700 dark:text-zinc-300 text-zinc-600 rounded w-fit px-3 py-1">
          Current location what's new
        </p>
        <h1 className="font-semibold capitalize text-4xl text-zinc-700 dark:text-zinc-400">
          Popular in <span className="text-blue-600 text-4xl underline">Dubai</span>
        </h1>
      </div>
      
      <div className="menu mt-6 flex justify-between items-center max-sm:flex-col max-sm:gap-3">
        <div id="categories-container" className="categories max-sm:flex max-sm:flex-wrap max-sm:gap-3">
          {categories.map((category) => (
            <button 
              key={category.id}
              className="text-zinc-700 dark:text-zinc-300 bg-zinc-200 dark:bg-slate-700 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-zinc-200 px-4 py-2 rounded"
              onClick={() => handleCategoryClick(category.name)}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div 
          className="w-fit bg-blue-600 text-zinc-100 py-2 px-3 rounded hover:bg-blue-500 cursor-pointer"
          onClick={handleViewAll}
        >
          <span>View All</span>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
      
      <div id="eventPlaces-container" className="eventPlaces py-10 grid grid-cols-4 max-sm:grid-cols-1 max-sm:gap-3 gap-6">
        {eventPlaces.map((eventPlace) => (
          <div 
            key={eventPlace.id}
            className="card border dark:border-slate-800 rounded-md overflow-hidden hover:shadow-lg hover:shadow-blue-300 dark:hover:shadow-slate-700 group/item cursor-pointer"
            onClick={() => handleEventClick(eventPlace.title)}
          >
            <div className="w-full h-52 overflow-hidden">
              <img 
                className="w-full h-full object-cover group-hover/item:scale-105" 
                src={eventPlace.image} 
                alt={eventPlace.title}
              />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <p className="font-semibold text-zinc-600 dark:text-zinc-300">{eventPlace.title}</p>
              <span className="flex gap-2 items-center">
                <i className="fa-solid fa-calendar-days text-blue-600"></i>
                <p className="text-zinc-700 dark:text-zinc-300">{eventPlace.date}</p>
              </span>
              <span className="flex gap-2 items-center">
                <i className="fa-solid fa-location-dot text-blue-600"></i>
                <p className="text-zinc-700 dark:text-zinc-300">{eventPlace.location}</p>
              </span>
              <div className="flex justify-between items-center mt-3">
                <p className="text-lg font-semibold text-blue-500">{eventPlace.category}</p>
                <i className="fa-regular fa-heart cursor-pointer text-blue-500 text-xl"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
