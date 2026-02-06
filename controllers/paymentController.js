import pool from "../connection.js";

// GET all payments
export const getAllPayments = async (req,res) => {
  try {
    const result = await pool.query('SELECT * FROM payments');
    res.status(200).json(result.rows);
  } catch(error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// GET single payment
export const getSinglePayment = async (req,res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM payments WHERE payment_id=$1', [id]);
    res.status(200).json(result.rows[0]);
  } catch(error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// CREATE payment
export const createPayment = async (req,res) => {
  try {
    const { payment_type, amount, payment_date, appointment_id } = req.body;
    const result = await pool.query(
      'INSERT INTO payments (payment_type, amount, payment_date, appointment_id) VALUES ($1,$2,$3,$4) RETURNING *',
      [payment_type, amount, payment_date, appointment_id]
    );
    res.status(201).json({ message: "Payment created successfully", obj: result.rows[0] });
  } catch(error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// UPDATE payment
export const updatePayment = async (req,res) => {
  try {
    const { id } = req.params;
    const { payment_type, amount, payment_date, appointment_id } = req.body;
    const result = await pool.query(
      'UPDATE payments SET payment_type=$1, amount=$2, payment_date=$3, appointment_id=$4 WHERE payment_id=$5 RETURNING *',
      [payment_type, amount, payment_date, appointment_id, id]
    );
    res.status(200).json({ message: "Payment updated successfully", obj: result.rows[0] });
  } catch(error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// DELETE payment
export const deletePayment = async (req,res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM payments WHERE payment_id=$1 RETURNING *', [id]);
    res.status(200).json({ message: "Payment deleted successfully", deleted: result.rows[0] });
  } catch(error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
