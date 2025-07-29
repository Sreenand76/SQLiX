# SQLix – SQL Injection Demo Platform

**SQLix** is a hands-on, full-stack platform designed to demonstrate SQL Injection vulnerabilities and their mitigation techniques. Built with React, Spring Boot, MySQL, and Docker, SQLix allows users to experiment with a login system that can be toggled between vulnerable and secure modes, showcasing the stark differences in query behavior.

---

## 🚀 Live Demo

[Live Demo](https://sqlix.vercel.app/)

---

## 🚀 Executive Summary

SQLix empowers developers, students, and security enthusiasts to learn about SQL Injection attacks and their prevention in a safe, interactive environment. Users can deliberately attempt SQL injection attacks on a sample login form, then switch to a secure mode to see how parameterized queries defend against such exploits.

---

## 🛠️ Technologies Used

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Spring Boot (Java), RESTful APIs
- **Database:** MySQL
- **Authentication:** Simple session-based (for demonstration)
- **Deployment:** Frontend (Vercel), Backend (Render using Docker image)

---

## 🎯 Key Features

- **Vulnerable/Secure Toggle:** Instantly switch between insecure (string concatenation) and secure (parameterized) SQL query modes.
- **Login Demo:** Try real SQL injection payloads against a sample login form.
- **Educational UI:** Explanations and feedback for each login attempt and toggle state.
- **Containerized Backend:** Easily deployable with Docker.
- **Real-Time Results:** Observe how the backend processes different inputs.

---

## 💡 Key Learnings & Challenges

- Illustrated the dangers of SQL Injection with hands-on experimentation.
- Demonstrated the effectiveness of parameterized queries as a defense.
- Designed a toggle system to switch backend logic at runtime.
- Solved CORS and environment management for frontend-backend integration.
- Containerized the backend for seamless deployment.

---

## 📂 Project Setup

### 1. Clone the Repository
```bash
git clone https://github.com/sreenand76/sqlix.git
cd sqlix 
```
### 2. Setup the Frontend
```bash
cd sqlix-frontend
npm install
npm run dev
```
### 3. Setup the Backend
```bash
cd sqlix-backend
mvn clean install
mvn spring-boot:run
```
---

### Sample Credentials

- **User:** demo@sqlix.com / demo123

---

## 🔮 Future Scope

- Add multi-step SQLi labs (e.g., data extraction, UNION-based attacks).
- Integrate explanations for common SQLi payloads.
- Add support for more databases (PostgreSQL, SQLite).
- Provide downloadable attack/defense logs for classroom use.

---

## 🤝 Contribution / Contact

Feedback and collaboration are welcome!  
Connect with me on [LinkedIn](https://www.linkedin.com/in/sreenand-s-9b2716292/) or email at sreenands93@gmail.com.
