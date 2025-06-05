# Kuraz Internship Backend API

This is the **backend code** for the **KURAZ Teach Internship Program**.

## 🔧 Tech Stack

- Node.js
- Express.js
- MongoDB (with Mongoose)
- Dotenv

## 🚀 Features

- Create, read, update, and delete tasks
- RESTful API design
- MongoDB integration
- Environment variable support with `.env`

## 📂 Project Structure
```bash
kuraz-backend/
│
├── models/
│ └── task.js
├── .env
├── .gitignore
├── server.js
└── package.json
```
| Method | Endpoint         | Description            |
| ------ | ---------------- | ---------------------- |
| GET    | `/api/tasks`     | Get all tasks          |
| POST   | `/api/tasks`     | Create a new task      |
| PUT    | `/api/tasks/:id` | Mark task as completed |
| DELETE | `/api/tasks/:id` | Delete a task          |
