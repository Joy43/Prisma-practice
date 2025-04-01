import { Prisma, PrismaClient } from "@prisma/client";

const prisma=new PrismaClient();
const main=async()=>{



// ---------find all
// const getAllFromDB=await prisma.post.findMany();
// console.log(getAllFromDB)
const findFirst=await prisma.post.findFirstOrThrow({
    where:{
        id:1
    }
});
// -------find unique or throw error------------
const findUnique=await prisma.post.findUniqueOrThrow({
    where:{
        id:2
    }
})
// -----------find all--------
const getAllFromDB=await prisma.post.findMany({
    select:{
        authorName:true
    }
})

}
main();