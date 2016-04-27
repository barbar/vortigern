/**
 * Type declerations for global development variables
 */

// A hack for the Redux DevTools Chrome extension.
interface Window {
  devToolsExtension?: () => void;
  __INITIAL_STATE__?: any;
}

interface window {
  devToolsExtension?: () => void;
  __INITIAL_STATE__?: any;
}