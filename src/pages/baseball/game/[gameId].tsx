import { useRouter } from "next/router";
import ErrorFetchingGameDetails from "../../../components/ErrorViews/ErrorFetchingGameDetails";
import DetailLayout from "../../../components/layouts/Detail";
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
          <div>
            {getTeamDisplayInfo(data.Game.AwayTeam).name} at{" "}
            {getTeamDisplayInfo(data.Game.HomeTeam).name}
          </div>
        )}
      </div>
    </DetailLayout>
  );
};

export default GameView;
