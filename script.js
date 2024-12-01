// icons
const moonIcon = document.getElementById("moon");
const sunIcon = document.getElementById("sun");

// theme variables
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// icon toggling
const iconToggle = () => {
    if (moonIcon && sunIcon) {
        moonIcon.classList.toggle("hidden");
        sunIcon.classList.toggle("hidden");
    }
}

// initial theme check
const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        if (moonIcon) moonIcon.classList.add("hidden");
        if (sunIcon) sunIcon.classList.remove("hidden");
    } else {
        document.documentElement.classList.remove("dark");
        if (sunIcon) sunIcon.classList.add("hidden");
        if (moonIcon) moonIcon.classList.remove("hidden");
    }
};


// manual theme switch
const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
}

// add event listeners if icons exist
if (sunIcon) {
    sunIcon.addEventListener("click", () => {
        themeSwitch();
    });
}

if (moonIcon) {
    moonIcon.addEventListener("click", () => {
        themeSwitch();
    });
}

// invoke theme-check on initial load
themeCheck();


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    speed: 1000,
    autoplay: true,
    loop: true,
    grabCursor: true,
    slidesPerView: 8,
    spaceBetween: 20,
});


const events = [
    {
        id: 1,
        title: "Live Music",
        image: "https://www.betterteam.com/images/singer-job-description-2765x3456-20201117.jpeg?crop=1:1,smart&width=1200&dpr=2&format=pjpg&auto=webp&quality=85",
    },
    {
        id: 2,
        title: "Art Exhibition",
        image: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=800",
    },
    {
        id: 3,
        title: "Tech Conference",
        image: "https://images.stockcake.com/public/8/c/4/8c4887f5-b792-422b-82f4-2e14dc7cbc9c_large/tech-conference-presentation-stockcake.jpg"
    },
    {
        id: 4,
        title: "Food Festival",
        image: "https://images.unsplash.com/photo-1543353071-873f17a7a088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=800",
    },
    {
        id: 5,
        title: "Charity Run",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZft4dnutu19Egz7_MGnUx0HHdPkUK30elOw&s"
    },
    {
        id: 6,
        title: "Film Screening",
        image: "https://img.freepik.com/premium-photo/community-film-screening-event-bringing-people-tog-00133-00_883586-146167.jpg",
    },
    {
        id: 7,
        title: "Book Launch",
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=800",
    },
    {
        id: 8,
        title: "Yoga Retreat",
        image: "https://mixto.mx/wp-content/uploads/2024/01/crafting-the-perfect-retreat-theme.jpg",
    },
    {
        id: 9,
        title: "Stand-Up Comedy",
        image: "https://cleancomedians.com/wp-content/uploads/2023/05/comic-vs-comedian.jpg",
    },
    {
        id: 10,
        title: "Fashion Show",
        image: "https://fashionweekdaily.com/wp-content/uploads/2023/11/AdobeStock_617447912.jpeg",
    },
    {
        id: 11,
        title: "Outdoor Camping",
        image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=800",
    },
    {
        id: 12,
        title: "Photography Workshop",
        image: "https://soa.ukzn.ac.za/wp-content/uploads/2019/09/4.jpg",
    },
    {
        id: 13,
        title: "Wine Tasting",
        image: "https://images.jjbuckley.com/froala/essential-wine-tasting-terminology.jpg",
    },
    {
        id: 14,
        title: "Gaming Tournament",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/LGD_Gaming_at_the_2015_LPL_Summer_Finals.jpg/800px-LGD_Gaming_at_the_2015_LPL_Summer_Finals.jpg",
    },
    {
        id: 15,
        title: "Cooking Class",
        image: "https://spartanspeaks.com/wp-content/uploads/2023/03/9uw2wfTT5X9SVohUw7E7KJzZ41yyDkSv5c3UXqnc.jpg",
    }
];

const eventsContainer = document.getElementById('events-container');
events.forEach(event => {
    const eventHTML = `
            <div class="swiper-slide group/item flex flex-col cursor-pointer items-center gap-1">
                <div class="relative group/item rounded-full overflow-hidden w-[100px] h-[100px]">
                    <img class="w-full h-full object-cover" src="${event.image}" alt="${event.title}">
                    <div class="absolute top-0 opacity-0 group-hover/item:opacity-100 left-0 bg-opacity-50 bg-blue-600 w-full h-full flex items-center justify-center">
                        <i class="fa-solid fa-up-right-and-down-left-from-center text-white"></i>
                    </div>
                </div>
                <p class="group-hover/item:text-blue-600 text-center">${event.title}</p>
            </div>
        `;
    eventsContainer.innerHTML += eventHTML;
});

