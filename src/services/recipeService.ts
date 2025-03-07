import pool from "../config/db";

export const fetchRecipes = async () => {
  try {
    const result = await pool.query("SELECT * FROM recipes");

    console.log("✅ Database Query Result:", result.rows); // ✅ Debugging output

    return result.rows;
  } catch (error) {
    console.error("❌ Error querying recipes:", error);
    throw new Error("Database error");
  }
};

export default { fetchRecipes };
