'use client'

import { featuredEvents } from '@/data/constants'
import { toast } from 'sonner'

export default function FeaturedEvents() {
  const handleEventClick = (eventTitle: string) => {
    toast.info(`Clicked on ${eventTitle}`)
  }

  const handleShare = () => {
    toast.info('Share functionality coming soon!')
  }

  const handleFavorite = () => {
    toast.info('Added to favorites!')
  }

  return (
    <section className="py-10 px-[10%] max-sm:px-[5%] dark:bg-slate-900">
      <div className="title flex flex-col items-center gap-2">
        <p className="text-sm bg-zinc-100 text-zinc-600 dark:text-zinc-300 dark:bg-slate-700 rounded w-fit px-3 py-1">
          New Upcoming
        </p>
        <h1 className="text-center font-semibold capitalize text-4xl text-zinc-700 dark:text-zinc-400">
          Featured <span className="text-blue-600 text-4xl">Events</span>
        </h1>
      </div>
      
      <div id="featuredEvents" className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-4 gap-10">
        {featuredEvents.map((featuredEvent) => (
          <div 
            key={featuredEvent.id}
            className="hover:shadow-lg hover:shadow-blue-300 rounded-md overflow-hidden dark:hover:shadow-slate-700 hover:cursor-pointer group/item mt-10 flex max-sm:flex-col border dark:border-slate-800"
            onClick={() => handleEventClick(featuredEvent.title)}
          >
            <div className="w-1/2 max-sm:w-full overflow-hidden">
              <img 
                className="h-[250px] w-full group-hover/item:scale-105 group-hover/item:saturate-150 object-cover" 
                src={featuredEvent.image} 
                alt={featuredEvent.title}
              />
            </div>
            <div className="w-1/2 max-sm:w-full pt-4 pr-4 pl-4 flex flex-col justify-between">
              <div className="content flex flex-col gap-2">
                <p className="font-semibold text-zinc-600 dark:text-zinc-300 text-[20px]">
                  {featuredEvent.title}
                </p>
                <div className="flex gap-2 items-center">
                  <i className="fa-solid fa-calendar-days text-blue-600"></i>
                  <p className="text-[14px] text-zinc-600 dark:text-zinc-300">{featuredEvent.date}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <i className="fa-solid fa-location-dot text-blue-600"></i>
                  <p className="text-[14px] text-zinc-600 dark:text-zinc-300">{featuredEvent.location}</p>
                </div>
                <p className="font-semibold text-zinc-700 dark:text-zinc-300 uppercase">
                  {featuredEvent.price}
                </p>
              </div>
              <div className="organizer border-t dark:border-t-slate-800 flex justify-between items-center py-2">
                <div className="info flex gap-2 items-center">
                  <img 
                    className="w-8 object-cover h-8 rounded-full" 
                    src={featuredEvent.organizerProfile} 
                    alt={featuredEvent.organizer}
                  />
                  <div>
                    <p className="text-[14px] text-zinc-500 dark:text-zinc-400">Organized by</p>
                    <p className="text-[15px] text-zinc-700 dark:text-zinc-300 font-medium">
                      {featuredEvent.organizer}
                    </p>
                  </div>
                </div>
                <div className="icons flex gap-3">
                  <div 
                    className="w-10 h-10 border dark:border-slate-800 flex items-center justify-center rounded-full hover:bg-blue-50 dark:hover:bg-slate-800 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleShare()
                    }}
                  >
                    <i className="fa-solid fa-upload text-blue-500"></i>
                  </div>
                  <div 
                    className="w-10 h-10 border dark:border-slate-800 flex items-center justify-center rounded-full hover:bg-blue-50 dark:hover:bg-slate-800 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleFavorite()
                    }}
                  >
                    <i className="fa-regular fa-heart text-blue-500"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
