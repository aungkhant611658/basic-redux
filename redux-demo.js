const redux = require("redux");

// Reducer Func
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type == "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type == "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

// createStore
const store = redux.createStore(counterReducer);

// Subscriber
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// store subscribe
store.subscribe(counterSubscriber);

// store dispatch
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
