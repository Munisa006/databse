# Clinic API

A simple API for managing clinic operations.

## Requirements
- Node.js
- PostgreSQL

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup PostgreSQL Database

**IMPORTANT:** This API requires a PostgreSQL database with the following tables:
- `doctors`
- `patients`
- `appointments`
- `treatments`
- `payments`
- `branches`

You must create these tables in your PostgreSQL database before starting the server.

**Make sure PostgreSQL is running on your machine (localhost:5432)**

### 3. Start the Server
```bash
npm start
```

Server runs at: `http://localhost:3000`

**Note:** The API will not work without a connected PostgreSQL database with the required tables!

## API Endpoints

| Method | Endpoint | Action |
|--------|----------|--------|
| GET | `/doctors` | Get all doctors |
| POST | `/doctors` | Add doctor |
| GET | `/patients` | Get all patients |
| POST | `/patients` | Add patient |
| GET | `/appointments` | Get all appointments |
| POST | `/appointments` | Book appointment |
| GET | `/treatments` | Get all treatments |
| POST | `/treatments` | Add treatment |
| GET | `/payments` | Get all payments |
| POST | `/payments` | Add payment |
| GET | `/branches` | Get all branches |
| POST | `/branches` | Add branch |

## Test API

Use Postman:
- `GET http://localhost:3000/doctors`
- All endpoints return JSON
