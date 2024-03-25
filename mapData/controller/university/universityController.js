import { pool } from '../../config/database.js';

export const getUniversityList = async (req, res, next) => {
  try {
    const { rows } = await pool.query('SELECT * FROM university');
    res.json(rows);
  } catch (error) {
    next(error);
  }
};

