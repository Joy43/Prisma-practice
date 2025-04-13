import { PrismaClient } from "@prisma/client";
import { userInfo } from "os";

const prisma =new PrismaClient();
const filtering=async()=>{

    // const andfiltering=async()=>{
    //     const andFiltering=await prisma.post.findMany({
    //         where:{
    //             AND:[
    //                 {
    //                     published:true
    //                 },
    //                 {
    //                     title:{
    //                         contains:"title"
    //                     }
    //                 }
    //             ]
    //         }
            
    //     });
     
     
        const andFiltering=await prisma.post.findMany({
            where:{
                OR:[
                    {
                        published:true
                    },
                    {
                        title:{
                            contains:"title"
                        }
                    }
                ]
            }
        });
        console.log(andFiltering)

        const notFiltering=await prisma.post.findMany({

            where:{
                NOT:{
                    title:{
                        contains:"title"
                    }
                }
            }
        });

        const startWith=await prisma.user.findMany({
            where:{
                email:{
                    startsWith:'u'
                }
            }
        });

        const endtWith=await prisma.user.findMany({
            where:{
                email:{
                    endsWith:'user1.com'
                }
            }
        });

const userNameArray=['user1','user2','user3'];
const userNamesByArray=await prisma.user.findMany({
    where:{
        username:{
            in:userNameArray
        }
    }
});
console.log(userNamesByArray);

    //     console.log(startWith)
    // console.log(notFiltering)
    
    // console.log(endtWith);

    }
  

filtering();


