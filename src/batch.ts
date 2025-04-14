import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient();

const batchTransaction=async()=>{
    const createUser=prisma.user.create({
        data:{
            username:"joy",
            email:"ssjoy@gmail.com"
        }
    })
    console.log(createUser)
    const updateUser=prisma.user.update({
        where:{
            id:100,
    
        },
        data:{
            age:30,
        }
    })
    
const [userData,updateData]=await prisma.$transaction([
    createUser,
    updateUser

]);
   
}

batchTransaction();