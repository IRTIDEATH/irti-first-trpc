import { t } from "@/utils/trpc-server";
// Creating the tRPC API

export const appRouter = t.router({
  healthchecker: t.procedure.query(({ ctx }) => {
    return {
      status: "success",
      message: "Welcome to trpc with Next.js 14 and React Query",
    };
  }),
});

export type AppRouter = typeof appRouter;
