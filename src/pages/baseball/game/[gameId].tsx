import { useRouter } from "next/router";
import ErrorFetchingGameDetails from "../../../components/ErrorViews/ErrorFetchingGameDetails";
import DetailLayout from "../../../components/layouts/Detail";
import ScoreCard from "../../../components/mlb/ScoreCard";
import { Loader } from "../../../components/Loader";
import { getTeamDisplayInfo } from "../../../utils/mlb/getTeamDisplayInfo";
import { trpc } from "../../../utils/trpc";

const container = "flex flex-col items-center pb-1";

export const GameView = () => {
  const router = useRouter();
  let { gameId } = router.query;

  if (gameId && typeof gameId !== "string") return;

  const { isLoading, isError, error, data } = trpc.useQuery(
    ["mlb.boxScore", { gameId }],
    {
      refetchInterval: 1000 * 30,
    }
  );

  return (
    <DetailLayout title="Baseball" className="gap-y-2">
      <div className={container}>
        {isError && <ErrorFetchingGameDetails error={error} />}
        {isLoading && <Loader />}
        {!!data && (
          <div className="flex flex-col gap-y-3 w-full">
            <div className="flex justify-center">
              {getTeamDisplayInfo(data.Game.AwayTeam).name} at{" "}
              {getTeamDisplayInfo(data.Game.HomeTeam).name}
            </div>
            <div className="flex flex-col items-center border w-full pb-2">
              <h3 className="mb-2 mt-1 border-b-2 w-4/5 text-center">
                Game Details
              </h3>
              <ScoreCard innings={data?.Innings} teamGames={data?.TeamGames} />
            </div>
          </div>
        )}
      </div>
    </DetailLayout>
  );
};

export default GameView;
