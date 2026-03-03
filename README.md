# 🚀 QuickHire – Full Stack Job Board Application

QuickHire is a full-stack mini job board application built with **Next.js (Frontend)** and **Node.js/Express (Backend)**.  

It allows users to browse job listings, search by title and location, view job details, and submit applications.  
An admin panel enables creating and deleting job posts.

---

## 🌐 Live Links

🔹 **Live Frontend:**  
https://quick-hire-job-xi.vercel.app/

🔹 **Backend API (Production):**  
https://quick-hire-backend-psi.vercel.app/api

🔹 **GitHub Repository:**  
https://github.com/MohammadJewelRana/quick-hire

🔹 **Demo Video:**  
https://drive.google.com/file/d/1IdhjMHkHhitHDXimAKx6Tp3o4J6QHPaj/view?usp=sharing

---

## 🛠 Tech Stack

### Frontend
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Redux Toolkit (RTK Query)
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- RESTful API Architecture

### Deployment
- Frontend: Vercel
- Backend: Vercel
- Database: MongoDB Atlas

---

## ✨ Features

### 👤 User Features
- View all job listings
- Search by job title
- Filter by location
- Live search suggestions dropdown
- View job details page
- Apply to jobs with resume link
- Responsive UI (Mobile, Tablet, Desktop)

### 🛠 Admin Features
- Create new job listing
- Delete job listing
- Persistent database storage

### ⚙️ Technical Features
- RESTful API endpoints
- Model relationship (Job → Applications)
- Input validation (required fields, email format, URL validation)
- Clean folder structure
- Reusable components
- Environment-based configuration

---
## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## 🔐 Environment Variables

This project requires environment variables for both frontend and backend configuration.

---
 

 

 

```env
# ===============================
# FRONTEND ENVIRONMENT VARIABLES
# ===============================

# Production Backend API URL
NEXT_PUBLIC_API_URL=https://quick-hire-backend-psi.vercel.app/api

# Local Development Backend URL (Optional)
# NEXT_PUBLIC_API_URL=http://localhost:5000/api

# ===============================
# BACKEND ENVIRONMENT VARIABLES
# ===============================

# Application Environment
NODE_ENV=development

# Server Port
PORT=5000

# MongoDB Database Connection String
DATABASE_URL=mongodb+srv://[projectname]:[password]@cluster0.843endu.mongodb.net/quick-hire-db?retryWrites=true&w=majority

