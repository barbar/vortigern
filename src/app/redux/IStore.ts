import { ICounter } from 'models/counter';
import { IStars } from 'models/stars';

export interface IStore {
  counter: ICounter;
  stars: IStars;
};
