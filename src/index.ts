import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient();
const main=async()=>{
console.log('prisma');

// const result=await prisma.post.create({
//     data:{
//         title:'this is post title',
//         content:"this is content",
//         authorName:'joy',


//     }
// })
// console.log(result)
// const getAllFromDB=await prisma.post.findMany();
// console.log(getAllFromDB)
}
main();