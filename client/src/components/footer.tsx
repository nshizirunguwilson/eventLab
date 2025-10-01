'use client'

import { toast } from 'sonner'

export default function Footer() {
  const handleSocialClick = (platform: string) => {
    toast.info(`Opening ${platform} profile`)
  }

  const handleLinkClick = (link: string) => {
    toast.info(`Navigating to ${link}`)
  }

  return (
    <footer className="w-full">
      <div className="px-[10%] max-sm:px-[5%] bg-[#0B214A] py-10 flex max-sm:flex-col max-sm:gap-8 justify-between">
        <div className="flex flex-col gap-8">
          <h1 className="font-bold text-3xl text-white dark:text-zinc-300">
            Event<span className="text-blue-500 text-3xl">Lab</span>
          </h1>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-zinc-100 dark:text-zinc-300">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                <i className="text-zinc-100 dark:text-zinc-300 text-lg fa-solid fa-phone"></i>
              </div>
              <p>(+250)791-847-408</p>
            </div>
            <div className="flex items-center gap-2 text-zinc-100 dark:text-zinc-300">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                <i className="text-zinc-100 dark:text-zinc-300 text-lg fa-solid fa-location-dot"></i>
              </div>
              <p>Kigali, Kicukiro</p>
            </div>
            <div className="flex items-center gap-2 text-zinc-100 dark:text-zinc-300">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                <i className="text-zinc-100 dark:text-zinc-300 text-lg fa-solid fa-envelope"></i>
              </div>
              <p>wilson.codecraft@gmail.com</p>
            </div>
          </div>
          <div>
            <p className="text-lg text-zinc-100 dark:text-zinc-300">Follow our social media</p>
            <div className="flex gap-3">
              <div 
                className="w-10 h-10 border border-blue-500 flex group/item hover:bg-zinc-100 items-center justify-center rounded-full cursor-pointer"
                onClick={() => handleSocialClick('WhatsApp')}
              >
                <i className="text-xl text-zinc-100 dark:text-zinc-300 group-hover/item:text-blue-500 fa-brands fa-whatsapp"></i>
              </div>
              <div 
                className="w-10 h-10 border border-blue-500 flex group/item hover:bg-zinc-100 items-center justify-center rounded-full cursor-pointer"
                onClick={() => handleSocialClick('Instagram')}
              >
                <i className="text-xl text-zinc-100 dark:text-zinc-300 group-hover/item:text-blue-500 fa-brands fa-instagram"></i>
              </div>
              <div 
                className="w-10 h-10 border border-blue-500 flex group/item hover:bg-zinc-100 items-center justify-center rounded-full cursor-pointer"
                onClick={() => handleSocialClick('Twitter')}
              >
                <i className="text-xl text-zinc-100 dark:text-zinc-300 group-hover/item:text-blue-500 fa-brands fa-x-twitter"></i>
              </div>
              <div 
                className="w-10 h-10 border border-blue-500 flex group/item hover:bg-zinc-100 items-center justify-center rounded-full cursor-pointer"
                onClick={() => handleSocialClick('LinkedIn')}
              >
                <i className="text-xl text-zinc-100 dark:text-zinc-300 group-hover/item:text-blue-500 fa-brands fa-linkedin-in"></i>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex max-sm:flex-col max-sm:gap-8 gap-32">
          <div>
            <p className="text-zinc-100 dark:text-zinc-300 text-xl decoration-blue-400 font-semibold underline underline-offset-[15px] mb-[20px]">
              Useful Links
            </p>
            <div className="text-zinc-100 dark:text-zinc-300 flex flex-col gap-2">
              <a className="hover:underline cursor-pointer" onClick={() => handleLinkClick('About Us')}>About Us</a>
              <a className="hover:underline cursor-pointer" onClick={() => handleLinkClick('Contact Us')}>Contact Us</a>
              <a className="hover:underline cursor-pointer" onClick={() => handleLinkClick('Our Team')}>Our Team</a>
              <a className="hover:underline cursor-pointer" onClick={() => handleLinkClick('FAQs')}>FAQs</a>
              <a className="hover:underline cursor-pointer" onClick={() => handleLinkClick('Privacy Policy')}>Privacy Policy</a>
            </div>
          </div>
          
          <div>
            <p className="text-zinc-100 dark:text-zinc-300 text-xl decoration-blue-400 font-semibold underline underline-offset-[15px] mb-[20px]">
              Categories
            </p>
            <div className="text-zinc-100 dark:text-zinc-300 flex flex-col gap-2">
              <a className="hover:underline cursor-pointer" onClick={() => handleLinkClick('Live Music')}>Live Music</a>
              <a className="hover:underline cursor-pointer" onClick={() => handleLinkClick('Visual Arts')}>Visual Arts</a>
              <a className="hover:underline cursor-pointer" onClick={() => handleLinkClick('Holiday')}>Holiday</a>
              <a className="hover:underline cursor-pointer" onClick={() => handleLinkClick('Health')}>Health</a>
              <a className="hover:underline cursor-pointer" onClick={() => handleLinkClick('Hobbies')}>Hobbies</a>
            </div>
          </div>
          
          <div>
            <p className="text-zinc-100 dark:text-zinc-300 text-xl decoration-blue-400 font-semibold underline underline-offset-[15px] mb-[20px]">
              Locations
            </p>
            <div className="text-zinc-100 dark:text-zinc-300 flex flex-col gap-2">
              <a className="hover:underline cursor-pointer" onClick={() => handleLinkClick('London')}>London</a>
              <a className="hover:underline cursor-pointer" onClick={() => handleLinkClick('Paris')}>Paris</a>
              <a className="hover:underline cursor-pointer" onClick={() => handleLinkClick('Barcelona')}>Barcelona</a>
              <a className="hover:underline cursor-pointer" onClick={() => handleLinkClick('Berlin')}>Berlin</a>
              <a className="hover:underline cursor-pointer" onClick={() => handleLinkClick('Tokyo')}>Tokyo</a>
            </div>
          </div>
          
          <div>
            <p className="text-zinc-100 dark:text-zinc-300 text-xl decoration-blue-400 font-semibold underline underline-offset-[15px] mb-[20px]">
              Newest Events
            </p>
            <div className="flex flex-col gap-3">
              <div className="text-white dark:text-zinc-300 flex items-center gap-2">
                <img 
                  className="w-10 h-10 rounded-md object-cover" 
                  src="https://media.istockphoto.com/id/1350217339/photo/cropped-shot-of-an-unrecognizable-diverse-group-of-businesspeople-applauding-while-sitting-in.jpg?s=612x612&w=0&k=20&c=m8_E7yu2fcvNE4XYhN9PHUHR_-rQ2osApsshIjPcX2w=" 
                  alt="Event 1"
                />
                <div>
                  <p>30 Minute Medication</p>
                  <p className="text-zinc-200 text-[13px]">Free Event</p>
                </div>
              </div>
              <div className="text-white dark:text-zinc-300 flex items-center gap-2">
                <img 
                  className="w-10 h-10 rounded-md object-cover" 
                  src="https://www.timeshighereducation.com/student/sites/default/files/istock-499343530.jpg" 
                  alt="Event 2"
                />
                <div>
                  <p>Global Education Expo</p>
                  <p className="text-zinc-200 text-[13px]">Ticket price: $25</p>
                </div>
              </div>
              <div className="text-white dark:text-zinc-300 flex items-center gap-2">
                <img 
                  className="w-10 h-10 rounded-md object-cover" 
                  src="https://empowermentsquared.org/wp-content/uploads/2024/01/Empowerment-Squared-Career-Opportunity-Manager-International-Youth-Internships-Photo.jpeg" 
                  alt="Event 3"
                />
                <div>
                  <p>Free Career Empowerment</p>
                  <p className="text-zinc-200 text-[13px]">Free Event</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-[#0F2B5D]">
        <p className="text-center text-zinc-100 dark:text-zinc-300">&copy; 2024 EventLab. All rights reserved.</p>
      </div>
    </footer>
  )
}
