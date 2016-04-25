/**
 * Type declerations for global development variables
 */

// A global boolean that turns on or off devmode in the client.
declare let __DEV__: boolean;

declare let process: any;

// A hack for the Redux DevTools Chrome extension.
interface Window {
  devToolsExtension?: () => void;
  __INITIAL_STATE__?: string;
}