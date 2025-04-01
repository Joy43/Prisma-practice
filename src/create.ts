import {  PrismaClient, UserRole } from "@prisma/client";
import { connect } from "http2";

const prisma=new PrismaClient();
const main=async()=>{


// const result=await prisma.post.create({
//     data:{
//         title:'this is post title',
//         content:"this is content",
//         authorName:'joy',


//     }
// })

// --------------- create many-----------
// const createMany=await prisma.post.createMany({
//     data:[
//         {
//             title:'this is post title',
//         content:"this is content",
//         authorName:'joy',
//         },{
//             title:'this is post title 2',
//         content:"this is conten 2",
//         authorName:'sami',
//         },
//         {
//             title:'this is post title 3',
//         content:"this is content 3",
//         authorName:'sani',
//         }
//     ]
// })
// console.log(createMany)

// const createUser=await prisma.user.create({
//     data:{
//         username:'user1',
//         email:'joy@gmail.com',
//         role:UserRole.user

//     }
// })
// const createProfile =await prisma.profile.create({
//     data:{
//         bio:"coding save my life",
//         userId: 1
//     }
// })
// console.log(createProfile)

// const createCategory=await prisma.category.create({
//     data:{
//         name:"software dev"
//     }
// });

const createPost=await prisma.post.create({
    data:{
        title:"this is title",
        content:"this is content of the post",
        authorId:1,
        postCategory:{
            create:[
              
              {
                categoryId:1
              },
              {
                categoryId:3
              },
              {
                categoryId:4
              }
              
            ]
        }
    },
    include:{
        postCategory:true
    }
});

}
main();