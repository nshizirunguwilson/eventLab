/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  images: {
    domains: [
      'images.unsplash.com',
      'media.istockphoto.com',
      'www.nationalgeographic.com',
      'images.stockcake.com',
      'encrypted-tbn0.gstatic.com',
      'img.freepik.com',
      'images.squarespace-cdn.com',
      'paristickets.tours',
      'www.travelandleisure.com',
      'carrumhealth.com',
      'cms.afrotech.com',
      'media-api.xogrp.com',
      'www.simplybusiness.co.uk',
      'perfectdailygrind.com',
      'www.ezfacility.com',
      'res.cloudinary.com',
      'img.evbuc.com',
      'images.seattletimes.com',
      'saffronweddingstyle.com',
      'www.betterteam.com',
      'cleancomedians.com',
      'fashionweekdaily.com',
      'mixto.mx',
      'soa.ukzn.ac.za',
      'images.jjbuckley.com',
      'upload.wikimedia.org',
      'spartanspeaks.com',
      'www.cheerswinemerchants.co.uk',
      'static.israel21c.org',
      'fratelli.ro',
      'www.twc2024.com',
      'www.sportspromedia.com',
      'empowermentsquared.org',
      'www.timeshighereducation.com'
    ],
  },
}

module.exports = nextConfig
