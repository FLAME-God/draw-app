import { Request, Response } from "express";

const signup =(req: Request, res: Response)=>{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.username;

    res.json({
        username,
        email,
        password
    })
}

const signin = (req: Request, res: Response)=>{
    const email = req.body.email;
    const password = req.body.password;

    res.json({
        email
    })
}

export default {signup, signin};