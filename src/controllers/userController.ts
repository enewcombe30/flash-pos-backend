import { Request, Response } from "express";
import userService from "../services/userService"; // ✅ Correct import

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.fetchUsers(); // ✅ Ensure function exists in userService
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await userService.fetchUserById(req.params.id); // ✅ Ensure function exists
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: "User not found" });
  }
};
