/**
 * Type declerations for global development variables
 */

// A hack for the Redux DevTools Chrome extension.
interface Window {
  devToolsExtension?: () => any;
  __INITIAL_STATE__?: any;
  __karma__?: any;
  reduxAppReady?: boolean
}

interface ObjectConstructor {
  assign<T, U>(target: T, source: U): T & U;
  assign<T, U, V>(target: T, source1: U, source2: V): T & U & V;
  assign<T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
  assign(target: any, ...sources: any[]): any;
}

interface IAction <T> {
  type: string;
  payload: T;
}
