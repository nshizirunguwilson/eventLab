'use client'

import { speakers } from '@/data/constants'
import { toast } from 'sonner'

export default function Speakers() {
  const handleSocialClick = (platform: string) => {
    toast.info(`Opening ${platform} profile`)
  }

  return (
    <section className="py-10 px-[10%] max-sm:px-[5%] dark:bg-slate-900">
      <div className="title flex flex-col items-center gap-2">
        <p className="text-sm bg-zinc-100 text-zinc-600 dark:text-zinc-300 dark:bg-slate-700 rounded w-fit px-3 py-1">
          Event speaker
        </p>
        <h1 className="text-center font-semibold capitalize text-4xl text-zinc-700 dark:text-zinc-400">
          Browser By <span className="text-blue-600 text-4xl">Speakers</span>
        </h1>
      </div>
      
      <div id="speakers" className="mt-10 grid grid-cols-4 max-sm:grid-cols-1 max-sm:gap-4 gap-10">
        {speakers.map((speaker) => (
          <div 
            key={speaker.id}
            className="border dark:border-slate-800 rounded-md py-10 hover:shadow-lg overflow-hidden group/item hover:bg-blue-50 dark:hover:bg-slate-800 cursor-pointer flex flex-col gap-2 items-center justify-center"
          >
            <img 
              className="w-28 h-28 rounded-full object-cover" 
              src={speaker.image} 
              alt={speaker.name}
            />
            <p className="font-semibold text-zinc-700 dark:text-zinc-300 text-lg">{speaker.name}</p>
            <p className="font-base text-zinc-500 dark:text-zinc-300">{speaker.title}</p>
            <div className="flex gap-2 transform translate-y-[4.5rem] group-hover/item:-translate-y-0">
              <i 
                className="text-xl text-zinc-700 dark:text-zinc-300 hover:text-blue-500 dark:hover:text-blue-500 fa-brands fa-whatsapp cursor-pointer"
                onClick={() => handleSocialClick('WhatsApp')}
              ></i>
              <i 
                className="text-xl text-zinc-700 dark:text-zinc-300 hover:text-blue-500 dark:hover:text-blue-500 fa-brands fa-instagram cursor-pointer"
                onClick={() => handleSocialClick('Instagram')}
              ></i>
              <i 
                className="text-xl text-zinc-700 dark:text-zinc-300 hover:text-blue-500 dark:hover:text-blue-500 fa-brands fa-x-twitter cursor-pointer"
                onClick={() => handleSocialClick('Twitter')}
              ></i>
              <i 
                className="text-xl text-zinc-700 dark:text-zinc-300 hover:text-blue-500 dark:hover:text-blue-500 fa-brands fa-linkedin-in cursor-pointer"
                onClick={() => handleSocialClick('LinkedIn')}
              ></i>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
