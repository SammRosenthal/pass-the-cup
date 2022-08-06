import { getTeamLogo } from "../../utils/mlb/getTeamLogo";

export const TeamCard: React.FC<{ team: string }> = ({ team }) => {
  return (
    <div className="flex flex-col items-center gap-x-5 text-lg font-bold tracking-widest">
      <div className="relative w-24 h-24">{getTeamLogo(team)}</div>
      <span className="flex items-center">{team}</span>
    </div>
  );
};

export default TeamCard;
