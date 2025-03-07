import { Request, Response } from "express";
import authService from "../services/authService"; // ✅ Import default export correctly

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { passcode } = req.body;
    const token = await authService.authenticateUser(passcode); // ✅ Call the function correctly
    res.json({ token });
  } catch (error) {
    res.status(401).json({ message: (error as Error).message });
  }
};

export const logoutUser = (req: Request, res: Response) => {
  res.json({ message: "Logout successful" });
};
