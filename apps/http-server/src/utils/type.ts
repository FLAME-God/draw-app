import { NextFunction, Request, Response } from "express";

interface AuthenticatedRequest extends Request {
    userId?: number;
  }
  
  export type AuthenticatedRequestHandler = (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ) => void;