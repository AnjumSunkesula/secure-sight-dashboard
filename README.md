🧠 Tech Stack & Decisions
  Framework: [Next.js 15 (App Router)] – selected for its full-stack capabilities and optimized routing.
  
  Database: [PostgreSQL] – hosted on [Neon.tech] for modern, serverless Postgres support.
  
  ORM: [Prisma] – chosen for type safety and easy schema migrations.
  
  UI Library: TailwindCSS – used for utility-first styling and rapid UI development.
  
  Video Player: <video> HTML5 tag – chosen for simplicity and native support.
  
  Hosting: [Vercel] – preferred for its tight integration with Next.js and easy CI/CD setup.
  

🚀 Deployment Instructions
  Note: Due to a Prisma client build issue on Vercel, the project is not fully functional when deployed. Please run it locally to test all features.

  #Local Setup
  git clone https://github.com/your-username/secure-sight-dashboard.git
  cd secure-sight-dashboard
  npm install
  
  # Pull database schema and generate Prisma client
  npx prisma db pull
  npx prisma generate
  
  # Start the development server
  npm run dev
  Make sure to create a .env file and add your DATABASE_URL: DATABASE_URL="your_postgres_connection_string"

  
🛠️ If I Had More Time…
   =>Fix Prisma client generation during Vercel build using vercel.json and build hooks.
  
   =>Add proper loading states and error messages for API calls.
  
   =>Implement authentication (admin login to resolve incidents).
  
   =>Add video playback enhancements (e.g., scrubber, fullscreen toggle).
