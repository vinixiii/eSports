export interface GameScreenParams {
  id: string;
  title: string;
  bannerUrl: string;
}

export type AppParamList = {
  HomeScreen: undefined;
  GameScreen: GameScreenParams;
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppParamList {}
  }
}
