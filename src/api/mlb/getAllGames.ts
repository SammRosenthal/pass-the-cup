import moment from "moment";
import { env } from "process";
import { MlbGameData } from "../../utils/mlb/shapes";
import fetcher from "../fetcher";

export const getAllGames = async (): Promise<MlbGameData[]> => {
  try {
    const today = moment().format("YYYY-MMM-D");
    const yesterday = moment().subtract(1, "days").format("YYYY-MMM-D");

    const [todaysGames, yesterdaysGames] = await Promise.all([
      fetcher(
        `https://api.sportsdata.io/v3/mlb/scores/json/GamesByDate/${today}?key=${env.MLB_API_KEY}`
      ),
      fetcher(
        `https://api.sportsdata.io/v3/mlb/scores/json/GamesByDate/${yesterday}?key=${env.MLB_API_KEY}`
      ),
    ]);

    return [...todaysGames, yesterdaysGames];
  } catch (e) {
    // TODO error handling
    throw Error("ISSUE FETCHING ALL MLB GAMES");
  }
};
