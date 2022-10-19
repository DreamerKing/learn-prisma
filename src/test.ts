import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  /*  const user = await prisma.user.create({
    data: {
      name: "dreamer",
      email: "dreamer@gmail.com",
      posts: {
        create: {
          title: "learn vue",
          content: "learn vue",
        },
      },
    },
  });
  console.log(user); */
  /*  const users = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });
  console.dir(users, { depth: Infinity }); */
  /*  const post = await prisma.post.update({
    where: {
      id: 3,
    },
    data: {
      published: true,
    },
  });
  console.dir(post); */

  const filteredPosts = await prisma.post.findMany({
    where: {
      OR: [
        { title: { contains: "React" } },
        { content: { contains: "learn" } },
      ],
    },
  });
  console.dir(filteredPosts);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
