import pool from '../connection.js';

// GET all patients
export const getAllPatients = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM patients');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("DB error:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// GET single patient by ID
export const getSinglePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      'SELECT * FROM patients WHERE patient_id = $1',
      [id]
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// CREATE new patient
export const createPatient = async (req, res) => {
  try {
    const { full_name, phone_number, address, dateofbirth } = req.body;

    const result = await pool.query(
      `INSERT INTO patients (full_name, phone_number, address, dateofbirth)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [full_name, phone_number, address, dateofbirth]
    );

    res.status(201).json({
      message: "Patient added successfully",
      obj: result.rows[0]
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// UPDATE patient
export const updatePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const { full_name, phone_number, address, dateofbirth } = req.body;

    const result = await pool.query(
      `UPDATE patients SET
        full_name = $1,
        phone_number = $2,
        address = $3,
        dateofbirth = $4
       WHERE patient_id = $5
       RETURNING *`,
      [full_name, phone_number, address, dateofbirth, id]
    );

    res.status(200).json({
      message: "Patient updated successfully",
      obj: result.rows[0]
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// DELETE patient
export const deletePatient = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      'DELETE FROM patients WHERE patient_id = $1 RETURNING *',
      [id]
    );

    res.status(200).json({
      message: "Patient deleted successfully",
      deleted: result.rows[0]
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};


