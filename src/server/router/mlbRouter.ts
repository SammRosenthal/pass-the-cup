import { z } from "zod";
import { createRouter } from "./context";
import { getAllGames } from "../../api/mlb/getAllGames";

export const mlbRouter = createRouter()
  .query("allGames", {
    async resolve() {
      return await getAllGames();
    },
  })
  .query("gameStats", {
    input: z.object({
      gameId: z.string().nullish(),
    }),
    async resolve({ input }) {
      return {
        mockGameData: `You sent ${input.gameId}`,
      };
    },
  });

//  RULES FOR BASEBALL POINT TRACKING
//   ------------------------------
//   | (-) means put money in cup |
//   | (+) means take money out   |
//   ------------------------------
//  -- Strikeout: -2
//  -- Fly/ground out: -1
//  -- Ejection: -20
//  -- Single: +1
//  -- Double: +2
//  -- Triple: +3
//  -- Home run: take the cup
