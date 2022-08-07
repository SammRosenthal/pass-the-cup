import { useRouter } from "next/router";
import ErrorFetchingGameDetails from "../../../components/ErrorViews/ErrorFetchingGameDetails";
import { Loader } from "../../../components/Loader";
import { trpc } from "../../../utils/trpc";

export const GameView = () => {
  const router = useRouter();
  let { gameId } = router.query;

  if (Array.isArray(gameId)) {
    gameId = gameId.join("");
  }

  const { isLoading, isError, error, data } = trpc.useQuery([
    "mlb.gameStats",
    { gameId },
  ]);

  return (
    <div>
      {isError && <ErrorFetchingGameDetails error={error} />}
      {isLoading && <Loader />}
      {!!data && JSON.stringify(data)}
    </div>
  );
};

export default GameView;
