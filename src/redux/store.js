import { configureStore } from '@reduxjs/toolkit';

// reducers
import contactsReducer from "./contacts/contacts-reducer";
import filterReducer from "./filter/filter-reducer";

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer
    }
});

export default store;

// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { createStore } from "redux";


// const initialState = {
//     contacts: [],
//     filter: ""
//   }

//   const rootReducer = (state = initialState, action) => {
//     return state;
//   };
  
// const enhancer = devToolsEnhancer();