# Purpose
A cozy single-page app to help pet owners keep their pets warm, safe, and healthy during winter — browse services, view/book winter care, read tips, and manage your profile.

# Live URL
https://pet-care-123456.netlify.app/  

# Key Features

Winter-themed responsive SPA (mobile/tablet/desktop) with persistent navbar & footer.

Hero slider (Swiper) showcasing cozy pet outfits.

“Popular Winter Care Services” loaded from JSON — cards with image, name, rating, price, and View Details.

Protected Service Details page (requires login) with a “Book Now” form and success toasts.

Authentication (Email/Password + Google) using Firebase; My Profile page with user info and update button.

Extra sections: Winter Care Tips, Meet Our Expert Vets, and one additional relevant section.

Subtle animations (AOS / Framer Motion / Swiper), toast notifications, and SPA routing with reload-safe routes.

Environment variables for Firebase config; hosted on Netlify / Surge / Firebase Hosting.

# NPM packages used (examples)

react, react-dom, react-router-dom

firebase

swiper (hero slider)

react-hot-toast (toasts)

aos (scroll animations)

tailwindcss / daisyui (styles)

framer-motion (optional subtle animations)