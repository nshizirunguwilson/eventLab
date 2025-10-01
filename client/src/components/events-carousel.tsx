'use client'

import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { events } from '@/data/constants'
import { toast } from 'sonner'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

export default function EventsCarousel() {
  const handleEventClick = (eventTitle: string) => {
    toast.info(`Clicked on ${eventTitle}`)
  }

  return (
    <section id="events" className="px-[10%] max-sm:px-[5%] py-10 dark:bg-slate-900">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={8}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        grabCursor={true}
        breakpoints={{
          320: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          480: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 15,
          },
          1440: {
            slidesPerView: 8,
            spaceBetween: 20,
          },
        }}
        className="max-sm:text-sm"
      >
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <div 
              className="group/item flex flex-col cursor-pointer items-center gap-1"
              onClick={() => handleEventClick(event.title)}
            >
              <div className="relative group/item rounded-full overflow-hidden w-[100px] h-[100px]">
                <img 
                  className="w-full h-full object-cover" 
                  src={event.image} 
                  alt={event.title}
                />
                <div className="absolute top-0 opacity-0 group-hover/item:opacity-100 left-0 bg-opacity-50 bg-blue-600 w-full h-full flex items-center justify-center">
                  <i className="fa-solid fa-up-right-and-down-left-from-center text-white"></i>
                </div>
              </div>
              <p className="group-hover/item:text-blue-600 dark:text-zinc-300 text-center max-sm:text-sm">
                {event.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
