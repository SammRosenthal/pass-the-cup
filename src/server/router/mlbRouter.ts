import { z } from "zod";
import { createRouter } from "./context";
import { getAllGames } from "../../api/mlb/getAllGames";
import { getBoxScore } from "../../api/mlb/getBoxScore";
import { getPlayByPlay } from "../../api/mlb/getPlayByPlay";
import { BoxScore } from "../../utils/mlb/shapes";
import { cpuUsage } from "process";
import { MlbPassTheCup, Player } from "../games/MlbPassTheCup";

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
  })
  .mutation("createGame", {
    input: z.object({ playerName: z.string().min(2) }),
    async resolve({ input }) {
      if (input.playerName) return;

      return await new MlbPassTheCup(
        new Player(input.playerName, "owner", 0),
        "AAAAA",
        9999
      );
    },
  });

// need some sort of endpoint that can check if we need to update the
// MlbPassTheCup instance
// /** Planning stuff to make the game */
//   const currData: BoxScore = {} as BoxScore;
//   const prevData: BoxScore = {} as BoxScore;

// this will prob only be needed server side
// .query("playByPlay", {
//   input: z.object({
//     gameId: z.string(),
//   }),
//   async resolve({ input }) {
//     return await getPlayByPlay(input.gameId);
//   },
// });
