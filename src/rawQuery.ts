import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient();
const rawQuery=async()=>{
    // const posts=await prisma.$queryRaw`SELECT * FROM Post WHERE published=true`;
    // console.log(posts);

    await prisma.$queryRaw`TRUNCATE TABLE "users" CASCADE`;

}
rawQuery();