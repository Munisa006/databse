import pool from '../connection.js';

// GET all doctors
export const getAllDoctors = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM doctors');

        res.status(200).json(result.rows);
    } catch (error) {
        console.error("DB error:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};


// GET a single doctor by ID
export const getSingleDoctor = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM doctors WHERE doctor_id = $1', [id]);
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error("DB error:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

//create a new doctor
export const createDoctor = async (req, res) => {
    try {
        const { full_name, specialization, phone_number, address } = req.body;
        const result = await pool.query(
            `INSERT INTO doctors (full_name, specialization, phone_number, address) VALUES ($1, $2, $3, $4) RETURNING *`,
            [full_name, specialization, phone_number, address]
        );
        res.status(201).json({ message: "Added successfully", obj: result.rows[0] });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
}
//update a doctor
export const updateDoctor = async (req, res) => {
    try {
        const { id } = req.params;
        const { full_name, specialization, phone_number, address } = req.body;
        if (!full_name || !specialization || !phone_number || !address) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const result = await pool.query(
            `UPDATE doctors SET full_name = $1, 
             specialization = $2, 
             phone_number = $3, 
             address = $4 
             WHERE doctor_id = $5 RETURNING *`,
            [full_name, specialization, phone_number, address, id]
        );
        res.status(200).json({ message: "Updated successfully", obj: result.rows[0] });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

// Delete a doctor
export const deleteDoctor = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await pool.query
            (`DELETE FROM doctors WHERE doctor_id = $1 RETURNING *`,
                [id]);
        res.status(200).json({
            message: "Deleted successfully",
            deleted: result.rows[0]
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

