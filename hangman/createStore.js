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
    if (typeof action == "function") {
      return action(dispatch);
    }

    state = reducer(state, action);
    subscribers.forEach((fn) => fn());
  }

  return {
    subscribe,
    getState,
    dispatch,
  };
}
