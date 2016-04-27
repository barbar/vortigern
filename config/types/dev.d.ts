/**
 * Type declerations for global development variables
 */

// A hack for the Redux DevTools Chrome extension.
interface Window {
  devToolsExtension?: () => any;
  __INITIAL_STATE__?: any;
}

interface Global {
  devToolsExtension?: () => any;
  __INITIAL_STATE__?: any;
}