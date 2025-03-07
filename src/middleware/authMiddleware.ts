import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "Unauthorized" });
    return; // ✅ Ensure function execution stops after sending a response
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    (req as any).user = decoded;
    next(); // ✅ Ensure `next()` is always called if authentication is successful
  } catch (error) {
    res.status(403).json({ message: "Invalid token" });
    return; // ✅ Stop execution after sending a response
  }
};

export default authenticate; // ✅ Ensure it's exported correctly
