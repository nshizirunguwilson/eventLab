function handleDarkMode() {
    const moonIcon = document.getElementById("moon");
    const sunIcon = document.getElementById("sun");

    // Switch visibility
    moonIcon.classList.add("hidden");
    sunIcon.classList.remove("hidden");

    localStorage.setItem("mode", "dark")
}

function handleLightMode() {
    const moonIcon = document.getElementById("moon");
    const sunIcon = document.getElementById("sun");
    
    // Switch visibility
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");

    localStorage.setItem("mode", "light");
}

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