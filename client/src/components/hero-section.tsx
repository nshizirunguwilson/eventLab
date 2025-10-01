'use client'

import { toast } from 'sonner'

export default function HeroSection() {
  const handleSearch = () => {
    toast.info('Search functionality coming soon!')
  }

  return (
    <section className="h-screen relative" id="hero">
      <img 
        className="h-full w-full object-cover brightness-[35%]" 
        src="/assets/images/heroImage.png" 
        alt="Hero background" 
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col gap-3 items-center justify-center">
        <p className="text-zinc-100 dark:text-zinc-300 font-medium text-sm">Journey to New Horizons</p>
        <h1 className="uppercase font-semibold text-zinc-100 dark:text-zinc-300 text-7xl max-sm:text-3xl">
          find & promote upcoming <span className="font-semibold text-blue-500 text-7xl max-sm:text-3xl">events</span>
        </h1>
        <div className="flex max-sm:flex-col items-center bg-zinc-100 dark:bg-slate-500 bg-opacity-30 w-fit p-2 rounded-md gap-3">
          <div className="flex bg-zinc-100 dark:bg-slate-900 rounded px-3 items-center">
            <div className="mr-3 max-sm:flex max-sm:items-center">
              <i className="max-sm:text-sm text-blue-600 fa-solid fa-location-dot"></i>
              <select className="p-2 bg-transparent dark:text-zinc-400 max-sm:text-sm" name="location" id="location">
                <option value="">Event Location</option>
                <option value="">Kigali Arena</option>
                <option value="">Convention Center</option>
                <option value="">Norskken House</option>
              </select>
            </div>
            <span className="w-[1px] h-6 bg-blue-400"></span>
            <div className="ml-3 max-sm:flex max-sm:items-center">
              <i className="max-sm:text-sm text-blue-600 fa-solid fa-layer-group"></i>
              <select className="p-2 bg-transparent dark:text-zinc-400 max-sm:text-sm" name="category" id="category">
                <option value="">Event Category</option>
                <option value="">Wedding</option>
                <option value="">Anniversary</option>
                <option value="">Bridal Shower</option>
              </select>
            </div>
          </div>
          <div className="max-sm:w-full">
            <button 
              className="max-sm:text-sm bg-blue-600 rounded text-zinc-100 hover:bg-blue-500 py-2 px-3 cursor-pointer"
              onClick={handleSearch}
            >
              Search Now
            </button>
          </div>
        </div>
        <p className="text-sm text-zinc-100 dark:text-zinc-300">All, Online, Today, This weekend, Free, Food & Drink, Charity & Causes</p>
      </div>
    </section>
  )
}
