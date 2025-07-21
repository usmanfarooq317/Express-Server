# Express-Server

A simple and scalable **Express.js server** application built with **TypeScript**. This project demonstrates a basic server setup with essential features like API routing, data validation, authentication, password hashing, and database integration using MongoDB.

---

## 🚀 Features

- **TypeScript** – Type-safe development with static typing
- **Express.js** – Fast and minimalist web server for Node.js
- **Mongoose** – ODM to manage MongoDB with schema-based models
- **bcryptjs** – Secure password hashing
- **jsonwebtoken** – JWT-based authentication
- **express-validator** – Server-side data validation using middleware

---

## 📦 Installation

Follow these steps to set up the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/usmanfarooq317/express-server.git
```

### 2. Navigate to the Project Directory

```bash
cd express-server
```

### 3. Install Dependencies

```bash
npm install
```

---

## 🛠️ Usage

### Start the Development Server

```bash
npm run dev
```

This will run the server using `ts-node-dev` for hot-reloading.

### Build the Project

```bash
npm run build
```

This compiles TypeScript code from the `src/` folder into JavaScript in the `dist/` folder.

### Start the Production Server

```bash
npm start
```

This runs the compiled JavaScript from the `dist/` folder.

---

## 📁 Project Structure

```
express-server/
├── src/               # TypeScript source code
│   ├── controllers/   # Route handlers
│   ├── models/        # Mongoose schemas
│   ├── routes/        # Express routes
│   ├── middlewares/   # Validation, auth, etc.
│   └── index.ts       # Entry point
├── dist/              # Compiled JavaScript output (auto-generated)
├── package.json       # Project scripts and dependencies
├── tsconfig.json      # TypeScript compiler settings
└── README.md          # Project documentation
```

---



## 📄 License

This project is licensed under the **ISC License**.

---

## 🙋‍♂️ Author

**Usman Farooq**  
Email: [usmanfarooq317@gmail.com](mailto:usmanfarooq317@gmail.com)  
GitHub: [@usmanfarooq317](https://github.com/usmanfarooq317)

---
