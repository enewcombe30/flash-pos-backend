import pool from "../config/db";

export const fetchUsers = async () => {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
};

export const fetchUserById = async (id: string) => {
  const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  return result.rows[0];
};

// Ensure correct export:
export default { fetchUsers, fetchUserById };
