🚖 Ajay Taxi Service
A modern, responsive tour & travel car booking website built with Next.js, Express.js, and Tailwind CSS.
This platform allows customers to easily explore available fleets, book rides, and send inquiries directly to the owner’s email — no database required.

✨ Features
🏠 Landing Page – Professional homepage showcasing taxi services.
🚗 Fleet Section – Display of available cars (Dzire, Hatchback, SUV, etc.) with images.
📞 Contact Form – Messages are sent directly to the owner’s email.
🚕 Book Ride Form – Simple ride booking request system.
🌙 Modern UI – Built with Tailwind CSS and fully responsive.
⚡ Fast & Lightweight – No database overhead, direct email communication.
🛠 Tech Stack
Frontend: Next.js + Tailwind CSS
Backend: Node.js + Express.js
Email Service: TLS
📂 Project Structure
Ajay-Taxi-Service/ Home/
│── components/        # Reusable UI components (Hero, Fleet, Contact, etc.)
│── pages/             # Next.js pages (index.js, api routes)
│── public/            # Static assets (images, icons)
│── styles/            # Global styles & Tailwind config
│── server/            # Express.js server (email handling)
│── package.json       # Dependencies & scripts
│── tailwind.config.js # Tailwind configuration
🚀 Getting Started
1. Clone the Repository
git clone https://github.com/your-username/Ajay-Taxi-Service.git
cd Ajay-Taxi-Service
cd Home
2. Install Dependencies
npm install
3. Set Environment Variables
Create a .env.local file in the root directory:

EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
EMAIL_TO=owner-email@example.com
4. Run the Development Server
npm run dev
Now open 👉 http://localhost:3000 to view the site.

📬 Deployment
Frontend: Deploy easily on Vercel.
Backend: Host the Express.js server on Render, Railway, or Heroku.
📄 License
This project is licensed under the MIT License – free to use and modify.

👉 Built with ❤️ for Ajay Taxi Service customers to book rides easily.
