import React from "react";
import { Inning, TeamGameStats } from "../../utils/mlb/shapes";

type ScoreCardProps = {
  innings: Inning[];
  teamGames: TeamGameStats[];
};

export const ScoreCard: React.FC<ScoreCardProps> = ({ innings, teamGames }) => {
  const homeTeam = teamGames.find((team) => team.HomeOrAway === "HOME")!;
  const awayTeam = teamGames.find((team) => team.HomeOrAway === "AWAY")!;

  return (
    <div className="flex text-sm">
      <Title homeTeam={homeTeam.Team} awayTeam={awayTeam.Team} />
      {innings?.map((data) => (
        <Inning key={data.InningID} inningData={data} />
      ))}
      <GameStats homeTeam={homeTeam} awayTeam={awayTeam} />
    </div>
  );
};

const Title: React.FC<{ homeTeam: string; awayTeam: string }> = ({
  awayTeam,
  homeTeam,
}) => {
  return (
    <>
      <div className="flex flex-col w-6 justify-end mr-2">
        <span className="text-center">{awayTeam}</span>
        <span className="text-center">{homeTeam}</span>
      </div>
    </>
  );
};

const Inning: React.FC<{ inningData: Inning }> = ({ inningData }) => {
  const { InningNumber, AwayTeamRuns, HomeTeamRuns } = inningData;

  return (
    <div className="flex flex-col w-4">
      <span className="text-center font-bold">{InningNumber}</span>
      <span className="text-center">{AwayTeamRuns}</span>
      <span className="text-center">{HomeTeamRuns}</span>
    </div>
  );
};

const GameStats: React.FC<{
  homeTeam: TeamGameStats;
  awayTeam: TeamGameStats;
}> = ({ homeTeam, awayTeam }) => {
  return (
    <>
      <div className="flex flex-col w-6">
        <span className="text-center font-bold">R</span>
        <span className="text-center">{Math.floor(awayTeam.Runs)}</span>
        <span className="text-center">{Math.floor(homeTeam.Runs)}</span>
      </div>
      <div className="flex flex-col w-6">
        <span className="text-center font-bold">H</span>
        <span className="text-center">{Math.floor(awayTeam.Hits)}</span>
        <span className="text-center">{Math.floor(homeTeam.Hits)}</span>
      </div>
      <div className="flex flex-col w-6">
        <span className="text-center font-bold">HR</span>
        <span className="text-center">{Math.floor(awayTeam.HomeRuns)}</span>
        <span className="text-center">{Math.floor(homeTeam.HomeRuns)}</span>
      </div>
    </>
  );
};

export default ScoreCard;