swiper.update(); // Update the Swiper instance to recognize new slides

const categories = [
    {
        id: 1,
        name: "All",
    },
    {
        id: 2,
        name: "Food",
    },
    {
        id: 3,
        name: "Tech",
    },
    {
        id: 4,
        name: "Fashion",
    },
    {
        id: 5,
        name: "Wine",
    },
    {
        id: 6,
        name: "Gaming",
    },
    {
        id: 7,
        name: "Cooking",
    }
]

const categoriesContainer = document.getElementById('categories-container');

categories.forEach(category => {
    const categoryHTML = `
        <button class="text-zinc-700 bg-zinc-200 hover:bg-blue-500 hover:text-zinc-200 px-4 py-2 rounded">${category.name}</button>
    `;
    categoriesContainer.innerHTML += categoryHTML;
})

const eventPlaces = [
    // {
    //     id: 1,
    //     image: "https://images.stockcake.com/public/a/4/b/a4bc6b55-2148-48aa-9d15-26e59ded3838_large/rock-concert-energy-stockcake.jpg",
    //     title: "Free Empowerment & Meditation",
    //     date: "Fri 15 Jun 2024 - Sat 29 Dec 2024",
    //     location: "United Arab Emirates",
    //     category: "Food",
    // },
    // {
    //     id: 2,
    //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4OPnz1CAkIthWaAb2XsecaJ-2ysN0mfE1nw&s",
    //     title: "Global Tech Summit",
    //     date: "Mon 5 Feb 2024 - Wed 7 Feb 2024",
    //     location: "San Francisco, USA",
    //     category: "Tech",
    // },
    {
        id: 3,
        image: "https://www.cheerswinemerchants.co.uk/cdn/shop/articles/Wine_Tasting_in_the_Sun.jpg?v=1713197168&width=480",
        title: "Wine Tasting Festival",
        date: "Sat 8 Jun 2024 - Sun 9 Jun 2024",
        location: "Tuscany, Italy",
        category: "Wine",
    },
    // {
    //     id: 4,
    //     image: "https://jetexsitecdn.ams3.cdn.digitaloceanspaces.com/images/uploads/2024/03/fashion-week-2024.jpg",
    //     title: "Paris Fashion Week",
    //     date: "Thu 25 Jan 2024 - Tue 30 Jan 2024",
    //     location: "Paris, France",
    //     category: "Fashion",
    // },
    {
        id: 5,
        image: "https://static.israel21c.org/www/uploads/2021/10/main-pic-1.jpg",
        title: "Gaming World Championships",
        date: "Fri 20 Sep 2024 - Sun 22 Sep 2024",
        location: "Seoul, South Korea",
        category: "Gaming",
    },
    // {
    //     id: 6,
    //     image: "https://www.artviva.com/wp-content/uploads/2019/07/IMG_8394.jpg",
    //     title: "Vegan Cooking Workshop",
    //     date: "Sat 3 Aug 2024 - Sun 4 Aug 2024",
    //     location: "Melbourne, Australia",
    //     category: "Cooking",
    // },
    {
        id: 7,
        image: "https://fratelli.ro/wp-content/uploads/2018/10/44764810_2045622512142498_2852246815875530752_o.jpg",
        title: "Street Food Carnival",
        date: "Thu 11 Jul 2024 - Sun 14 Jul 2024",
        location: "Bangkok, Thailand",
        category: "Food",
    },
    {
        id: 8,
        image: "https://img.freepik.com/premium-photo/chipletpowered-futuristic-robot-showcasing-impact-modular-technology-artificial-intelligence-robotics_38013-12662.jpg",
        title: "AI and Robotics Conference",
        date: "Tue 23 Apr 2024 - Fri 26 Apr 2024",
        location: "Tokyo, Japan",
        category: "Tech",
    },
    {
        id: 9,
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9",
        title: "Fashion Designers Meetup",
        date: "Sat 10 Feb 2024 - Sun 11 Feb 2024",
        location: "Milan, Italy",
        category: "Fashion",
    },
    {
        id: 10,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
        title: "Cooking Masterclass",
        date: "Wed 7 Aug 2024 - Thu 8 Aug 2024",
        location: "London, UK",
        category: "Cooking",
    },
    // {
    //     id: 11,
    //     image: "https://www.twc2024.com/wp-content/uploads/2024/04/twc_picture_12-1024x720.jpg",
    //     title: "World Wine Congress",
    //     date: "Mon 1 Jul 2024 - Wed 3 Jul 2024",
    //     location: "Bordeaux, France",
    //     category: "Wine",
    // },
    // {
    //     id: 12,
    //     image: "https://www.sportspromedia.com/wp-content/uploads/2021/06/esports_arenas_main.jpg",
    //     title: "E-sports Live Event",
    //     date: "Fri 6 Sep 2024 - Sun 8 Sep 2024",
    //     location: "Los Angeles, USA",
    //     category: "Gaming",
    // },
    {
        id: 13,
        image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F859416779%2F2317129676633%2F1%2Foriginal.20240925-192836?crop=focalpoint&fit=crop&w=600&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.5&fp-y=0.5&s=d0a343886a15fdb56c51e0a7687cbdc3",
        title: "International Food Fiesta",
        date: "Fri 2 Aug 2024 - Sun 4 Aug 2024",
        location: "Dubai, UAE",
        category: "Food",
    },
    {
        id: 14,
        image: "https://images.seattletimes.com/wp-content/uploads/2018/06/f1c8e922-70c0-11e8-a540-565ad3fbf220.jpg?d=780x520",
        title: "Virtual Reality Expo",
        date: "Mon 12 Feb 2024 - Wed 14 Feb 2024",
        location: "Berlin, Germany",
        category: "Tech",
    },
];

