import { PrismaClient } from "@prisma/client";
import { log } from "console";
import { emit } from "process";


const prisma=new PrismaClient(
    {
        log:[
            {
                emit:'event',
                level:'query'
            }
        ]
    }
);
prisma.$on('query',(e)=>{
    console.log(e)
    console.log("Query: ",e.query);
    console.log("Duration: ",e.duration);
    console.log('Data & Time: ',e.params)
})
const main=async()=>{
    const getAllFromDB=await prisma.post.findMany({

    });
    console.log(getAllFromDB,{depth:Infinity})
}
main();