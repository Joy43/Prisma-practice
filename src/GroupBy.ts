import {  PrismaClient } from '@prisma/client';
const prisma=new PrismaClient();
const groupBy=async()=>{
    const groupByData=await prisma.post.groupBy({

            by:['published','authorId'],
            _count:{
                title:true,
            },
            having:{
                authorId:{
                    _sum:{
                        gt:1
                    }
                }
            }
          
        });

    
        console.log( groupByData)
}
groupBy();