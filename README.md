# SQLix – SQL Injection Demo Application

SQLix is an educational full-stack web application that demonstrates the difference between vulnerable SQL queries and secure (parameterized) queries. It allows users to interactively toggle between **VULNERABLE** and **SECURE** modes and test common SQL Injection (SQLi) attacks.

---

## 🔍 Features

- 🔐 Toggle between **VULNERABLE** (raw SQL) and **SECURE** (prepared statement) modes
- 🧪 Simulates login functionality with SQL query visualization
- 📊 Demonstrates how malicious inputs manipulate SQL logic
- 💡 Includes prebuilt test cases with explanation (e.g., `admin' --`, `' OR '1'='1`)
- 📦 Dockerized backend (Spring Boot)
- ⚛️ Frontend built with React and Toast notifications for feedback

---

## 🛠️ Tech Stack

| Layer     | Tech Used                          |
|-----------|------------------------------------|
| Frontend  | React, Toastify, CSS               |
| Backend   | Spring Boot, JDBC, JPA             |
| Database  | MySQL                              |
| Tools     | Docker, Postman, Vercel, Render    |

---

## 📸 Demo

Try it live here 👉 [https://sqlix-demo.vercel.app](https://sqlix.vercel.app)

---

### **Example Input (Vulnerable mode):**

```sql
Username: admin' --
Password: 
```

**Generated Query:**
```sql
SELECT * FROM users WHERE username='admin' --' AND password=''
```

---

## 🚀 Getting Started

### 🧑‍💻 Frontend

```bash
cd sqlix-frontend
npm install
npm run dev
```

### 🧑‍💻 Backend

```bash
cd sqlix-backend
# Create `.env` or use application.properties for DB creds
mvn spring-boot:run
```

- Backend runs on http://localhost:8080
- Frontend runs on http://localhost:5173

---

## 📁 API Endpoints

| Method | Endpoint      | Description                                 |
|--------|--------------|---------------------------------------------|
| POST   | /api/login   | Performs login (vulnerable/secure based on mode) |
| POST   | /api/toggle  | Toggles between VULNERABLE and SECURE modes |
| GET    | /api/mode    | Returns current mode                        |

---

## 🛡️ Educational Purpose

This project is meant strictly for educational use only to raise awareness of SQLi vulnerabilities and how to prevent them using parameterized queries / JPA.

---

## 📦 Deployment

- 🐳 Backend: Dockerized and deployed on Render
- 🌐 Frontend: Hosted on Vercel

---

## 🙋‍♂️ Author

**Sreenand S**  
GitHub: [Sreenand76](https://github.com/Sreenand76)
