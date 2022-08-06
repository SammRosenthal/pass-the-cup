import Image from "next/image";

export type MlbImageEntry = {
  [key: string]: JSX.Element;
};

export const getTeamLogo = (team: string) => {
  return mlbImageMap[team];
};

const mlbImageMap: MlbImageEntry = {
  ATL: (
    <Image
      src="https://sportslogosvg.com/wp-content/uploads/2020/09/braves.png"
      alt="Braves"
      layout="fill"
      objectFit="contain"
    />
  ),
  NYM: (
    <Image
      src="https://sportslogosvg.com/wp-content/uploads/2020/09/mets.png"
      alt="Mets"
      layout="fill"
      objectFit="contain"
    />
  ),
  MIA: (
    <Image
      src="https://sportslogosvg.com/wp-content/uploads/2020/09/marlins.png"
      alt="Marlins"
      layout="fill"
      objectFit="contain"
      priority
    />
  ),
  CHC: (
    <Image
      src="https://sportslogosvg.com/wp-content/uploads/2020/09/cubs.png"
      alt="Cubs"
      layout="fill"
      objectFit="contain"
    />
  ),
};
