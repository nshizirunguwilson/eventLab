'use client'

import { blogs } from '@/data/constants'
import { toast } from 'sonner'

export default function Blog() {
  const handleBlogClick = (blogTitle: string) => {
    toast.info(`Reading ${blogTitle}`)
  }

  const handleViewAll = () => {
    toast.info('View all blog posts')
  }

  return (
    <section className="py-10 px-[10%] max-sm:px-[5%] dark:bg-slate-900">
      <div className="title flex flex-col gap-2">
        <p className="text-sm bg-zinc-100 text-zinc-600 rounded w-fit px-3 py-1 dark:bg-slate-700 dark:text-zinc-300">
          Latest News
        </p>
        <div className="flex justify-between items-center">
          <h1 className="text-center font-semibold capitalize text-4xl text-zinc-700 dark:text-zinc-400">
            From Our <span className="text-blue-600 text-4xl">Blog</span>
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
      
      <div id="blogs" className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-4 gap-8 mt-10">
        {blogs.map((blog) => (
          <div 
            key={blog.id}
            className={`${blog.class} flex max-sm:flex-col gap-3 rounded-md overflow-hidden border dark:border-slate-800 hover:shadow-lg hover:bg-blue-50 dark:hover:bg-slate-800 cursor-pointer`}
            onClick={() => handleBlogClick(blog.title)}
          >
            <div className={`${blog.divImage} max-sm:w-full`}>
              <img 
                className="w-full h-full object-cover" 
                src={blog.image} 
                alt={blog.title}
              />
            </div>
            <div className="p-3 flex flex-col justify-between h-full gap-2">
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-zinc-700 dark:text-zinc-300 text-lg">{blog.title}</p>
                <p className="text-base text-zinc-600 dark:text-zinc-300">{blog.subtitle}</p>
              </div>
              <div className="flex gap-4 items-center">
                <div className="flex gap-2 items-center">
                  <img 
                    className="w-6 h-6 rounded-full object-cover" 
                    src={blog.authorImage} 
                    alt={blog.author}
                  />
                  <p className="text-zinc-600 dark:text-zinc-300">{blog.author}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <i className="text-blue-600 fa-solid fa-magnifying-glass"></i>
                  <p className="text-zinc-600 dark:text-zinc-300">{blog.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
