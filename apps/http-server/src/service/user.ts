import {prismaClient} from "@repo/db/prismaClient"



interface UserType {
    username?: string,
    email?: string,
    hashedPassword?: string,
}

export async function createUser (payload: UserType){
    const user = prismaClient.user.create({
        data:{
            username: payload.username,
            email: payload.email,
            password: payload.hashedPassword,
        }
    })
    return user;
}

export async function findUser (payload: UserType){
    const user = prismaClient.users.findFirst({
        where:{
            email: payload.email
        }
    })
    return user;
}