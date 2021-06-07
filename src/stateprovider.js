import React, { createContext, useContext, useReducer } from "react";

//to prepare the data layer
export const StateContext = createContext();

//to wrap the app and provide data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//to pull information from the data layer
export const useStateValue = () => useContext(StateContext);

//head over to index.js and wrap our component in
//.....state provider
