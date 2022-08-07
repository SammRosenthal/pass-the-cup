import { getTeamDisplayInfo } from "../../utils/mlb/getTeamDisplayInfo";

export const TeamCard: React.FC<{ team: string }> = ({ team }) => {
  const { name, logo } = getTeamDisplayInfo(team);
  return (
    <div className="flex flex-col items-center gap-x-5 text-lg font-bold tracking-widest">
      <div className="relative w-24 h-24">{logo}</div>
      <span className="flex items-center">{name}</span>
    </div>
  );
};

export default TeamCard;
