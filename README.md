EstateHub – Real Estate Listing App
A full-stack real estate application where users can browse properties, view details, and add new properties. The project consists of a React frontend and a Node.js + Express backend connected to MongoDB Atlas, deployed on Vercel (frontend) and Render (backend).
Live Demo: https://real-estate-app-bkt8-exz4xl7yh-mackvngtechs-projects.vercel.app

Features
Browse all properties in a card/grid view
Search properties by location or price
View detailed information for each property
Add new properties via a form
Dark mode toggle with persistent settings
Fully responsive design


Technologies & Libraries

Frontend:
React (Functional Components & Hooks)
React Router v6
Tailwind CSS for styling
Vite for bundling and dev server

Backend:
Node.js + Express.js
MongoDB Atlas (with Mongoose ORM)
CORS for cross-origin requests
Nodemon for development

Deployment:
Frontend: Vercel
Backend: Render

Project Structure

real-estate-app/
├── backend/
│   ├── models/          # Mongoose models
│   │   └── Property.js
│   ├── routes/          # API routes
│   │   └── properties.js
│   ├── uploads/         # Property images
│   ├── server.js        # Express server
│   ├── seed.js          # Optional seed script
│   ├── package.json
│   └── .env             # Environment variables
├── frontend/
│   ├── src/
│   │   ├── components/  # Reusable components (cards, search, pagination)
│   │   ├── pages/       # Home, PropertyDetails, AddProperty
│   │   ├── App.jsx      # Main app component with routes
│   │   ├── main.jsx     # Entry point
│   │   └── index.css
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
└── README.md

Setup & Installation

Backend

Navigate to the backend folder:
cd backend
Install dependencies:
npm install
Create a .env file with the following:
MONGO_URI=your_mongodb_connection_string
PORT=5000
Start the backend locally:
npm run dev
The server will run at http://localhost:5000
API endpoint example: http://localhost:5000/api/properties


Frontend
Navigate to the frontend folder:
cd frontend
Install dependencies:
npm install
Create a .env file with:
VITE_API_URL=http://localhost:5000
Start the frontend locally:
npm run dev
The app will run at http://localhost:5173

Deployment Notes
Backend: Deployed on Render. Make sure CORS allows requests from your frontend.
Frontend: Deployed on Vercel. Ensure VITE_API_URL points to the live backend URL.
Case-sensitive file imports are important for Vercel/Linux environments.

Challenges & Solutions
Case-sensitive file imports
Fixed by renaming files and matching imports exactly.

Frontend-backend connection
Configured VITE_API_URL and CORS in backend.
MongoDB Atlas access
Added Render server IP to MongoDB whitelist.
Deployment environment variables
Configured separately for Vercel and Render to ensure live app works correctly.
Time Spent
Approximately 8 hrs from development to deployment.

Future Improvements
User authentication and role-based access
Property image upload via cloud storage
Filtering by property type, area, and features
Pagination and sorting improvements

License
This project is open-source and free to use.
