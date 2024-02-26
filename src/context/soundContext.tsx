import { createContext, useReducer, ReactNode } from "react";

export enum GameActions {
  "TOGGLE_MUSIC" = "TOGGLE_MUSIC",
  "PLAY_WRONG_SOUND" = "PLAY_WRONG_SOUND",
  "PLAY_CORRECT_SOUND" = "PLAY_CORRECT_SOUND",
  "STOP_ALL_SOUNDS" = "STOP_ALL_SOUNDS",
}

type ToggleMusic = {
  type: typeof GameActions.TOGGLE_MUSIC;
};

type PlayWrongSound = {
  type: typeof GameActions.PLAY_WRONG_SOUND;
};

type PlayCorrectSound = {
  type: typeof GameActions.PLAY_CORRECT_SOUND;
};

type StopAllSounds = {
  type: typeof GameActions.STOP_ALL_SOUNDS;
};

export type SoundActiions =
  | ToggleMusic
  | PlayWrongSound
  | PlayCorrectSound
  | StopAllSounds;

export type SoundState = {
  isMusicOn: boolean;
  playingSounds: string[];
};

const initialState: SoundState = {
  isMusicOn: true,
  playingSounds: [],
};

const soundReducer = (state: SoundState, action: SoundActiions) => {
  switch (action.type) {
    case GameActions.TOGGLE_MUSIC:
      return { ...state, isMusicOn: !state.isMusicOn };
    case GameActions.PLAY_WRONG_SOUND:
      return state;
    case GameActions.PLAY_CORRECT_SOUND:
      return state;

    case GameActions.STOP_ALL_SOUNDS:
      return state;
    default:
      return state;
  }
};

export const SoundContext = createContext<{
  state: SoundState;
  dispatch: React.Dispatch<SoundActiions>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const SoundProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(soundReducer, initialState);

  return (
    <SoundContext.Provider value={{ state, dispatch }}>
      {children}
    </SoundContext.Provider>
  );
};
