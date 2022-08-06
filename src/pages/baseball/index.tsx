import Link from "next/link";
import { trpc } from "../../utils/trpc";
import { MlbGameData } from "../../api/mlb/getAllGames";
import DetailLayout from "../../components/layouts/Detail";
import { Loader } from "../../components/Loader";
import TeamCard from "../../components/TeamCard/TeamCard";

const container = "flex flex-col items-center pb-1";

enum GameStatuses {
  inProgress = "InProgress",
}

export const ActiveGame: React.FC<{ game: MlbGameData }> = ({ game }) => {
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

  if (isError) <div>uh oh error! {JSON.stringify(error)}</div>;
  if (isLoading) <div>Loading......</div>;

  return (
    <DetailLayout className="gap-y-2">
      <div className={`${container} border-b-2 border-white`}>
        <h1 className="text-2xl">Baseball</h1>
      </div>
      <div className={container}>
        {activeGames ? (
          <>
            <h2 className="text-lg pb-2">Current Games</h2>
            <div className="flex flex-col gap-y-2 w-full mt-2">
              {activeGames?.map((game) => {
                return <ActiveGame game={game} key={game.GameID} />;
              })}
            </div>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </DetailLayout>
  );
};

export default Baseball;
