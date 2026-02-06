# Clinic API

A simple API for managing clinic operations.

## Quick Start

```bash
npm install
psql -U postgres -d postgres -f dataset.sql
npm start
```

Server: `http://localhost:3000`

## Requirements
- Node.js
- PostgreSQL

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