const eventPlacesContainer = document.getElementById('eventPlaces-container');
eventPlaces.forEach(eventPlace => {
    const eventPlaceHTML = `
        <div class="card border hover:shadow-lg hover:shadow-blue-300 group/item cursor-pointer">
            <div class="w-full h-52 overflow-hidden">
                <img class="w-full h-full object-cover group-hover/item:scale-105" src="${eventPlace.image}" alt="">
            </div>
            <div class="p-4 flex flex-col gap-2">
                <p class="font-semibold text-zinc-600">${eventPlace.title}</p>
                <span class="flex gap-2 items-center">
                    <i class="fa-solid fa-calendar-days text-blue-600"></i>
                    <p class="text-zinc-700">${eventPlace.date}</p>
                </span>
                <span class="flex gap-2 items-center">
                    <i class="fa-solid fa-location-dot text-blue-600"></i>
                    <p class="text-zinc-700">${eventPlace.location}</p>
                </span>
                <div class="flex justify-between items-center mt-3">
                    <p class="text-lg font-semibold text-blue-500">${eventPlace.category}</p>
                    <i class="fa-regular fa-heart cursor-pointer text-blue-500 text-xl"></i>
                </div>
            </div>
        </div>
    `;
    eventPlacesContainer.innerHTML += eventPlaceHTML;
})

const eventPlatforms = [
    {
        id: 1,
        icon: "fa-solid fa-calendar-days",
        amount: "120k",
        description: "Events added"
    },
    {
        id: 2,
        icon: "fa-solid fa-user-tie",
        amount: "40k",
        description: "Event Organizers"
    },
    {
        id: 3,
        icon: "fa-solid fa-users",
        amount: "30k",
        description: "Events Hosted"
    },
    {
        id: 4,
        icon: "fa-solid fa-ticket rotate-90",
        amount: "11.4m",
        description: "Tickets Sold"
    }
]

const platform = document.getElementById("platform");

eventPlatforms.forEach(eventPlatform => {
    const platformHTML = `
        <div class="border rounded-md p-8 flex gap-2 items-center justify-center">
            <i class="${eventPlatform.icon} text-5xl text-blue-500"></i>
            <div>
                <p class="text-zinc-700 font-bold text-3xl">${eventPlatform.amount}</p>
                <p class="text-sm text-zinc-500">${eventPlatform.description}</p>
            </div>
        </div>
    `;
    platform.innerHTML += platformHTML;
})

const how = [
    {
        id: 1,
        icon: "fa-solid fa-magnifying-glass",
        title: "Pick a keyword",
        description: "Bring to the table win-win survival strategies to ensure proactive domination."
    },
    {
        id: 2,
        icon: "fa-solid fa-map-location-dot",
        title: "Select location",
        description: "Organically grow the holistic world view of disruptive innovation."
    },
    {
        id: 3,
        icon: "fa-solid fa-table-cells-large",
        title: "Select category",
        description: "User generated content in real-time will have multiple touch-points for offshoring."
    },
    {
        id: 4,
        icon: "fa-solid fa-square-poll-vertical",
        title: "View results",
        description: "Capitalize on low hanging fruit to identify a ballpark value added to beta vest."
    }
]

const works = document.getElementById("works");

