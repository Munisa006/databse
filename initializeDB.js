import fs from 'fs';
import path from 'path';
import pool from './connection.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const initializeDatabase = async () => {
    try {
        // Check if tables exist
        const result = await pool.query(
            "SELECT to_regclass('public.patients');"
        );

        if (result.rows[0].to_regclass !== null) {
            console.log('✅ Database tables already exist');
            return;
        }

        // Read and execute dataset.sql
        const sqlFile = path.join(__dirname, 'dataset.sql');
        const sql = fs.readFileSync(sqlFile, 'utf8');

        // Split by semicolon and execute each statement
        const statements = sql
            .split(';')
            .map(s => s.trim())
            .filter(s => s.length > 0);

        for (const statement of statements) {
            await pool.query(statement);
        }

        console.log('✅ Database initialized successfully');
    } catch (error) {
        console.error('❌ Database initialization error:', error.message);
        process.exit(1);
    }
};
