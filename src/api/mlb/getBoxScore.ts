import { env } from "process";
import { BoxScore } from "../../utils/mlb/shapes";
import fetcher from "../fetcher";

export const getBoxScore = async (gameId: string): Promise<BoxScore> => {
  try {
    return fetcher(
      `https://api.sportsdata.io/v3/mlb/stats/json/BoxScore/${gameId}?key=${env.MLB_API_KEY}`
    );
  } catch (e) {
    // TODO error handling
    throw Error("ISSUE FETCHING BOX SCORE");
  }
};
