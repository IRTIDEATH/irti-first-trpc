import userRouter from "@/server/user-route";
import { t } from "@/utils/trpc-server";
// Creating the tRPC API

// before merged

// export const appRouter = t.router({
//   healthchecker: t.procedure.query(({ ctx }) => {
//     return {
//       status: "success",
//       message: "Welcome to trpc with Next.js 14 and React Query",
//     };
//   }),
// });

// after merged
const healthCheckerRouter = t.router({
  healthchecker: t.procedure.query(({ ctx }) => {
    return {
      status: 'success',
      message: 'Welcome to trpc with Next.js 14 and React Query',
    };
  }),
});

export const appRouter = t.mergeRouters(userRouter, healthCheckerRouter);

export type AppRouter = typeof appRouter;