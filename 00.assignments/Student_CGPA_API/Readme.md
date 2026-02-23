# 📘 Student CGPA API (Backend with Node.js)

---

## 📁 GitHub Repository

Source Code:

👉 https://github.com/hetsakariya0111-gi/backend_with_nodejs/tree/main/00.assignments/Student_CGPA_API

---

## 📮 Postman Documentation

Public API documentation with requests and sample responses:

👉 https://documenter.getpostman.com/view/50839263/2sBXcEmgfJ

---

## 🚀 Live Deployment (Render)

API is deployed and publicly accessible:

👉 https://backend-with-nodejs-cmjx.onrender.com

---

## 🚀 Project Title

**Student CGPA Management REST API — Assignment 1**

---

## 🎯 Objective

The objective of this project is to build a RESTful API using **Node.js** and **Express.js** that manages student academic performance records using an **in-memory JSON database**.

This assignment demonstrates backend fundamentals including:

* REST API design
* Static and dynamic routing
* Data filtering and aggregation
* Proper HTTP status handling
* API documentation and deployment

No external database is used; all data is stored inside a JSON array.

---

## 🧠 Features Implemented

* Express.js server setup
* In-memory JSON data handling
* Static GET routes
* Dynamic GET routes using route parameters
* Aggregation logic (average & topper)
* Filtering by branch
* Proper status codes and error handling
* CORS middleware enabled

---

## ✅ Implemented Routes

| Method | Route                        | Description                   |
| ------ | ---------------------------- | ----------------------------- |
| GET    | /students                    | Get all students              |
| GET    | /students/topper             | Get student with highest CGPA |
| GET    | /students/average            | Get average CGPA              |
| GET    | /students/count              | Get total students count      |
| GET    | /students/:id                | Get student by ID             |
| GET    | /students/branch/:branchName | Get students by branch        |

---

## 🌐 Sample API URLs

```
https://backend-with-nodejs-cmjx.onrender.com/students
https://backend-with-nodejs-cmjx.onrender.com/students/topper
https://backend-with-nodejs-cmjx.onrender.com/students/average
https://backend-with-nodejs-cmjx.onrender.com/students/count
https://backend-with-nodejs-cmjx.onrender.com/students/3
https://backend-with-nodejs-cmjx.onrender.com/students/branch/CSE
```

---

## ⚙️ Steps to Run Locally

1️⃣ Clone the repository

```
git clone https://github.com/hetsakariya0111-gi/backend_with_nodejs.git
```

2️⃣ Navigate to project folder

```
cd backend_with_nodejs/00.assignments/Student_CGPA_API
```

3️⃣ Install dependencies

```
npm install
```

4️⃣ Start the server

```
node index.js
```

(or)

```
npm start
```

5️⃣ Server will run on:

```
http://localhost:3000
```

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* JavaScript (ES6)
* REST API
* Postman
* Render (Deployment)

---

## 📚 Learning Outcomes

After completing this project:

* Designed RESTful GET APIs
* Implemented dynamic route parameters
* Performed filtering and aggregation operations
* Used proper HTTP response codes
* Deployed backend APIs professionally
* Created production-style API documentation

---

## 👨‍💻 Author

**Het Sakariya**
Backend Development Practice — Node.js & Express.js
