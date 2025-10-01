'use client'

import { cities } from '@/data/constants'
import { toast } from 'sonner'

export default function Cities() {
  const handleCityClick = (cityName: string) => {
    toast.info(`Viewing events in ${cityName}`)
  }

  const handleViewAll = () => {
    toast.info('View all cities')
  }

  return (
    <section className="py-10 px-[10%] max-sm:px-[5%] dark:bg-slate-900">
      <div className="title flex flex-col gap-2">
        <p className="text-sm bg-zinc-100 text-zinc-600 dark:text-zinc-300 dark:bg-slate-700 rounded w-fit px-3 py-1">
          Popular Locations
        </p>
        <div className="flex justify-between items-center">
          <h1 className="text-center font-semibold capitalize text-4xl text-zinc-700 dark:text-zinc-400">
            Browser By <span className="text-blue-600 text-4xl">City</span>
          </h1>
          <div 
            className="w-fit bg-blue-600 text-zinc-100 py-2 px-3 rounded hover:bg-blue-500 cursor-pointer"
            onClick={handleViewAll}
          >
            <span>View All</span>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
      
      <div id="cities" className="grid grid-cols-4 max-sm:grid-cols-1 max-sm:gap-4 gap-10 mt-10">
        {cities.map((city) => (
          <div 
            key={city.id}
            className={`${city.class} max-sm:h-[250px] max-sm:w-full max-sm:col-span-1 max-sm:row-span-1 cursor-pointer rounded-lg overflow-hidden group/item overflow-hidden relative`}
            onClick={() => handleCityClick(city.name)}
          >
            <img 
              className="w-full h-full object-cover group-hover/item:scale-110" 
              src={city.image} 
              alt={city.name}
            />
            <div className="flex gap-2 items-end p-3 justify-center w-full h-full absolute top-[100%] group-hover/item:top-0 left-0 bg-gradient-to-b from-transparent to-blue-500 dark:to-blue-900">
              <span className="font-semibold text-lg text-zinc-100">{city.name}</span>
              <p className="text-zinc-200">{city.events}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
