# 📘 State Statistics Management API (Backend with Node.js)

---

## 📁 GitHub Repository

**Source Code:**  
👉 https://github.com/hetsakariya0111-gi/backend_with_nodejs/tree/main/00.assignments/State_Statistics_Management_API

---

## 📮 Postman Documentation

Public API documentation with requests and sample responses:  
👉 https://documenter.getpostman.com/view/50839263/2sBXcEmgfJ

---

## 🚀 Live Deployment (Render)

API is deployed and publicly accessible:  
👉 https://backend-with-nodejs-2.onrender.com

---

## 🚀 Project Title

**State Statistics Management REST API — Assignment 3**

---

## 🎯 Objective

The objective of this project is to build a RESTful API using **Node.js** and **Express.js** that manages statistical data of Indian states using an in-memory JSON database.

This assignment demonstrates backend development fundamentals including:

* REST API design principles  
* Dynamic routing and route parameters  
* State filtering, aggregation, and retrieval  
* Resource creation, replacement, and partial updates  
* Proper HTTP status handling  
* Middleware usage and deployment  

No external database is used; all state data is stored inside a JSON array.

---

## 🧠 Features Implemented

* Express.js server setup  
* In-memory state data handling  
* Multiple GET routes  
* POST route for creating new states with auto-generated ID  
* PUT routes for full state replacement and targeted field updates (budget, population)  
* PATCH routes for partial updates (literacy, GDP, and other fields)  
* DELETE routes for removing states by ID, name, and low literacy  
* Proper status codes and error handling  
* CORS middleware enabled  
* JSON body parsing using `express.json()`

---

## ✅ Implemented Routes

| Method | Route                              | Description                               |
| ------ | ---------------------------------- | ----------------------------------------- |
| GET    | `/states`                           | Get all states                             |
| GET    | `/states/:id`                       | Get state by ID                            |
| GET    | `/states/highest-gdp`               | Get state with highest GDP                 |
| POST   | `/states`                           | Create new state                           |
| PUT    | `/states/:id`                       | Replace entire state                        |
| PUT    | `/states/:id/budget`                | Update annual budget                        |
| PUT    | `/states/:id/population`            | Update population                           |
| PATCH  | `/states/:id/literacy`              | Update literacy rate only                   |
| PATCH  | `/states/:id/gdp`                    | Update GDP only                             |
| PATCH  | `/states/:id`                        | Partial update of state fields             |
| DELETE | `/states/:id`                        | Delete state by ID                          |
| DELETE | `/states/name/:stateName`            | Delete state by name (case-insensitive)    |
| DELETE | `/states/low-literacy/:percentage`  | Delete all states below a literacy threshold |

---

## 🌐 Sample API URLs

GET  https://backend-with-nodejs-2.onrender.com/states  
GET  https://backend-with-nodejs-2.onrender.com/states/1  
GET  https://backend-with-nodejs-2.onrender.com/states/highest-gdp  

POST https://backend-with-nodejs-2.onrender.com/states  

PUT  https://backend-with-nodejs-2.onrender.com/states/1  
PUT  https://backend-with-nodejs-2.onrender.com/states/1/budget  
PUT  https://backend-with-nodejs-2.onrender.com/states/1/population  

PATCH https://backend-with-nodejs-2.onrender.com/states/1/literacy  
PATCH https://backend-with-nodejs-2.onrender.com/states/1/gdp  
PATCH https://backend-with-nodejs-2.onrender.com/states/1  

DELETE https://backend-with-nodejs-2.onrender.com/states/1  
DELETE https://backend-with-nodejs-2.onrender.com/states/name/Gujarat  
DELETE https://backend-with-nodejs-2.onrender.com/states/low-literacy/70  

---

## ⚙️ Steps to Run Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/hetsakariya0111-gi/backend_with_nodejs.git
```

### 2️⃣ Navigate to project folder

```bash
cd backend_with_nodejs/00.assignments/State_Statistics_Management_API
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Start the server

```bash
node index.js
```

or

```bash
npm start
```

### 5️⃣ Server will run on:

```bash
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
* CORS Middleware  

---

## 📚 Learning Outcomes

After completing this project:

* Designed RESTful CRUD APIs for state data  
* Implemented route parameters, filtering, and aggregation  
* Performed partial and full resource updates  
* Handled errors and status codes properly  
* Used middleware correctly for JSON parsing and CORS  
* Built deployable backend services with live API  
* Created professional Postman API documentation  

---

## 👨‍💻 Author

**Het Sakariya**  
Backend Development Practice — Node.js & Express.js

---