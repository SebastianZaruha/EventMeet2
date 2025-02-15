import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user?: TokenPayload;
    }
  }
}

interface TokenPayload extends JwtPayload {
  userId: number;
  email: string;
  role: string;
  nick: string;
  location: string;
  points: number;
  status: string;
}
