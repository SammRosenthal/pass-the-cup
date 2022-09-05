type TRole = "owner" | "player";

type TPlayer = {
  name: string;
  score: number;
  role: TRole;
};

export class Player {
  name: string;
  score: number;
  role: TRole;

  constructor(name: string, role: TRole, score = 0) {
    this.name = name;
    this.score = score;
    this.role = role;
  }
}

export class MlbPassTheCup {
  players: Player[];
  cupTotal: number;
  gameId: string;

  constructor(owner: Player, gameId: string, cupTotal: number) {
    this.players = [owner];
    this.gameId = "123";
    this.cupTotal = cupTotal;
  }

  getGameStatus() {
    return {
      players: this.players,
      cupTotal: this.cupTotal,
    };
  }

  updateGameState() {
    return {};
  }
}

const test = new MlbPassTheCup(new Player("sam", "owner", 99), "ABCDE", 9999);

//   if (currData.Game.CurrentHitterID !== prevData.Game.CurrentHitterID) {
//     if (currData.Game.Outs !== prevData.Game.Outs) {
//       if (currentTeamAtBat?.Strikeouts) {
//         // strikeout
//         // return -2;
//       }
//       // ground/pop out
//       // return -1;
//     }

//     // handle hits
//     if (currData.Game.RunnerOnFirst) {
//       // single
//       // return 1;
//     } else if (currData.Game.RunnerOnSecond) {
//       // double
//       // return 2;
//     } else if (currData.Game.RunnerOnThird) {
//       // triple
//       // return 3;
//     } else {
//       // home run
//       // return cupValue;
//     }
//   }
// /** Planning stuff to make the game */

// //  RULES FOR BASEBALL POINT TRACKING
// //   ------------------------------
// //   | (-) means put money in cup |
// //   | (+) means take money out   |
// //   ------------------------------
// //  -- Strikeout: -2
// //  -- Fly/ground out: -1
// //  -- Ejection: -20 -- Don't think we will have access to this data
// //  -- Single: +1
// //  -- Double: +2
// //  -- Triple: +3
// //  -- Home run: take the cup
