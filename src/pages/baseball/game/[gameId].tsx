import { useRouter } from "next/router";
import ErrorFetchingGameDetails from "../../../components/ErrorViews/ErrorFetchingGameDetails";
import DetailLayout from "../../../Layouts/Detail";
import ScoreCard from "../../../components/mlb/ScoreCard";
import { Loader } from "../../../components/Loader";
import { getTeamDisplayInfo } from "../../../utils/mlb/getTeamDisplayInfo";
import { trpc } from "../../../utils/trpc";
import React from "react";
import { Inning, MlbGameData, TeamGameStats } from "../../../utils/mlb/shapes";
import { BaseballDiamond } from "../../../components/mlb/BaseballDiamond";

const container = "flex flex-col items-center pb-1";

export const GameView = () => {
  const router = useRouter();
  let { gameId } = router.query;

  if (gameId && typeof gameId !== "string") return;

  const {
    isLoading,
    isError,
    error,
    data: boxScore,
  } = trpc.useQuery(["mlb.boxScore", { gameId }], {
    refetchInterval: 1000 * 30,
  });

  return (
    <DetailLayout title="Baseball" className="gap-y-2">
      <div className={container}>
        {isError && <ErrorFetchingGameDetails error={error} />}
        {isLoading && <Loader />}
        {!!boxScore && (
          <div className="flex flex-col gap-y-3 w-full">
            <AtBatDetails game={boxScore.Game} />
            <GameDetails
              innings={boxScore.Innings}
              teamGames={boxScore.TeamGames}
            />
            <BettingDetails />
          </div>
        )}
      </div>
    </DetailLayout>
  );
};

const AtBatDetails: React.FC<{ game: MlbGameData }> = ({ game }) => {
  return (
    <div className="flex flex-col items-center border">
      <h3 className="mb-2 mt-1 border-b-2 w-4/5 text-center">
        {getTeamDisplayInfo(game.AwayTeam).name} at{" "}
        {getTeamDisplayInfo(game.HomeTeam).name}
      </h3>
      <div className="flex flex-col w-full p-2">
        <div className="border px-1 text-center">
          <p className="border-b mb-2 min-w-fit mx-auto">Live Stats</p>
        </div>
        <div className="border flex justify-around p-1">
          <div className="border p-1 max-w-xs text-center">
            this will be current batter details like count and season stats
          </div>
          <div className="border p-1">
            <BaseballDiamond
              onFirst={game.RunnerOnFirst}
              onSecond={game.RunnerOnSecond}
              onThird={game.RunnerOnThird}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const GameDetails: React.FC<{
  innings: Inning[];
  teamGames: TeamGameStats[];
}> = ({ innings, teamGames }) => {
  return (
    <div className="flex flex-col items-center border w-full pb-2">
      <h3 className="mb-2 mt-1 border-b-2 w-4/5 text-center">Game</h3>
      <ScoreCard innings={innings} teamGames={teamGames} />
    </div>
  );
};

const BettingDetails = () => {
  return (
    <div className="flex flex-col items-center border w-full pb-2">
      <h3 className="mb-2 mt-1 border-b-2 w-4/5 text-center">Pass the Cup</h3>
      <p className="text-center">
        Need to have the <b className="border-b">cup total points</b> and the{" "}
        <b className="border-b">list of players</b> with their current points
      </p>
    </div>
  );
};

export default GameView;
