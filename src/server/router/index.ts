// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { mlbRouter } from "./mlbRouter";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("mlb.", mlbRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
