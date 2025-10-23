InvestIQ - Portfolio Allocator
</br>
InvestIQ is a web application designed to help users allocate their investments across different asset classes (bonds, </br>stocks, cash) based on predefined risk strategies (Conservative, Moderate, Aggressive). The application features user </br>authentication, real-time allocation validation, interactive visualizations, and portfolio history saving for logged-in</br> users.</br></br>

This project is built using the MERN stack (MongoDB, Express, React, Node.js). The frontend is deployed on Vercel, and the </br>backend is deployed on Render.</br></br>

Live Application: https://invest-iq-omega.vercel.app/</br></br>

GitHub Repository: https://github.com/shubham25-stack/InvestIQ.git</br></br>

Features</br></br>

User Authentication: Secure user registration and login using JWT (JSON Web Tokens).</br></br>

Investment Strategies: Select from Conservative, Moderate, or Aggressive strategies with defined allocation constraints.</br></br>

Allocation Calculator: Input total investment amount and desired allocation percentages.</br></br>

Real-time Validation: Instant feedback on whether inputs meet strategy constraints and sum to 100%.</br></br>

Pie Chart Visualization: See a clear visual representation of the current allocation percentages using Recharts.</br></br>

Portfolio History: Logged-in users can save their calculated portfolios and view their history.</br></br>

Responsive Design: User interface adapts to different screen sizes using Tailwind CSS.</br></br>

Tech Stack</br></br>

Frontend: React, Vite, Tailwind CSS, Recharts</br></br>

Backend: Node.js, Express</br></br>

Database: MongoDB (via Mongoose)</br></br>

Authentication: JWT (jsonwebtoken), bcryptjs</br></br>

State Management: React Context API</br></br>

API Client: Axios</br></br>

Deployment: Frontend on Vercel, Backend on Render</br></br>

Project Structure</br></br>

This project consists of two separate applications/folders:</br></br>

Frontend: Contains the React application code (/public, /src, etc.). Built with Vite.</br></br>

Backend: Contains the Node.js/Express API code (/config, /controllers, /middleware, /models, /routes, etc.).</br></br>

Getting Started</br></br>

Prerequisites</br></br>

Node.js (v18 or later recommended)</br></br>

npm or yarn</br></br>

MongoDB Atlas account (or a local MongoDB instance)</br></br>

Vercel Account (for frontend deployment)</br></br>

Render Account (for backend deployment)</br></br>

Setup</br></br>

Clone the repository:</br></br>

git clone [https://github.com/shubham25-stack/InvestIQ.git](https://github.com/shubham25-stack/InvestIQ.git)</br>
cd InvestIQ</br></br></br>


Install Backend Dependencies:</br></br>

cd backend</br>
npm install</br></br></br>


Install Frontend Dependencies:</br></br>

cd ../frontend # Navigate to the frontend directory</br>
npm install</br></br></br>


Set up Backend Environment Variables:</br></br>

Create a .env file in the root of the backend folder.</br></br>

Add your MongoDB connection string, JWT secret, and frontend URL for CORS:</br></br>

PORT=5000</br>
MONGO_URI=your_mongodb_connection_string</br>
JWT_SECRET=your_super_secret_jwt_key_make_it_long_and_random</br>
CORS_ORIGIN=http://localhost:5173 # Or your frontend dev port (e.g., 3000)</br></br></br>


Replace placeholders with your actual values.</br></br>

Set up Frontend Environment Variables:</br></br>

Create a .env file in the root of the frontend folder.</br></br>

Add the URL for your backend API:</br></br>

VITE_API_URL=http://localhost:5000 # Your backend URL for local development</br></br></br>


Ensure your frontend code (e.g., AuthContext, PortofolioContext) uses import.meta.env.VITE_API_URL when making axios calls,</br> like: axios.post(${import.meta.env.VITE_API_URL}/api/users/login, ...)</br></br>

Running Locally</br></br>

Start the Backend Server:</br></br>

Navigate to the backend folder.</br></br>

Run npm start (or npm run dev if you have nodemon configured).</br></br>

The API should be running (e.g., http://localhost:5000).</br></br>

Start the Frontend Server:</br></br>

Navigate to the frontend folder.</br></br>

Run npm run dev.</br></br>

The React app should open in your browser (e.g., http://localhost:5173).</br></br>

Deployment</br></br>

Backend (Render)</br></br>

Push your backend code to a GitHub repository (it seems it's already part of your main repo).</br></br>

Create a new "Web Service" on Render and connect it to your repository. Point it to the backend sub-directory if necessary.</br></br>
</br>
Build Command: npm install</br></br>

Start Command: npm start</br>
</br>
Add Environment Variables in the Render dashboard:</br></br>

MONGO_URI</br></br>

JWT_SECRET</br></br>

CORS_ORIGIN: Set this to your Vercel frontend URL (https://invest-iq-omega.vercel.app).</br>

Deploy. Note your Render backend URL (e.g., https://your-backend-name.onrender.com).</br>
</br>
Frontend (Vercel)</br>

Push your frontend code to your GitHub repository.</br>

Create a new project on Vercel and connect it to your repository. Point it to the frontend sub-directory.</br>

Configure Build Settings:</br>

Framework Preset: Vite</br>

Build Command: npm run build (or vite build)</br>

Output Directory: dist (relative to the frontend directory)</br>

Add Environment Variable: Go to Settings -> Environment Variables and add:</br>

VITE_API_URL: Set this to your Render backend URL (e.g., https://your-backend-name.onrender.com).</br>

Deploy.</br>

API Endpoints</br>

POST /api/users/register: Register a new user.</br>

POST /api/users/login: Log in a user and get a JWT token.</br>

POST /api/portfolios: (Protected) Save a new portfolio allocation for the logged-in user.</br>

GET /api/portfolios: (Protected) Get the portfolio history for the logged-in user.</br>

(Note: When calling from the frontend, prepend your deployed backend URL to these paths, e.g., ${import.meta.env.VITE_API_URL}/api/users/login)</br>