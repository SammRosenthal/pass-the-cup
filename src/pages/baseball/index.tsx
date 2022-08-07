import Link from "next/link";
import { trpc } from "../../utils/trpc";
import { MlbGameData } from "../../api/mlb/getAllGames";
import DetailLayout from "../../components/layouts/Detail";
import { Loader } from "../../components/Loader";
import TeamCard from "../../components/TeamCard/TeamCard";
import { NoGames } from "../../components/EmptyViews/NoGames";
import { ErrorFetchingGames } from "../../components/ErrorViews/ErrorFetchingGames";

const container = "flex flex-col items-center pb-1";

export enum GameStatuses {
  inProgress = "InProgress",
}

export const ActiveBaseballGame: React.FC<{ game: MlbGameData }> = ({
  game,
}) => {
  return (
    <Link href={`/baseball/${game.GameID}`}>
      <div className="flex flex-col bg-gray-600 rounded-md p-2 gap-y-2 cursor-pointer overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-evenly gap-x-2">
          <TeamCard team={game.AwayTeam} />
          <b className="text-md whitespace-nowrap">{`${game.HomeTeamRuns} - ${game.AwayTeamRuns}`}</b>
          <TeamCard team={game.HomeTeam} />
        </div>
        {/* Game Stats */}
        <div className="flex justify-center">
          <span>{game.InningDescription}</span>
        </div>
      </div>
    </Link>
  );
};

export const Baseball = () => {
  const { data, isLoading, isError, error } = trpc.useQuery(["mlb.allGames"]);

  const activeGames = data?.filter(
    (game) => game.Status === GameStatuses.inProgress
  );

  return (
    <DetailLayout title="Baseball" className="gap-y-2">
      <div className={container}>
        {isError && <ErrorFetchingGames error={error} />}
        {isLoading && <Loader />}
        {activeGames && activeGames?.length === 0 && <NoGames />}

        {!!activeGames?.length && (
          <>
            <h2 className="text-lg pb-2">Current Games</h2>
            <div className="flex flex-col gap-y-2 w-full mt-2">
              {activeGames.map((game) => {
                return (
                  <ActiveBaseballGame
                    game={game}
                    key={`${game.AwayTeam}at${game.HomeTeam}`}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </DetailLayout>
  );
};

export default Baseball;