how.forEach(how => {
    const workHTML = `
        <div class="flex flex-col gap-3 text-center items-center">
            <div class="w-[80px] h-[80px] bg-blue-500 rounded-full flex items-center justify-center">
                <i class="${how.icon} text-4xl text-zinc-100"></i>
            </div>
            <div class="flex flex-col gap-2 items-center justify-center">
                <span class="text-base text-zinc-700 font-semibold">${how.title}</span>
                <p class="w-3/5 text-sm text-zinc-500">${how.description}</p>
            </div>
        </div>
    `;
    works.innerHTML += workHTML;
})

const featuredEvents = [
    {
        id: 1,
        image: "https://www.nationalgeographic.com/content/dam/expeditions/destinations/asia/rail/Inidias-Fabled-Rajasthan-by-Rail/Hero-india-fabled.jpg.adapt.nineteen-hundred.jpg",
        title: "World Wine Congress",
        date: "Mon 1 Jul 2024 - Wed 3 Jul 2024",
        location: "Bordeaux, France",
        price: "free",
        organizerProfile: "https://www.nationalgeographic.com/content/dam/expeditions/destinations/asia/rail/Inidias-Fabled-Rajasthan-by-Rail/Hero-india-fabled.jpg.adapt.nineteen-hundred.jpg",
        organizer: "Info Connect"
    },
    {
        id: 2,
        image: "https://www.nationalgeographic.com/content/dam/expeditions/destinations/europe/land/estonia-lithuania-latvia-enchanted-forests-medieval-castles/estonia-lithuania-latvia-baltics-hero.jpg.adapt.nineteen-hundred.jpg",
        title: "E-sports Live Event",
        date: "Fri 6 Sep 2024 - Sun 8 Sep 2024",
        location: "Los Angeles, USA",
        price: "free",
        organizerProfile: "https://www.nationalgeographic.com/content/dam/expeditions/destinations/europe/land/estonia-lithuania-latvia-enchanted-forests-medieval-castles/estonia-lithuania-latvia-baltics-hero.jpg.adapt.nineteen-hundred.jpg",
        organizer: "ESports World"
    },
    {
        id: 3,
        image: "https://www.nationalgeographic.com/content/dam/expeditions/destinations/europe/active/Alpe-Adria-trail/hero-alpe-adria.jpg.adapt.nineteen-hundred.jpg",
        title: "International Food Fiesta",
        date: "Fri 2 Aug 2024 - Sun 2 Aug 2019",
        location: "Dubai, UAE",
        price: "$150",
        organizerProfile: "https://www.nationalgeographic.com/content/dam/expeditions/destinations/europe/active/Alpe-Adria-trail/hero-alpe-adria.jpg.adapt.nineteen-hundred.jpg",
        organizer: "Food & Drink Events"
    },
    {
        id: 4,
        image: "https://www.nationalgeographic.com/content/dam/expeditions/destinations/asia/land/Bhutan-Land-of-Mysticism-Mythology/bhutan-mysticism-mythology-hero.jpg.adapt.nineteen-hundred.jpg",
        title: "Alaska Expedition",
        date: "Fri 12 May 2024 - Sun 14 May 2024",
        location: "Anchorage, Alaska, USA",
        price: "free",
        organizerProfile: "https://www.nationalgeographic.com/content/dam/expeditions/destinations/asia/land/Bhutan-Land-of-Mysticism-Mythology/bhutan-mysticism-mythology-hero.jpg.adapt.nineteen-hundred.jpg",
        organizer: "Alaska Adventure"
    }
]

const featuredEventsContainer = document.getElementById("featuredEvents");

