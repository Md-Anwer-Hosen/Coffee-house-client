# ☕ Coffee Store – Full Stack Web Application

Coffee Store is a full-stack web application where users can view, add, update, and delete coffee products.
The project is built using React on the client side and Node.js with Express and MongoDB on the server side.

## 🔗 Live Links

- Client (Firebase): https://coffee-store-auth-5ea79.web.app
- Server (Vercel): https://coffee-store-server-virid-tau.vercel.app

## ✨ Features

- View all coffee products
- Add new coffee items
- Update existing coffee information
- Delete coffee products
- User management (add, view, delete users)
- RESTful API
- Responsive UI

## 🛠️ Tech Stack

### Frontend

- React
- React Router
- Firebase Hosting
- Tailwind CSS

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Vercel

### Tools

- Git & GitHub
- Vercel CLI
- Firebase CLI

## 🔌 API Endpoints

### Coffee Routes

- GET /coffees
- GET /coffees/:id
- POST /coffees
- PUT /coffees/:id
- DELETE /coffees/:id

### User Routes

- GET /users
- POST /users
- DELETE /users/:id
- PATCH /users

## 🔐 Environment Variables

Create a `.env` file in the server root and add:

DB_USER=your_mongodb_username  
DB_PASSWORD=your_mongodb_password

## 🚀 Run Locally

### Client

```bash
npm install
npm run dev


npm install
nodemon index.js


## 📁 Project Structure

coffee-store/
│
├── client/
├── server/
│   ├── index.js
│   ├── vercel.json
│   └── package.json
```
