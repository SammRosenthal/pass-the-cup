import moment from "moment";
import { env } from "process";

// TODO clean this up to only the usefull data we use
export interface MlbGameData {
  GameID: number;
  Season: number;
  SeasonType: number;
  Status: string;
  Day: Date;
  DateTime: Date;
  AwayTeam: string;
  HomeTeam: string;
  AwayTeamID: number;
  HomeTeamID: number;
  RescheduledGameID?: any;
  StadiumID: number;
  Channel: string;
  Inning?: any;
  InningHalf?: any;
  AwayTeamRuns?: any;
  HomeTeamRuns?: any;
  AwayTeamHits?: any;
  HomeTeamHits?: any;
  AwayTeamErrors?: any;
  HomeTeamErrors?: any;
  WinningPitcherID?: any;
  LosingPitcherID?: any;
  SavingPitcherID?: any;
  Attendance?: any;
  AwayTeamProbablePitcherID: number;
  HomeTeamProbablePitcherID: number;
  Outs?: any;
  Balls?: any;
  Strikes?: any;
  CurrentPitcherID?: any;
  CurrentHitterID?: any;
  AwayTeamStartingPitcherID?: any;
  HomeTeamStartingPitcherID?: any;
  CurrentPitchingTeamID?: any;
  CurrentHittingTeamID?: any;
  PointSpread: number;
  OverUnder: number;
  AwayTeamMoneyLine: number;
  HomeTeamMoneyLine: number;
  ForecastTempLow: number;
  ForecastTempHigh: number;
  ForecastDescription: string;
  ForecastWindChill: number;
  ForecastWindSpeed: number;
  ForecastWindDirection: number;
  RescheduledFromGameID?: any;
  RunnerOnFirst?: any;
  RunnerOnSecond?: any;
  RunnerOnThird?: any;
  AwayTeamStartingPitcher: string;
  HomeTeamStartingPitcher: string;
  CurrentPitcher: string;
  CurrentHitter: string;
  WinningPitcher: string;
  LosingPitcher: string;
  SavingPitcher: string;
  DueUpHitterID1?: any;
  DueUpHitterID2?: any;
  DueUpHitterID3?: any;
  GlobalGameID: number;
  GlobalAwayTeamID: number;
  GlobalHomeTeamID: number;
  PointSpreadAwayTeamMoneyLine: number;
  PointSpreadHomeTeamMoneyLine: number;
  LastPlay: string;
  IsClosed: boolean;
  Updated: Date;
  GameEndDateTime?: any;
  HomeRotationNumber: number;
  AwayRotationNumber: number;
  NeutralVenue: boolean;
  InningDescription?: any;
  OverPayout: number;
  UnderPayout: number;
  DateTimeUTC: Date;
  SeriesInfo?: any;
  Innings: any[];
}

export const getAllGames = async (): Promise<MlbGameData[]> => {
  try {
    const today = moment().format("YYYY-MMM-D");
    const yesterday = moment().subtract(1, "days").format("YYYY-MMM-D");

    return Promise.all([
      fetch(
        `https://api.sportsdata.io/v3/mlb/scores/json/GamesByDate/${today}?key=${env.MLB_API_KEY}`
      ),
      fetch(
        `https://api.sportsdata.io/v3/mlb/scores/json/GamesByDate/${yesterday}?key=${env.MLB_API_KEY}`
      ),
    ])
      .then(([today, yesterday]) => {
        return Promise.all([today.json(), yesterday.json()]);
      })
      .then(([today, yesterday]) => {
        const test = [...today, ...yesterday];
        console.log(test);
        return test;
      });
  } catch (e) {
    // TODO error handling
    throw Error("ISSUE FETCHING ALL MLB GAMES");
  }
};
