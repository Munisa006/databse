# Clinic API

A comprehensive REST API for managing clinic operations including doctors, patients, branches, appointments, treatments, and payments.

## Tech Stack
- **Node.js** with Express.js
- **PostgreSQL** database
- **dotenv** for environment variables

## Installation & Setup

### Prerequisites
- Node.js (v14+)
- PostgreSQL (v12+)
- npm

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd clinic_api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup Database**
   - Create a PostgreSQL database named `postgres` (or update `.env`)
   - Import the database schema:
   ```bash
   psql -U postgres -d postgres -f dataset.sql
   ```

4. **Configure Environment**
   - Copy `.env.example` to `.env`
   ```bash
   cp .env.example .env
   ```
   - Update `.env` with your database credentials if different

5. **Start the server**
   ```bash
   npm start
   ```
   - Server runs on `http://localhost:3000`

## API Endpoints

### Doctors
- `GET /doctors` - Get all doctors
- `GET /doctors/:id` - Get doctor by ID
- `POST /doctors` - Create new doctor
- `PUT /doctors/:id` - Update doctor
- `DELETE /doctors/:id` - Delete doctor

### Patients
- `GET /patients` - Get all patients
- `GET /patients/:id` - Get patient by ID
- `POST /patients` - Create new patient
- `PUT /patients/:id` - Update patient
- `DELETE /patients/:id` - Delete patient

### Branches
- `GET /branches` - Get all branches
- `GET /branches/:id` - Get branch by ID
- `POST /branches` - Create new branch
- `PUT /branches/:id` - Update branch
- `DELETE /branches/:id` - Delete branch

### Appointments
- `GET /appointments` - Get all appointments
- `GET /appointments/:id` - Get appointment by ID
- `POST /appointments` - Create new appointment
- `PUT /appointments/:id` - Update appointment
- `DELETE /appointments/:id` - Delete appointment

### Treatments
- `GET /treatments` - Get all treatments
- `GET /treatments/:id` - Get treatment by ID
- `POST /treatments` - Create new treatment
- `PUT /treatments/:id` - Update treatment
- `DELETE /treatments/:id` - Delete treatment

### Payments
- `GET /payments` - Get all payments
- `GET /payments/:id` - Get payment by ID
- `POST /payments` - Create new payment
- `PUT /payments/:id` - Update payment
- `DELETE /payments/:id` - Delete payment

## How to Test the API

Use **Postman** to test the endpoints:

1. Open Postman
2. Create a new request
3. Try: `GET http://localhost:3000/doctors`
4. Send the request to see the data

All endpoints use JSON format.

## Project Folders

- **controllers/** - Contains business logic for each feature
- **routes/** - Contains API endpoints
