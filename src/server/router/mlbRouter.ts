import { z } from "zod";
import { createRouter } from "./context";
import { getAllGames } from "../../api/mlb/getAllGames";
import { getBoxScore } from "../../api/mlb/getBoxScore";
import { getPlayByPlay } from "../../api/mlb/getPlayByPlay";

export const mlbRouter = createRouter()
  .query("allGames", {
    async resolve() {
      return await getAllGames();
    },
  })
  .query("boxScore", {
    input: z.object({
      gameId: z.string().nullish(),
    }),
    async resolve({ input }) {
      if (!input.gameId) return;
      return await getBoxScore(input.gameId);
    },
  });

// this will prob only be needed server side
// .query("playByPlay", {
//   input: z.object({
//     gameId: z.string(),
//   }),
//   async resolve({ input }) {
//     return await getPlayByPlay(input.gameId);
//   },
// });

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
