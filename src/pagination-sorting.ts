import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();
const paginationSoring=async()=>{
console.log("pagination sortiing")
// ------------- offset pagination-----------
const offsetData=await prisma.post.findMany({
    skip:5,
    take:2
})
// console.log("offest pagination data:",offsetData)


const cursorData=await prisma.post.findMany({
    skip:5,
    take:2,
    cursor:{
        id:15
    }
})
// console.log(cursorData)


// -------sorting------
const sortData=await prisma.post.findMany({
    orderBy:{
        title:'asc'
    },
    skip:2,
    take:4,
    where:{
        title:'title 1'
    }
})

console.log(sortData)
}

paginationSoring();