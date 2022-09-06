import { useAutoAnimate } from "@formkit/auto-animate/react";
import { CreateGameModal } from "../components/CreateGameModal/CreateGameModal";
import { useGameContext } from "../providers/GameProvider";

const container = "flex flex-col items-center pb-1";

export const DetailLayout: React.FC<{
  children: React.ReactNode;
  className?: string;
  title: string;
}> = ({ children, className, title }) => {
  const [parent] = useAutoAnimate<HTMLDivElement>();
  const { currentGame } = useGameContext();

  return (
    <div
      className={`container max-w-xl flex flex-col self-center mt-5 x-5 bg-gray-800 py-8 px-4 shadow rounded-lg sm:px-10 ${className}`}
      ref={parent}
    >
      {!currentGame && <CreateGameModal />}
      <div className={`${container} border-b-2 border-white`}>
        <h1 className="text-2xl text-center">{title}</h1>
      </div>
      {children}
    </div>
  );
};

export default DetailLayout;
