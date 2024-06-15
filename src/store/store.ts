import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "../reducers/counterReducer";
import {loadState, saveState} from "../utils/localStorage-utils";


const rootReducer = combineReducers({
   counter: counterReducer
});

export const store = legacy_createStore(rootReducer, loadState());

export type AppRootStateType = ReturnType<typeof rootReducer>;

store.subscribe(() => {
   saveState({
      counter: store.getState().counter
   })
});

// @ts-ignore
window.store = store;


// localStorage 1 способ

/* GET VALUE with localStorage
let preloadedState;
const persistedStateString = localStorage.getItem("counterSettings");
if (persistedStateString) preloadedState = JSON.parse(persistedStateString);*/

/*SET VALUE from local storage
store.subscribe(() => {
   localStorage.setItem("counterSettings", JSON.stringify(store.getState()));
})*/


// localStorage 2 способ
// он реализован в текущем проекте
