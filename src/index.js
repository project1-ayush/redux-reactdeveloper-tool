import React from "react";
import ReactDOM from "react-dom";
import { createStore,compose } from "redux";
import { Provider } from "react-redux";
import Child from './child';
import DevTools from './doc';

const INTIAL_DATA = {
  city: "NewYork",
  exp: 10.5,
};
const enhancer=compose(DevTools.instrument());

const store=createStore(reducer,enhancer);

function reducer(state = INTIAL_DATA, action) {
  alert(JSON.stringify(action));

  if (action.type === "Citychange") {
    state["city"] = action.payload;
    var new_state = { ...state };
    return new_state;
  }
  else 
  {
    return state;
  }
}


const jsx = (
  <Provider store={store}>
    <Child />
    <DevTools/>
  </Provider>
);

ReactDOM.render(
  jsx,
  document.getElementById("root")
);


