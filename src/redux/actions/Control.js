//export const SHOW_SPINNER      = '[ui] show spinner';
export const APP_HAS_STARTED = '[app] App has started';

export const appHasStarted = () => ({
  type: APP_HAS_STARTED
});


// store.dispatch((dispatch) => {
//     dispatch({type: "STARTUP"});
//     dispatch({type: "LOAD_PERSON_INFO"});
// });
