# 📘 E-Commerce Product API (Backend with Node.js)

---

## 📁 GitHub Repository

**Source Code:**
👉 https://github.com/hetsakariya0111-gi/backend_with_nodejs/tree/main/00.assignments/E-Commerce_Product_API

---

## 📮 Postman Documentation

Public API documentation with requests and sample responses:

👉 https://documenter.getpostman.com/view/50839263/2sBXcEmgfJ

---

## 🚀 Live Deployment (Render)

API is deployed and publicly accessible:

👉 https://backend-with-nodejs-1-qu8o.onrender.com

---

## 🚀 Project Title

**E-Commerce Product Management REST API — Assignment 2**

---

## 🎯 Objective

The objective of this project is to build a RESTful API using **Node.js** and **Express.js** that manages product listings for an e-commerce platform using an in-memory JSON database.

This assignment demonstrates backend development fundamentals including:

* REST API design principles
* Static and dynamic routing
* Product filtering and retrieval
* Resource creation and updates
* Proper HTTP status handling
* Middleware usage and deployment

No external database is used; all product data is stored inside a JSON array.

---

## 🧠 Features Implemented

* Express.js server setup
* In-memory product data handling
* Multiple GET routes
* Product filtering by category
* Dynamic route parameters
* POST route for product creation
* PUT routes for full and partial updates
* Selective updates (stock & price)
* Proper status codes and error handling
* CORS middleware enabled
* JSON body parsing using `express.json()`

---

## ✅ Implemented Routes

| Method | Route                              | Description              |
| ------ | ---------------------------------- | ------------------------ |
| GET    | `/products`                        | Get all products         |
| GET    | `/products/:id`                    | Get product by ID        |
| GET    | `/products/category/:categoryName` | Get products by category |
| POST   | `/products`                        | Create new product       |
| PUT    | `/products/:id`                    | Replace entire product   |
| PUT    | `/products/:id/stock`              | Update product stock     |
| PUT    | `/products/:id/price`              | Update product price     |

---

## 🌐 Sample API URLs

GET  https://backend-with-nodejs-1-qu8o.onrender.com/products
GET  https://backend-with-nodejs-1-qu8o.onrender.com/products/1
GET  https://backend-with-nodejs-1-qu8o.onrender.com/products/category/Electronics

POST https://backend-with-nodejs-1-qu8o.onrender.com/products

PUT  https://backend-with-nodejs-1-qu8o.onrender.com/products/1
PUT  https://backend-with-nodejs-1-qu8o.onrender.com/products/1/stock
PUT  https://backend-with-nodejs-1-qu8o.onrender.com/products/1/price

---

## ⚙️ Steps to Run Locally

### 1️⃣ Clone the repository

```
git clone https://github.com/hetsakariya0111-gi/backend_with_nodejs.git
```

### 2️⃣ Navigate to project folder

```
cd backend_with_nodejs/00.assignments/E-Commerce_Product_API
```

### 3️⃣ Install dependencies

```
npm install
```

### 4️⃣ Start the server

```
node index.js
```

or

```
npm start
```

### 5️⃣ Server will run on:

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
* CORS Middleware

---

## 📚 Learning Outcomes

After completing this project:

* Designed RESTful CRUD APIs
* Implemented route parameters and filtering
* Performed selective resource updates
* Used middleware correctly
* Applied proper HTTP response codes
* Built deployable backend services
* Created professional API documentation

---

## 👨‍💻 Author

**Het Sakariya**
Backend Development Practice — Node.js & Express.js

---
