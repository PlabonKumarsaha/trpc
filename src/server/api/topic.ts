import {z} from "zod"

import {createTRPCRouter,protectedProcedure} from "../trpc"

// export const topicRouter = createTRPCRouter({
//     getAll:protectedProcedure
//     .input(z.object({topicid:z.string()})
//     .query(({ctx,input})=>{

//     })
// });



export const topicRouter = createTRPCRouter({
    getAll: protectedProcedure.query(({ ctx }) => {
      return ctx.prisma.topic.findMany({
        where: {
          userId: ctx.session.user.id,
        },
      });
    }),
