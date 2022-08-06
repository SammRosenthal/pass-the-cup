import { createRouter } from "./context";
import { getAllGames } from "../../api/mlb/getAllGames";

export const mlbRouter = createRouter().query("allGames", {
  async resolve() {
    return await getAllGames();
  },
});
