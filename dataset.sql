
CREATE TABLE patients (
    patient_id SERIAL PRIMARY KEY,
    full_name VARCHAR(100),
    phone_number VARCHAR(30),
    address VARCHAR(255),
    dateofbirth DATE
); 


CREATE TABLE doctors (
    doctor_id SERIAL PRIMARY KEY,
    full_name VARCHAR(100),
    specialization VARCHAR(50),
    phone_number VARCHAR(30),
    address VARCHAR(255)
);

CREATE TABLE branches (
    branch_id SERIAL PRIMARY KEY,
    branch_name VARCHAR(100),
    location VARCHAR(255),
    phone_number VARCHAR(50),
    doctor_id INT REFERENCES doctors(doctor_id)
);


CREATE TABLE appointments (
    appointment_id SERIAL PRIMARY KEY,
    patient_id INT REFERENCES patients(patient_id),
    doctor_id INT REFERENCES doctors(doctor_id),
    branch_id INT REFERENCES branches(branch_id),
    appointment_date DATE
);

CREATE TABLE treatments (
    treatment_id SERIAL PRIMARY KEY,
    appointment_id INT REFERENCES appointments(appointment_id),
    treatment_description VARCHAR(255),
    treatment_date DATE
);

CREATE TABLE payments (
    payment_id SERIAL PRIMARY KEY,
    payment_type VARCHAR(50),
    amount DECIMAL,
    payment_date DATE,
    appointment_id INT REFERENCES appointments(appointment_id)
);

INSERT INTO doctors (full_name, specialization, phone_number, address)
VALUES ('Dr. Ali Hasanov', 'Dentist', '+998911112233', 'Tashkent');

INSERT INTO patients (full_name, phone_number, address, dateofbirth)
VALUES ('Aziza Rahimova', '+998901234567', 'Tashkent', '1999-08-15');

INSERT INTO branches (branch_name, location, phone_number, doctor_id)
VALUES ('Central Clinic', 'Chilonzor', '+998712223344', 1);

INSERT INTO appointments (patient_id, doctor_id, branch_id, appointment_date)
VALUES (1, 1, 1, '2026-02-10');

INSERT INTO treatments (appointment_id, treatment_description, treatment_date)
VALUES (1, 'Teeth cleaning', '2026-02-10');

INSERT INTO payments (payment_type, amount, payment_date, appointment_id)
VALUES ('Cash', 300000, '2026-02-10', 1);