export function createStore(reducer) {
  let state;
  let subscribers = [];

  function getState() {
    return state;
  }

  function subscribe(fn) {
    subscribers.push(fn);
    dispatch({ type: "init" });
  }

  function dispatch(action) {
    state = reducer(state, action);
    subscribers.forEach((fn) => fn());
  }

  return {
    subscribe,
    getState,
    dispatch,
  };
}
