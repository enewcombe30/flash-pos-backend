import pool from "../config/db";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authenticateUser = async (passcode: string): Promise<string> => {
  console.log("🔍 Checking login for passcode:", passcode); // ✅ Debugging Output
  const result = await pool.query("SELECT * FROM users WHERE passcode = $1", [
    passcode,
  ]);
  console.log("🔍 Database Response:", result.rows); // ✅ Debugging Output

  if (result.rows.length === 0) {
    console.log("❌ No matching user found for passcode:", passcode); // ✅ Debugging Output
    throw new Error("Invalid login code");
  }
  const token = jwt.sign(
    { id: result.rows[0].id },
    process.env.JWT_SECRET as string,
    { expiresIn: "1h" }
  );
  return token;
};

// Ensure the export is correct:
export default { authenticateUser };