featuredEvents.forEach(featuredEvent => {
    const featuredEventHTML = `
        <div class="hover:shadow-lg hover:shadow-blue-300 hover:cursor-pointer group/item mt-10 flex border">
            <div class="w-1/2 overflow-hidden">
                <img class="h-[250px] w-full group-hover/item:scale-105 group-hover/item:saturate-150 object-cover" src="${featuredEvent.image}" alt="">
            </div>
            <div class="w-1/2 pt-4 pr-4 pl-4 flex flex-col justify-between">
                <div class="content flex flex-col gap-2">
                    <p class="font-semibold text-zinc-600 text-[20px]">${featuredEvent.title}</p>
                    <div class="flex gap-2 items-center">
                        <i class="fa-solid fa-calendar-days text-blue-600"></i>
                        <p class="text-[14px] text-zinc-600">${featuredEvent.date}</p>
                    </div>
                    <div class="flex gap-2 items-center">
                        <i class="fa-solid fa-location-dot text-blue-600"></i>
                        <p class="text-[14px] text-zinc-600">${featuredEvent.location}</p>
                    </div>
                    <p class="font-semibold text-zinc-700 uppercase">${featuredEvent.price}</p>
                </div>
                <div class="organizer border-t flex justify-between items-center py-2">
                    <div class="info flex gap-2 items-center">
                        <img class="w-8 object-cover h-8 rounded-full" src="${featuredEvent.organizerProfile}" alt="">
                        <div>
                            <p class="text-[14px] text-zinc-500">Organized by</p>
                            <p class="text-[15px] text-zinc-700 font-medium">${featuredEvent.organizer}</p>
                        </div>
                    </div>
                    <div class="icons flex gap-3">
                        <div class="w-10 h-10 border flex items-center justify-center rounded-full">
                            <i class="fa-solid fa-upload text-blue-500"></i>
                        </div>
                        <div class="w-10 h-10 border flex items-center justify-center rounded-full">
                            <i class="fa-regular fa-heart text-blue-500"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    featuredEventsContainer.innerHTML += featuredEventHTML;
});

const cities = [
    {
        id: 1,
        name: "New York",
        image: "https://res.cloudinary.com/dtljonz0f/image/upload/c_auto,ar_4:3,w_3840,g_auto/f_auto/q_auto/shutterstock_329662223_ss_non-editorial_3_csm8lw?_a=BAVARSDW0",
        events: "06 Events",
        class: "col-span-2 row-span-2"
    },
    {
        id: 2,
        name: "London",
        image: "https://images.squarespace-cdn.com/content/v1/6397e1ebbb148c2e8ac0b037/28bd2e1a-71d4-4dbf-b8a9-b34bdee409a8/London_1_2019-4508.jpg",
        events: "12 Events",
        class: "h-[250px] col-span-2"
    },
    {
        id: 3,
        name: "Paris",
        image: "https://paristickets.tours/wp-content/uploads/2022/09/paris-at-spring.jpg",
        events: "10 Events",
        class: "h-[250px]"
    },
    {
        id: 4,
        name: "Tokyo",
        image: "https://www.travelandleisure.com/thmb/VscfMXHNO6uBpaX2cuIW1q2ZtA8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tokyo-japan-TOKYOTG0621-52012ff551dc46c4a87ac8e3151307a4.jpg",
        events: "04 Events",
        class: "h-[250px]"
    }
]

const cityContainer = document.getElementById("cities");

cities.forEach(city => {
    const cityHTML = `
        <div class=" ${city.class} cursor-pointer group/item overflow-hidden relative">
            <img class="w-full h-full object-cover group-hover/item:scale-110" src="${city.image}" alt="">
            <div class=" flex gap-2 items-end p-3 justify-center w-full h-full absolute top-[100%] group-hover/item:top-0 left-0 bg-gradient-to-b from-transparent to-blue-500">
                <span class="font-semibold text-lg text-zinc-100">${city.name}</span>
                <p class="text-zinc-200">${city.events}</p>
            </div>
        </div>
        `;
    cityContainer.innerHTML += cityHTML;
});


const organizers = [
    {
        id: 1,
        name: "All",
    },
    {
        id: 2,
        name: "Music",
    },
    {
        id: 3,
        name: "Visual Arts",
    },
    {
        id: 4,
        name: "Holiday",
    },
    {
        id: 5,
        name: "Health",
    },
    {
        id: 6,
        name: "Hobbies",
    },
    {
        id: 7,
        name: "Food",
    },
    {
        id: 8,
        name: "Fitness",
    }
]

const organizersContainer = document.getElementById('organizers-container');

organizers.forEach(organizer => {
    const organizerHTML = `
        <button class="text-zinc-700 bg-zinc-200 hover:bg-blue-500 hover:text-zinc-200 px-4 py-2 rounded">${organizer.name}</button>
    `;
    organizersContainer.innerHTML += organizerHTML;
})

const featuredOrganizers = [
    {
        id: 1, 
        title: "The healthCare center",
        image: "https://carrumhealth.com/wp-content/uploads/2024/01/center-of-excellence.jpg",
        events: "16 events",
        address: "NewYork"
    },
    {
        id: 2, 
        title: "Tech Innovators Collective",
        image: "https://cms.afrotech.com/wp-content/uploads/2024/03/GoogleTECxAT_header.png",
        events: "10 events",
        address: "London"
    },
    {
        id: 3, 
        title: "Bridal shower decoration",
        image: "https://www.tamarindglobal.com/images/events/events.jpg",
        events: "20 events",
        address: "Paris"
    },
    {
        id: 4, 
        title: "Wedding Events decoration",
        image: "https://www.simplybusiness.co.uk/wp-content/uploads/sites/3/2024/06/how-to-become-an-event-organiser-uk.jpg",
        events: "12 events",
        address: "Tokyo"
    },
    {
        id: 5, 
        title: "The café Project is opening",
        image: "https://perfectdailygrind.com/wp-content/uploads/2017/03/t3-e1488947445695.jpg",
        events: "18 events",
        address: "New York"
    },
    {
        id: 6, 
        title: "The gym",
        image: "https://www.ezfacility.com/wp-content/uploads/2019/08/gym-event-ideas.jpg",
        events: "25 events",
        address: "London"
    }
] 
const featuredOrganizersContainer = document.getElementById("featuredOrganizers");

featuredOrganizers.forEach(featuredOrganizer => {
    const featuredOrganizerHTML = `
        <div class="w-full h-full hover:shadow-lg hover:shadow-blue-300 hover:cursor-pointer group/item mt-10 flex border">
            <div class="w-1/2 overflow-hidden m-3">
                <img class="h-full w-full group-hover/item:scale-105 group-hover/item:saturate-150 object-cover" src="${featuredOrganizer.image}" alt="">
            </div>
            <div class="w-1/2 pt-2 pr-2 pl-2 flex flex-col justify-between">
                <div class="content flex flex-col gap-1">
                    <p class="font-semibold text-zinc-600 text-[17px]">${featuredOrganizer.title}</p>
                    <div class="flex gap-2 items-center">
                        <i class="fa-solid fa-calendar-days text-blue-600"></i>
                        <p class="text-[14px] text-zinc-600">${featuredOrganizer.events}</p>
                    </div>
                    <div class="flex gap-2 items-center">
                        <i class="fa-solid fa-location-dot text-blue-600"></i>
                        <p class="text-[14px] text-zinc-600">${featuredOrganizer.address}</p>
                    </div>
                </div>
                <div class="organizer border-t flex gap-3 items-center py-1">
                    <div class="w-10 h-10 border flex items-center justify-center rounded-full">
                        <i class="fa-solid fa-upload text-blue-500"></i>
                    </div>
                    <div class="w-10 h-10 border flex items-center justify-center rounded-full">
                        <i class="fa-regular fa-heart text-blue-500"></i>
                    </div>
                </div>
            </div>
        </div>
    `;
    featuredOrganizersContainer.innerHTML += featuredOrganizerHTML;
});

const speakers = [
    {
        id: 1,
        name: "John Doe",
        image: "https://media.istockphoto.com/id/1046045698/photo/smiling-young-man.jpg?s=612x612&w=0&k=20&c=Z8nSAa5e7-UrOtFGJYvKGjEgmlADiTXqDYT1_cmtthI=",
        title: "Developer"
    },
    {
        id: 2,
        name: "Jane Smith",
        image: "https://media.istockphoto.com/id/2033799615/photo/purposeful-black-woman-wearing-blue-shirt-and-round-eyeglasses-and-standing-wit-folded-on.jpg?s=612x612&w=0&k=20&c=h7ZgcEmE4NZONycORzNg62n6Npdo782b68FY7j0yRP8=",
        title: "Designer"
    },
    {
        id: 3,
        name: "Bob Johnson",
        image: "https://media.istockphoto.com/id/1351147761/photo/studio-portrait-of-attractive-20-year-old-bearded-man.jpg?s=612x612&w=0&k=20&c=nwIeR-YpSGNessrkAAbIdYMK2AdfEdihxEoAMYfPyA4=",
        title: "Marketing"
    },
    {
        id: 4,
        name: "Emily Davis",
        image: "https://media.istockphoto.com/id/522189205/photo/its-all-good.jpg?s=612x612&w=0&k=20&c=8sMw67iXtNZA3Ln5uovpX6NwwrgPMXKbBvTpJPj-zn4=",
        title: "Product Manager"
    },
    {
        id: 5,
        name: "David Wilson",
        image: "https://media.istockphoto.com/id/1333101714/photo/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated.jpg?s=612x612&w=0&k=20&c=HlbGbUI1VeQVHYgcVOS3OhlG5tryu59AkUiy4DQDrKs=",
        title: "Data Scientist"
    },
    {
        id: 6,
        name: "Sarah Thompson",
        image: "https://media.istockphoto.com/id/972911912/photo/portrait-of-serious-woman.jpg?s=612x612&w=0&k=20&c=k78tPi1arYBFW3JdgPurD6BK8qLQhG3ElmlZFKXgTTA=",
        title: "QA Engineer"
    },
    {
        id: 7,
        name: "Michael Lee",
        image: "https://media.istockphoto.com/id/879613556/photo/young-bearded-handsome-indian-man-wearing-traditional-clothing-against-gray-background.jpg?s=612x612&w=0&k=20&c=bPMbad8oPtS5dHyiLYpDn59gSVeXQEQ_jNari-tO39I=",
        title: "Project Manager"
    },
    {
        id: 8,
        name: "Karen Brown",
        image: "https://media.istockphoto.com/id/968432068/photo/handsome-confident-businessman.jpg?s=612x612&w=0&k=20&c=MzDT0rAzPcPrhorEUoiJIOVFb0w2oL4icvVJLDzYP_8=",
        title: "UX/UI Designer"
    }
]

const speakerContainer = document.getElementById("speakers");

speakers.forEach(speaker => {
    const speakerHTML = `
        <div class="border py-10 hover:shadow-lg overflow-hidden group/item hover:bg-blue-50 cursor-pointer flex flex-col gap-2 items-center justify-center">
            <img class="w-28 h-28 rounded-full object-cover" src="${speaker.image}" alt="">
            <p class="font-semibold text-zinc-700 text-lg">${speaker.name}</p>
            <p class="font-base text-zinc-500">${speaker.title}</p>
            <div class="flex gap-2 transform translate-y-[4.5rem] group-hover/item:-translate-y-0">
                <i class="text-xl text-zinc-700 hover:text-blue-500 fa-brands fa-whatsapp"></i>
                <i class="text-xl text-zinc-700 hover:text-blue-500 fa-brands fa-instagram"></i>
                <i class="text-xl text-zinc-700 hover:text-blue-500 fa-brands fa-x-twitter"></i>
                <i class="text-xl text-zinc-700 hover:text-blue-500 fa-brands fa-linkedin-in"></i>
            </div>
        </div>
    `;
    speakerContainer.innerHTML += speakerHTML;
});

const blogs = [
    {
        id: 1,
        title: "The Impact of AI on Our Workplace",
        subtitle: "The Impact of AI on Our Workplace is a very important topic of our work place development process",
        image: "https://media.istockphoto.com/id/1518657698/photo/the-impact-of-ai-on-jobs-fired-business-people-leaving-the-office.jpg?s=612x612&w=0&k=20&c=VznDZ8eDO6aOfXl8iyGxdxCjeoAJfw8sFyesDlSJrrA=",
        author: "John Doe",
        authorImage: "https://media.istockphoto.com/id/1358152477/photo/portrait-of-smiling-african-handsome-raising-head-in-grey-background.jpg?s=612x612&w=0&k=20&c=eVKtSB0X-dcD1FL73cWl0fQUp5x8kda6BgQk_0lYE0s=",
        date: "July 15, 2022",
        class: "row-span-3 flex-col",
        divImage: "w-full"
    },
    {
        id: 2,
        title: "The Future of AI in Education",
        subtitle: "The Future of AI in Education is a very important topic of our work place development process",
        image: "https://media.istockphoto.com/id/2180716142/photo/kids-engaging-with-digital-chat-on-shared-laptop-ai-chatbot-conversation-ai-artificial.jpg?s=612x612&w=0&k=20&c=4DLumEYeVBabOlMZe1-tnyhVkMqcaSkSVKqJIxdxGNk=",
        author: "Jane Smith",
        authorImage: "https://media.istockphoto.com/id/1504549447/photo/portrait-of-a-serious-black-woman.jpg?s=612x612&w=0&k=20&c=susF6aBnwFUpGGsIWJqEYfFnMgPYMVo_CyU2B6BjlxI=",
        date: "July 10, 2022",
        class: "",
        divImage: "w-4/5"
    },
    {
        id: 3,
        title: "The Evolution of AI in Healthcare",
        subtitle: "The Evolution of AI in Healthcare is a very important topic of our work place development process",
        image: "https://media.istockphoto.com/id/1489956013/photo/medical-technology-ai-technology-is-utilized-by-doctors-for-diagnosing-increasing-the.jpg?s=612x612&w=0&k=20&c=kB9Jwz3S8XFiQO-dSkwGB1IUdbR_ouLjRUKKLPFKj9Y=",
        author: "Bob Johnson",
        authorImage: "https://media.istockphoto.com/id/1152801700/photo/portrait-of-a-african-man-on-white-backgroud.jpg?s=612x612&w=0&k=20&c=jctE__JrMDY-RE_v8cLxZFxIpWmQkYn2k939mfdY_KI=",
        date: "July 5, 2022",
        class: "",
        divImage: "w-4/5"
    },
    {
        id: 4,
        title: "The Impact of AI on Our Society",
        subtitle: "The Impact of AI on Our Society is a very important topic of our work place development process",
        image: "https://media.istockphoto.com/id/1210902669/photo/smart-city-and-communication-network-concept-5g-lpwa-wireless-communication.jpg?s=612x612&w=0&k=20&c=ayB3NY-r4BIjX3q19_xFpOsLZtLPcgYyrvR5tkOXlLg=",
        author: "Emily Thompson",
        authorImage: "https://media.istockphoto.com/id/667392092/photo/concentrated-attractive-young-woman.jpg?s=612x612&w=0&k=20&c=we0XYCQvsYDJ_HptN9BUr-tYozwTVRwuHIBG2J4N9n0=",
        date: "July 2, 2022",
        class: "",
        divImage: "w-4/5"
    }
]

const blogContainer = document.getElementById("blogs");

blogs.forEach(blog => {
    const blogHTML = `
        <div class="${blog.class} flex gap-3 border hover:shadow-lg hover:bg-blue-50 cursor-pointer">
            <div class="${blog.divImage}">
                <img class="w-full h-full object-cover" src="${blog.image}" alt="">
            </div>
            <div class="p-3 flex flex-col justify-between h-full gap-2">
                <div class="flex flex-col gap-2">
                    <p class="font-semibold text-zinc-700 text-lg">${blog.title}</p>
                    <p class="text-base text-zinc-600">${blog.subtitle}</p>
                </div>
                <div class="flex gap-4 items-center">
                    <div class="flex gap-2 items-center">
                        <img class="w-6 h-6 rounded-full object-cover" src="${blog.authorImage}" alt="">
                        <p class="text-zinc-600">${blog.author}</p>
                    </div>
                    <div class="flex gap-2 items-center">
                        <i class="text-blue-600 fa-solid fa-magnifying-glass"></i>
                        <p class="text-zinc-600">${blog.date}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    blogContainer.innerHTML += blogHTML;
});

