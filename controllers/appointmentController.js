import pool from "../connection.js";

// GET all appointments
export const getAllAppointments = async (req,res) => {
  try {
    const result = await pool.query('SELECT * FROM appointments');
    res.status(200).json(result.rows);
  } catch(error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// GET single appointment
export const getSingleAppointment = async (req,res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM appointments WHERE appointment_id=$1', [id]);
    res.status(200).json(result.rows[0]);
  } catch(error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// CREATE appointment
export const createAppointment = async (req,res) => {
  try {
    const { patient_id, doctor_id, branch_id, appointment_date } = req.body;
    const result = await pool.query(
      'INSERT INTO appointments (patient_id, doctor_id, branch_id, appointment_date) VALUES ($1,$2,$3,$4) RETURNING *',
      [patient_id, doctor_id, branch_id, appointment_date]
    );
    res.status(201).json({ message: "Appointment added successfully", obj: result.rows[0] });
  } catch(error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// UPDATE appointment
export const updateAppointment = async (req,res) => {
  try {
    const { id } = req.params;
    const { patient_id, doctor_id, branch_id, appointment_date } = req.body;
    const result = await pool.query(
      'UPDATE appointments SET patient_id=$1, doctor_id=$2, branch_id=$3, appointment_date=$4 WHERE appointment_id=$5 RETURNING *',
      [patient_id, doctor_id, branch_id, appointment_date, id]
    );
    res.status(200).json({ message: "Appointment updated successfully", obj: result.rows[0] });
  } catch(error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// DELETE appointment
export const deleteAppointment = async (req,res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM appointments WHERE appointment_id=$1 RETURNING *', [id]);
    res.status(200).json({ message: "Appointment deleted successfully", deleted: result.rows[0] });
  } catch(error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
