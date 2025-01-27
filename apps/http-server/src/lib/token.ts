import jwt,{ JwtPayload } from "jsonwebtoken";

const jwt_secret = "debu123"

interface CustomJwtPayload extends JwtPayload{
    id: number
} 


export function createToken(payload: CustomJwtPayload){
    return `Bearer ${jwt.sign(payload, jwt_secret, {expiresIn:"1d"})}`; 
}

export function verifToken (token: string){
    return jwt.verify(token, jwt_secret) as CustomJwtPayload;
}