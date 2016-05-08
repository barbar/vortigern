/** Stargazers Type Definitions */

export interface IStarGazers {
  isFetching?: boolean;
  count?: number;
  error?: boolean;
  message?: any;
}

export interface IStarGazersAction {
  type: string;
  count?: number;
  message?: any;
}
