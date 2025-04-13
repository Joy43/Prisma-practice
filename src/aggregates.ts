import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient();

const aggregates=async()=>{
  // ------------avg-------------
  const avgAge=await prisma.user.aggregate({
    _avg:{
      age:true
    }
  });
  console.log(avgAge);
// --------sum----------
  const sumAge=await prisma.user.aggregate({
    _sum:{
      age:true
    }
  })
  console.log(sumAge);
  
// --------find count-------
  const countData=await prisma.user.count();
  console.log(countData)
// find max

const maxAge=await prisma.user.aggregate({
  _max:{
    age:true
  }
})
console.log(maxAge)
// ---------find count of the age--------
const countAge=await prisma.post.aggregate({
  _count:{
    title:true
  },
  where:{
    published:true
  }
})
console.log(countAge)
}




aggregates();