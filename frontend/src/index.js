import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { createStore } from "redux"

// The adjusted order, including reducers, is: dispatch ➡️ action creator ➡️ thunk ➡️ action ➡️ reducer.
const initalState ={
  cname:"",
  obAddress: [
    {name:""},
    {add1: ""},
    {city: ""}
  ]
}
const reducer = (state = initalState, action)=>{
  console.log("Index=>reducer", state, action, action.type)
  if (action.type == "DIPLAY_NAME"){
    return {
      ...state, 
      cname : action.value
    }
  }
  if (action.type == "DIPLAY_ADDRESS"){
    return {
      ...state, 
      obAddress : action.value
    }
  }
  return state;
}

const store = createStore(reducer);
// store.dispatch({type: "DIPLAY_NAME", value:"Asif"})
// store.dispatch({type: "DIPLAY_ADDRESS", value:"R-309, Uttam nagar, New Delhi"})
// // store.subscribe(()=>{})
// console.log("this is state " + JSON.stringify(store.getState()) )


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
