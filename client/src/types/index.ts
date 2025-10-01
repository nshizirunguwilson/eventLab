export interface Event {
  id: number
  title: string
  image: string
}

export interface Category {
  id: number
  name: string
}

export interface EventPlace {
  id: number
  image: string
  title: string
  date: string
  location: string
  category: string
}

export interface EventPlatform {
  id: number
  icon: string
  amount: string
  description: string
}

export interface HowItWorks {
  id: number
  icon: string
  title: string
  description: string
}

export interface FeaturedEvent {
  id: number
  image: string
  title: string
  date: string
  location: string
  price: string
  organizerProfile: string
  organizer: string
}

export interface City {
  id: number
  name: string
  image: string
  events: string
  class: string
}

export interface Organizer {
  id: number
  name: string
}

export interface FeaturedOrganizer {
  id: number
  title: string
  image: string
  events: string
  address: string
}

export interface Speaker {
  id: number
  name: string
  image: string
  title: string
}

export interface Blog {
  id: number
  title: string
  subtitle: string
  image: string
  author: string
  authorImage: string
  date: string
  class: string
  divImage: string
}

export interface Testimonial {
  id: number
  name: string
  title: string
  image: string
  testimonial: string
}
