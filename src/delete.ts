import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient();
const deleteData=async()=>{
    // const deletesingle=await prisma.post.delete(
    //     {
    //         where:{
    //             id:1
    //         },

    //     }
    // )

    // const deleteMany=await prisma.post.deleteMany({
    //     where:{
    //      published:false
    //     }
    // })


    const upsetData=await prisma.post.upsert({
        where:{
            id:1
        },
            update:{
                title:"update tile"
            },
          create:  {
    title:"title 1",
    content:"content 1",
    authorName: "Author Name"
            }
        
    })
    console.log(upsetData)
}
// ---------delete many-------



deleteData()