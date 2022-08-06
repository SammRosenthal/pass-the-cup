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
  DET: (
    <Image
      src="https://sportslogosvg.com/wp-content/uploads/2020/09/tigers.png"
      alt="Tigers"
      layout="fill"
      objectFit="contain"
    />
  ),
  CLE: (
    <Image
      src="https://sportslogosvg.com/wp-content/uploads/2022/06/Cleveland_Guardians.png"
      alt="Guardians"
      layout="fill"
      objectFit="contain"
    />
  ),
  KC: (
    <Image
      src="https://sportslogosvg.com/wp-content/uploads/2020/09/royals.png"
      alt="Royals"
      layout="fill"
      objectFit="contain"
    />
  ),
  MIN: (
    <Image
      src="https://sportslogosvg.com/wp-content/uploads/2020/09/twins.png"
      alt="Twins"
      layout="fill"
      objectFit="contain"
    />
  ),
  CIN: (
    <Image
      src="https://sportslogosvg.com/wp-content/uploads/2020/09/reds.png"
      alt="Reds"
      layout="fill"
      objectFit="contain"
    />
  ),
  MIL: (
    <Image
      src="https://sportslogosvg.com/wp-content/uploads/2020/09/brewers.png"
      alt="Brewers"
      layout="fill"
      objectFit="contain"
    />
  ),
  PIT: (
    <Image
      src="https://sportslogosvg.com/wp-content/uploads/2020/09/pirates.png"
      alt="Pirates"
      layout="fill"
      objectFit="contain"
    />
  ),
  STL: (
    <Image
      src="https://sportslogosvg.com/wp-content/uploads/2020/09/cardinals.png"
      alt="Cardinals"
      layout="fill"
      objectFit="contain"
    />
  ),
  BAL: (
    <Image
      src="https://sportslogosvg.com/wp-content/uploads/2020/09/orioles.png"
      alt="Orioles"
      layout="fill"
      objectFit="contain"
    />
  ),
  BOS: (
    <Image
      src="https://sportslogosvg.com/wp-content/uploads/2020/09/redsox.png"
      alt="Red Sox"
      layout="fill"
      objectFit="contain"
    />
  ),
  NYY: (
    <Image
      src="https://sportslogosvg.com/wp-content/uploads/2020/09/yankees.png"
      alt="Yankees"
      layout="fill"
      objectFit="contain"
    />
  ),
  TB: (
    <Image
      src="https://sportslogosvg.com/wp-content/uploads/2020/09/rays.png"
      alt="Rays"
      layout="fill"
      objectFit="contain"
    />
  ),
  TOR: (
    <Image
      src="https://sportslogosvg.com/wp-content/uploads/2020/09/blue-jays.png"
      alt="Blue Jays"
      layout="fill"
      objectFit="contain"
    />
  ),
  HOU: (
    <Image
      src="https://sportslogosvg.com/wp-content/uploads/2020/09/astros.png"
      alt="Astros"
      layout="fill"
      objectFit="contain"
    />
  ),
  LAA: (
    <Image
      src="https://sportslogosvg.com/wp-content/uploads/2020/09/angels.png"
      alt="Angels"
      layout="fill"
      objectFit="contain"
    />
  ),
  OAK: (
    <Image
      src="https://sportslogosvg.com/wp-content/uploads/2020/09/athletics.png"
      alt="Athletics"
      layout="fill"
      objectFit="contain"
    />
  ),
  SEA: (
    <Image
      src="https://sportslogosvg.com/wp-content/uploads/2020/09/mariners.png"
      alt="Mariners"
      layout="fill"
      objectFit="contain"
    />
  ),
  TEX: (
    <Image
      src="https://sportslogosvg.com/wp-content/uploads/2020/09/rangers.png"
      alt="Rangers"
      layout="fill"
      objectFit="contain"
    />
  ),
  PHI: (
    <Image
      src="https://sportslogosvg.com/wp-content/uploads/2020/09/phillies.png"
      alt="Phillies"
      layout="fill"
      objectFit="contain"
    />
  ),
  WSH: (
    <Image
      src="https://sportslogosvg.com/wp-content/uploads/2020/09/nationals.png"
      alt="Nationals"
      layout="fill"
      objectFit="contain"
    />
  ),
  ARI: (
    <Image
      src="https://sportslogosvg.com/wp-content/uploads/2020/09/diamondbacks.png"
      alt="Diamondbacks"
      layout="fill"
      objectFit="contain"
    />
  ),
  COL: (
    <Image
      src="https://sportslogosvg.com/wp-content/uploads/2020/09/rockies.png"
      alt="Rockies"
      layout="fill"
      objectFit="contain"
    />
  ),
  LAD: (
    <Image
      src="https://sportslogosvg.com/wp-content/uploads/2020/09/dodgers.png"
      alt="Dodgers"
      layout="fill"
      objectFit="contain"
    />
  ),
  SD: (
    <Image
      src="https://sportslogosvg.com/wp-content/uploads/2020/09/padres.png"
      alt="Padres"
      layout="fill"
      objectFit="contain"
    />
  ),
  SF: (
    <Image
      src="https://sportslogosvg.com/wp-content/uploads/2020/09/giants.png"
      alt="Giants"
      layout="fill"
      objectFit="contain"
    />
  ),
};
