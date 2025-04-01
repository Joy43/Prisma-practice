import { Prisma, PrismaClient } from "@prisma/client";

const prisma=new PrismaClient();
const relationalQueries=async()=>{
//     // ------fluent api-----
//     const result =await prisma.user.findUnique({
//         where:{
//             id:3
//         }
//     }).post();
//     console.log(result)
// }
// const relationalQueries=async()=>{
//     // ------include-----
//     const result =await prisma.user.findUnique({
//         where:{
//             id:3
//         },
//         include:{
//             post:true
//         }
//     })
//     console.log(result)
// }

const result =await prisma.user.findUnique({
    where:{
        id:1
    }
}).profile();
// -----relational filter----------
const publishedPostUser=await prisma.user.findMany({
    include:{
       post:{
        where:{
            published:true
        }
       }
    }
});
console.log(publishedPostUser,{depth:Infinity})
}
relationalQueries();