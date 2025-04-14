import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient();
const interactive=async()=>{
    const result=await prisma.$transaction(async(trancatclinet)=>{
        // -------query 1------
        const getAllPost=await trancatclinet.post.findMany({
            where:{
                published:true
            }
        });
        // ----- query2------
        const countUser=await trancatclinet.user.count();
        // --------query 3-------
  const updateUser=await trancatclinet.user.update({
    where:{
        id:8
    },
    data:{
        age:30
    }
  });
console.log(result);
  return{
    getAllPost,
    countUser,
    updateUser}  
   
    });

  
}
interactive();