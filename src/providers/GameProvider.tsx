import React from "react";

type TGameContext = {
  currentGame?: any;
  createGame: () => void;
};

const defaultGameContext: TGameContext = {
  currentGame: undefined,
  createGame: () => null,
};

const GameContext = React.createContext<TGameContext>(defaultGameContext);

export const useGameContext = () => React.useContext(GameContext);

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const gameContext = useGameContext();

  return (
    <GameContext.Provider value={{ ...gameContext }}>
      {children}
    </GameContext.Provider>
  );
};
