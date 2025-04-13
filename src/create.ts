import {  PrismaClient, UserRole } from "@prisma/client";


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

// try {
//     const createUser = await prisma.user.create({
//         data: {
//             username: 'user3', // Changed username to a unique value
//             email: 'joy3@gmail.com',
//             role: UserRole.user
//         }
//     });
//     console.log(createUser);
// } catch (error) {
//     console.error("Error creating user:", error);
// }


// const createProfile =await prisma.profile.create({
//     data:{
//         bio:"coding save my life",
//         userId:3
//     }
// })

//  console.log(createProfile)

// const createCategory=await prisma.category.create({
//     data:{
//         name:"software dev mens"
//     }
// });
// console.log(createCategory);

const createPost=await prisma.post.create({
    data:{
        title:"this is title  one more 3",
        content:"this is contents  off the post",
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

 console.log(createPost);
const inDepthData=await prisma.user.findUnique({
  where:{
    id:1
  },
  include:{
    post:{
      include:{
        postCategory:true
      }
    }
  }
});
console.log(inDepthData,{depth:Infinity})

}
main();