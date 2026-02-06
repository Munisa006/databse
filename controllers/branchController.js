import { Router } from 'express';
import pool from "../connection.js";

// GET all branches
export const getAllBranches = async (req,res) => {
  try {
    const result = await pool.query('SELECT * FROM branches');
    res.status(200).json(result.rows);
  } catch(error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// GET branches by ID
export const getSingleBranch = async (req,res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM branches WHERE branch_id=$1', [id]);
    res.status(200).json(result.rows[0]);
  } catch(error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// CREATE a new branch
export const createBranch = async (req,res) => {
  try {
    const { branch_name, location, phone_number, doctor_id } = req.body;
    const result = await pool.query(
      'INSERT INTO branches (branch_name, location, phone_number, doctor_id) VALUES ($1,$2,$3,$4) RETURNING *',
      [branch_name, location, phone_number, doctor_id]
    );
    res.status(201).json({ message: "Branch added successfully", obj: result.rows[0] });
  } catch(error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// UPDATE a branch
export const updateBranch = async (req,res) => {
  try {
    const { id } = req.params;
    const { branch_name, location, phone_number, doctor_id } = req.body;
    const result = await pool.query(
      'UPDATE branches SET branch_name=$1, location=$2, phone_number=$3, doctor_id=$4 WHERE branch_id=$5 RETURNING *',
      [branch_name, location, phone_number, doctor_id, id]
    );
    res.status(200).json({ message: "Branch updated successfully", obj: result.rows[0] });
  } catch(error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// DELETE a branch
export const deleteBranch = async (req,res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM branches WHERE branch_id=$1 RETURNING *', [id]);
    res.status(200).json({ message: "Branch deleted successfully", deleted: result.rows[0] });
  } catch(error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
