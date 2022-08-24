import { z } from "zod";
import { createRouter } from "./context";
import { getAllGames } from "../../api/mlb/getAllGames";
import { getBoxScore } from "../../api/mlb/getBoxScore";
import { getPlayByPlay } from "../../api/mlb/getPlayByPlay";
import { BoxScore } from "../../utils/mlb/shapes";

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

/** Planning stuff to make the game */
  const currData: BoxScore = {} as BoxScore;
  const prevData: BoxScore = {} as BoxScore;

  let currentTeamAtBat = currData.TeamGames.find(({ TeamID }) => TeamID === currData.Game.CurrentHittingTeamID); // currData.Game.CurrentHittingTeamID;

  if (currData.Game.CurrentHitterID !== prevData.Game.CurrentHitterID) {
    if (currData.Game.Outs !== prevData.Game.Outs) {
      if (currentTeamAtBat?.Strikeouts) {
        // this should be the minus -2
        // for a strike out
        // return????
      }
      // I think this can be the minus -1 for another out while in play
      // return???????
    }

    // handle hits
    if (currData.Game.RunnerOnFirst) {
      // single was hit +1
    } else if (currData.Game.RunnerOnSecond) {
      // double was hit +2
    } else if (currData.Game.RunnerOnThird) {
      // triple was hit +3
    } else {
      // home run +the value of cup
    }
  }
/** Planning stuff to make the game */

//  RULES FOR BASEBALL POINT TRACKING
//   ------------------------------
//   | (-) means put money in cup |
//   | (+) means take money out   |
//   ------------------------------
//  -- Strikeout: -2
//  -- Fly/ground out: -1
//  -- Ejection: -20 -- Don't think we will have access to this data
//  -- Single: +1
//  -- Double: +2
//  -- Triple: +3
//  -- Home run: take the cup
