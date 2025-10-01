'use client'

import { organizers, featuredOrganizers } from '@/data/constants'
import { toast } from 'sonner'

export default function Organizers() {
  const handleOrganizerFilter = (organizerName: string) => {
    toast.info(`Filtering by ${organizerName}`)
  }

  const handleViewAll = () => {
    toast.info('View all organizers')
  }

  const handleOrganizerClick = (organizerTitle: string) => {
    toast.info(`Clicked on ${organizerTitle}`)
  }

  const handleShare = () => {
    toast.info('Share functionality coming soon!')
  }

  const handleFavorite = () => {
    toast.info('Added to favorites!')
  }

  return (
    <section className="py-10 px-[10%] max-sm:px-[5%] dark:bg-slate-900">
      <div className="title flex flex-col gap-2">
        <p className="text-sm bg-zinc-100 text-zinc-600 dark:text-zinc-300 dark:bg-slate-700 rounded w-fit px-3 py-1">
          Popular Organizers
        </p>
        <h1 className="font-semibold capitalize text-4xl text-zinc-700 dark:text-zinc-400">
          Featured <span className="text-blue-600 text-4xl">Organizers</span>
        </h1>
      </div>
      
      <div className="menu mt-6 flex justify-between items-center max-sm:flex-col max-sm:gap-3">
        <div id="organizers-container" className="Organizers max-sm:flex max-sm:flex-wrap max-sm:gap-3">
          {organizers.map((organizer) => (
            <button 
              key={organizer.id}
              className="text-zinc-700 dark:text-zinc-300 bg-zinc-200 dark:bg-slate-700 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-zinc-200 px-4 py-2 rounded"
              onClick={() => handleOrganizerFilter(organizer.name)}
            >
              {organizer.name}
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
      
      <div id="featuredOrganizers" className="mt-10 grid grid-cols-3 max-sm:grid-cols-1 max-sm:gap-4 gap-10">
        {featuredOrganizers.map((featuredOrganizer) => (
          <div 
            key={featuredOrganizer.id}
            className="w-full h-full hover:shadow-lg rounded-md overflow-hidden dark:hover:shadow-slate-700 hover:shadow-blue-300 hover:cursor-pointer group/item mt-10 flex max-sm:flex-col border dark:border-slate-800"
            onClick={() => handleOrganizerClick(featuredOrganizer.title)}
          >
            <div className="w-1/2 max-sm:w-full overflow-hidden m-3">
              <img 
                className="h-full w-full max-sm:aspect-video group-hover/item:scale-105 group-hover/item:saturate-150 object-cover" 
                src={featuredOrganizer.image} 
                alt={featuredOrganizer.title}
              />
            </div>
            <div className="w-1/2 max-sm:w-full pt-2 pr-2 pl-2 flex flex-col justify-between">
              <div className="content flex flex-col gap-1">
                <p className="font-semibold text-zinc-600 dark:text-zinc-300 text-[17px]">
                  {featuredOrganizer.title}
                </p>
                <div className="flex gap-2 items-center">
                  <i className="fa-solid fa-calendar-days text-blue-600"></i>
                  <p className="text-[14px] text-zinc-600 dark:text-zinc-300">{featuredOrganizer.events}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <i className="fa-solid fa-location-dot text-blue-600"></i>
                  <p className="text-[14px] text-zinc-600 dark:text-zinc-300">{featuredOrganizer.address}</p>
                </div>
              </div>
              <div className="organizer border-t dark:border-t-slate-800 flex gap-3 items-center py-1">
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
        ))}
      </div>
    </section>
  )
}
