/**
 * Type declerations for global development variables
 */

// A global boolean that turns on or off devmode in the client.
declare let __CLIENT__: boolean;
declare let __SERVER__: boolean;
declare let __DEVELOPMENT__: boolean;
declare let __PRODUCTION__: boolean;

declare let process: any;

// A hack for the Redux DevTools Chrome extension.
interface Window {
  devToolsExtension?: () => void;
  __INITIAL_STATE__?: any;
}

interface window {
  devToolsExtension?: () => void;
  __INITIAL_STATE__?: any;
}