const testimonials = [
    {
        id: 1,
        name: "John Doe",
        title: "CEO, ABC Company",
        image: "https://media.istockphoto.com/id/1540210279/photo/efficient-factory-management-portrait-of-smiling-senior-manager-businessman-or-ceo-in.jpg?s=612x612&w=0&k=20&c=4CvpYkXRzf5eyotS3kPMxtLHt7brL1KC-B5N0ei-Ieg=",
        testimonial: "EventLab made booking tickets seamless and stress-free! The intuitive interface, instant confirmation saved me so much time."
    },
    {
        id: 2,
        name: "Jane Smith",
        title: "Product Manager",
        image: "https://media.istockphoto.com/id/1824226141/photo/happy-woman-portrait-and-small-business-professional-in-logistics-supply-chain-or-fashion.jpg?s=612x612&w=0&k=20&c=dCXUtI1NpfZHVucEQxEwc6Y4jyU4dIorm8Qn_niCnSI=",
        testimonial: "EventLab's AI-powered features made planning events more efficient and enjoyable."
    },
    {
        id: 3,
        name: "Bob Johnson",
        title: "Software Engineer",
        image: "https://media.istockphoto.com/id/1536191188/photo/web-developers-using-a-computer-together-in-an-office.jpg?s=612x612&w=0&k=20&c=MqBrIeX_itBLU7pr5d3rQ7ZrB6_mzJ_ZSEbb4ONfkiQ=",
        testimonial: "EventLab's AI-powered features made booking tickets seamless and stress-free. The intuitive interface, instant confirmation saved me so much time."
    }
]

