'use client'

import { useState } from 'react'
import { useTheme } from 'next-themes'
import { toast } from 'sonner'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
    toast.success(`Switched to ${theme === 'dark' ? 'light' : 'dark'} mode`)
  }

  const handleMenuClick = (action: string) => {
    toast.info(`${action} clicked!`)
    setIsMenuOpen(false)
  }

  const handleSearch = () => {
    toast.info('Search functionality coming soon!')
  }

  return (
    <header className="sticky top-0 z-10 bg-zinc-100 dark:bg-slate-900 shadow-lg py-3 px-[10%] max-sm:px-[5%] flex justify-between items-center">
      <div className="flex max-sm:grid max-sm:w-full max-sm:grid-cols-2 items-center gap-3">
        <h1 className="font-bold z-50 text-xl text-blue-500">EventLab</h1>
        <div className="hidden z-50 max-sm:flex max-sm:items-center max-sm:justify-end">
          <i 
            className={`text-blue-500 text-2xl fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} cursor-pointer`}
            onClick={toggleMenu}
          ></i>
        </div>
        <div className="border max-sm:col-span-2 p-1 max-sm:flex max-sm:justify-between dark:border-slate-800 rounded group focus-within:ring-1 focus-within:ring-blue-500">
          <input 
            className="text-base max-sm:text-sm font-regular bg-transparent text-zinc-700 dark:text-zinc-400" 
            type="text" 
            placeholder="Type your search..."
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          <i 
            className="fa-solid fa-magnifying-glass border-l dark:border-l-zinc-400 hover:cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-800 text-blue-500 py-2 px-3"
            onClick={handleSearch}
          ></i>
        </div>
      </div>
      
      <div className={`flex max-sm:fixed max-sm:w-full max-sm:h-screen max-sm:bg-slate-950 dark:max-sm:bg-slate-950 max-sm:bg-opacity-90 dark:max-sm:bg-opacity-90 max-sm:left-[100%] max-sm:top-0 max-sm:p-[5%] max-sm:flex-col items-center max-sm:justify-center gap-8 ${
        isMenuOpen ? 'max-sm:left-0' : ''
      }`}>
        <div className="flex max-sm:flex-col max-sm:items-start gap-4 items-center">
          <div 
            className="flex items-center group/item gap-2 cursor-pointer"
            onClick={() => handleMenuClick('Home')}
          >
            <i className="fa-solid fa-house text-blue-600"></i>
            <span className="text-zinc-700 dark:text-zinc-400 group-hover/item:underline">Home</span>
          </div>
          <div 
            className="flex items-center group/item gap-2 cursor-pointer"
            onClick={() => handleMenuClick('Favorite')}
          >
            <i className="fa-solid fa-heart text-blue-600"></i>
            <span className="text-zinc-700 dark:text-zinc-400 group-hover/item:underline">Favorite</span>
          </div>
          <div 
            className="flex items-center group/item gap-2 cursor-pointer"
            onClick={() => handleMenuClick('Profile')}
          >
            <i className="fa-solid fa-user text-blue-600"></i>
            <span className="text-zinc-700 dark:text-zinc-400 group-hover/item:underline">Profile</span>
          </div>
          <div 
            className="bg-blue-600 text-zinc-100 dark:text-zinc-300 py-2 px-3 rounded hover:bg-blue-500 cursor-pointer"
            onClick={() => handleMenuClick('Buy Tickets')}
          >
            <span>Buy Tickets</span>
            <i className="fa-solid fa-ticket rotate-90"></i>
          </div>
        </div>
        <div className="w-6 overflow-hidden">
          <i 
            className={`text-blue-600 text-2xl cursor-pointer fa-solid ${
              theme === 'dark' ? 'fa-sun' : 'fa-moon'
            }`}
            onClick={handleThemeToggle}
          ></i>
        </div>
      </div>
    </header>
  )
}
