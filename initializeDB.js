import pool from './connection.js';

const createTablesSQL = `
CREATE TABLE IF NOT EXISTS patients (
    patient_id SERIAL PRIMARY KEY,
    full_name VARCHAR(100),
    phone_number VARCHAR(30),
    address VARCHAR(255),
    dateofbirth DATE
); 

CREATE TABLE IF NOT EXISTS doctors (
    doctor_id SERIAL PRIMARY KEY,
    full_name VARCHAR(100),
    specialization VARCHAR(50),
    phone_number VARCHAR(30),
    address VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS branches (
    branch_id SERIAL PRIMARY KEY,
    branch_name VARCHAR(100),
    location VARCHAR(255),
    phone_number VARCHAR(50),
    doctor_id INT REFERENCES doctors(doctor_id)
);

CREATE TABLE IF NOT EXISTS appointments (
    appointment_id SERIAL PRIMARY KEY,
    patient_id INT REFERENCES patients(patient_id),
    doctor_id INT REFERENCES doctors(doctor_id),
    branch_id INT REFERENCES branches(branch_id),
    appointment_date DATE
);

CREATE TABLE IF NOT EXISTS treatments (
    treatment_id SERIAL PRIMARY KEY,
    appointment_id INT REFERENCES appointments(appointment_id),
    treatment_description VARCHAR(255),
    treatment_date DATE
);

CREATE TABLE IF NOT EXISTS payments (
    payment_id SERIAL PRIMARY KEY,
    payment_type VARCHAR(50),
    amount DECIMAL,
    payment_date DATE,
    appointment_id INT REFERENCES appointments(appointment_id)
);
`;

export const initializeDatabase = async () => {
  try {
    await pool.query(createTablesSQL);
    console.log('✅ Database tables initialized');
  } catch (error) {
    console.error('❌ Database error:', error.message);
  }
};
