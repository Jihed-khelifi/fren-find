import { ReactNode, createContext, useMemo, useReducer } from "react";

export enum GameActions {
  "TOGGLE_LEADERBOARD" = "TOGGLE_LEADERBOARD",
  "START_GAME" = "START_GAME",
  "PAUSE_GAME" = "PAUSE_GAME",
  "RESUME_GAME" = "RESUME_GAME",
  "FINISH_GAME" = "FINISH_GAME",
  "WIN_GAME" = "WIN_GAME",
  "LOSE_GAME" = "LOSE_GAME",
  "SET_LEVEL" = "SET_LEVEL",
  "SET_SCORE" = "SET_SCORE",
  "SET_TIMEPLAYED" = "SET_TIMEPLAYED",
  "TOGGLE_MUSIC" = "TOGGLE_MUSIC",
}

type SetToggleLeaderboard = {
  type: typeof GameActions.TOGGLE_LEADERBOARD;
};

type StartGame = {
  type: typeof GameActions.START_GAME;
};

type PauseGame = {
  type: typeof GameActions.PAUSE_GAME;
};

type ResumeGame = {
  type: typeof GameActions.RESUME_GAME;
};

type FinishGame = {
  type: typeof GameActions.FINISH_GAME;
};

type WinGame = {
  type: typeof GameActions.WIN_GAME;
};

type LoseGame = {
  type: typeof GameActions.LOSE_GAME;
};

type SetLevel = {
  type: typeof GameActions.SET_LEVEL;
  payload: number;
};

type SetScore = {
  type: typeof GameActions.SET_SCORE;
  payload: number;
};

type SetTimePlayed = {
  type: typeof GameActions.SET_TIMEPLAYED;
  payload: number;
};

type GameActionsType =
  | SetToggleLeaderboard
  | StartGame
  | PauseGame
  | ResumeGame
  | FinishGame
  | WinGame
  | LoseGame
  | SetLevel
  | SetScore
  | SetTimePlayed;

export type GameState = {
  isLeaderboardVisible: boolean;
  level: number;
  score: number;
  timeplayed: number;
  isGamePaused: boolean;
  isGameStarted: boolean;
  isGameFinished: boolean;
  isGameWon: boolean;
  isGameLost: boolean;
  isMusicOn: boolean;
};

const initialState: GameState = {
  isLeaderboardVisible: false,
  level: 1,
  score: 0,
  timeplayed: 0,
  isGamePaused: false,
  isGameStarted: false,
  isGameFinished: false,
  isGameWon: false,
  isGameLost: false,
  isMusicOn: true,
};

export const gameReducer = (state: GameState, action: any) => {
  switch (action.type) {
    case GameActions.TOGGLE_LEADERBOARD:
      return { ...state, isLeaderboardVisible: !state.isLeaderboardVisible };
    case GameActions.START_GAME:
      return { ...state, isGameStarted: true };
    case GameActions.PAUSE_GAME:
      return { ...state, isGamePaused: true };
    case GameActions.RESUME_GAME:
      return { ...state, isGamePaused: false };
    case GameActions.FINISH_GAME:
      return { ...state, isGameFinished: true };
    case GameActions.WIN_GAME:
      return { ...state, isGameWon: true };
    case GameActions.LOSE_GAME:
      return { ...state, isGameLost: true };
    case GameActions.SET_LEVEL:
      return { ...state, level: action.payload };
    case GameActions.SET_SCORE:
      return { ...state, score: action.payload };
    case GameActions.SET_TIMEPLAYED:
      return { ...state, timeplayed: action.payload };
    case GameActions.TOGGLE_MUSIC:
      return { ...state, isMusicOn: !state.isMusicOn };
    default:
      return state;
  }
};

export const GameContext = createContext<
  [GameState, React.Dispatch<GameActionsType>]
>([initialState, () => {}]);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const value: any = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return <GameContext.Provider value={[state, dispatch]}>{children}</GameContext.Provider>;
};
