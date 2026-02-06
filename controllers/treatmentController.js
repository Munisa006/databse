import pool from "../connection.js";

// GET all treatments
export const getAllTreatments = async (req,res) => {
  try {
    const result = await pool.query('SELECT * FROM treatments');
    res.status(200).json(result.rows);
  } catch(error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// GET single treatment
export const getSingleTreatment = async (req,res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM treatments WHERE treatment_id=$1', [id]);
    res.status(200).json(result.rows[0]);
  } catch(error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// CREATE treatment
export const createTreatment = async (req,res) => {
  try {
    const { appointment_id, treatment_description, treatment_date } = req.body;
    const result = await pool.query(
      'INSERT INTO treatments (appointment_id, treatment_description, treatment_date) VALUES ($1,$2,$3) RETURNING *',
      [appointment_id, treatment_description, treatment_date]
    );
    res.status(201).json({ message: "Treatment created", obj: result.rows[0] });
  } catch(error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// UPDATE treatment
export const updateTreatment = async (req,res) => {
  try {
    const { id } = req.params;
    const { appointment_id, treatment_description, treatment_date } = req.body;
    const result = await pool.query(
      'UPDATE treatments SET appointment_id=$1, treatment_description=$2, treatment_date=$3 WHERE treatment_id=$4 RETURNING *',
      [appointment_id, treatment_description, treatment_date, id]
    );
    res.status(200).json({ message: "Treatment updated successfully", obj: result.rows[0] });
  } catch(error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// DELETE treatment
export const deleteTreatment = async (req,res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM treatments WHERE treatment_id=$1 RETURNING *', [id]);
    res.status(200).json({ message: "Treatment deleted", deleted: result.rows[0] });
  } catch(error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

