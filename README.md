# Vue.js and Node.js Full Stack Application

This is a full-stack application built with Vue.js for the frontend and Node.js (Express) for the backend. The backend is connected to MongoDB using Mongoose.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (https://nodejs.org/)
- MongoDB (https://www.mongodb.com/try/download/community)

## Backend Setup

1. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

2. Install dependencies: npm install

3. Create a .env file in the backend directory and add the following:
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string

4. Start the backend server: npm start

Frontend Setup

1. Navigate to the frontend directory: cd frontend

2. Install dependencies: npm install

3. Start the frontend development server: npm run dev

(Frontend is not connected to backend, backend will proceed everything and save all resumes into database(it was tested with Postman), also you can get all the resumes from the database, I tried to use Vuex but wasn't able to get it to work, My idea was to save Resume objects to Vuex store then send it to the database then I would fetch them and show them in the menu)