const testimonialContainer = document.getElementById("testimonials");

testimonials.forEach(testimonial => {
    const testimonialHTML = `
        <div class="border bg-white hover:shadow-xl">
            <div class="border-b py-6 px-8 flex gap-4 items-center relative">
                <img class="w-11 h-11 rounded-full object-cover" src="${testimonial.image}" alt="">
                <div>
                    <p class="font-semibold text-lg text-zinc-600">${testimonial.name}</p>
                    <p class="text-zinc-500 font-regular">${testimonial.title}</p>
                </div>
                <i class="absolute right-[20%] bottom-[-17px] text-blue-500 text-3xl fa-solid fa-quote-right"></i>
            </div>
            <div class="p-8 flex flex-col gap-3">
                <div>
                    <i class=" text-blue-500 fa-solid fa-star"></i>
                    <i class=" text-blue-500 fa-solid fa-star"></i>
                    <i class=" text-blue-500 fa-solid fa-star"></i>
                    <i class=" text-blue-500 fa-solid fa-star"></i>
                    <i class=" text-blue-500 fa-solid fa-star"></i>
                </div>
                <p class="text-base text-zinc-500">${testimonial.testimonial}</p>
            </div>
        </div>
    `;
    testimonialContainer.innerHTML += testimonialHTML;
});