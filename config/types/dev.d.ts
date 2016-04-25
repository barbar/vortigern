/**
 * Type declerations for global development variables
 */

// A global boolean that turns on or off devmode in the client.
declare let __DEV__: boolean;

// A hack for the Redux DevTools Chrome extension.
interface Window {
  devToolsExtension?: () => void;
}