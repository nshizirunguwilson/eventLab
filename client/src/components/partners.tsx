'use client'

import { toast } from 'sonner'

export default function Partners() {
  const handleViewAll = () => {
    toast.info('View all partners')
  }

  return (
    <>
      <section className="py-10 px-[10%] max-sm:px-[5%] dark:bg-slate-900">
        <div className="title flex flex-col items-center gap-2">
          <p className="text-sm bg-zinc-100 text-zinc-600 rounded w-fit px-3 py-1 dark:bg-slate-700 dark:text-zinc-300">
            Partners
          </p>
          <h1 className="text-center font-semibold capitalize text-4xl text-zinc-700 dark:text-zinc-400">
            Our <span className="text-blue-600 text-4xl">Partners</span>
          </h1>
        </div>
        
        <div id="partners" className="mt-10 flex max-sm:flex-wrap max-sm:gap-4 items-center justify-between">
          <img src="/assets/images/partners/logoipsum-236.svg" alt="Partner 1" />
          <img src="/assets/images/partners/logoipsum-253.svg" alt="Partner 2" />
          <img src="/assets/images/partners/logoipsum-254.svg" alt="Partner 3" />
          <img src="/assets/images/partners/logoipsum-259.svg" alt="Partner 4" />
          <img src="/assets/images/partners/logoipsum-260.svg" alt="Partner 5" />
        </div>
      </section>
      
      <section className="my-10 mx-[10%] dark:bg-slate-900 relative">
        <img 
          className="w-full h-[300px] brightness-[30%] rounded-lg object-cover" 
          src="https://saffronweddingstyle.com/wp-content/uploads/2023/08/corporate-event-planning.jpg" 
          alt="Corporate event planning"
        />
        <div className="rounded-lg flex flex-col gap-10 items-center absolute justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 bg-opacity-40 w-full h-full">
          <h1 className="text-center font-semibold capitalize text-4xl text-white dark:text-zinc-300">
            Our <span className="text-blue-600 text-4xl">Partners</span>
          </h1>
          <div 
            className="w-fit bg-blue-600 text-zinc-100 py-2 px-3 rounded hover:bg-blue-500 cursor-pointer"
            onClick={handleViewAll}
          >
            <span>View All</span>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </section>
    </>
  )
}
