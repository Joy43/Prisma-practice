import { PrismaClient } from "@prisma/client";
import { title } from "process";

const prisma=new PrismaClient();
const updates=async ()=>{
    console.log('updates')
    const singleUpdate=await prisma.post.updateMany({
        where:{
            title: "this is post title"// Replace 1 with the actual unique ID of the post
        },data:{
            published:true
        }
    },

)
}
updates();