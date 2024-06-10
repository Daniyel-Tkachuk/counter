import React from 'react';
import './App.css';
import {Container} from "./components/container/Container";
import {Counter} from "./components/counter/Counter";
import {Settings} from "./components/settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import {Dispatch} from "redux";
import {
   ActionsType,
   incrementCounterAC,
   resetCounterAC,
   setCounterLimitsAC, StateType,
   updateCounterLimitsAC
} from "./reducers/counterReducer";

function App() {

   const state = useSelector<AppRootStateType, StateType>(state => state.counter);
   const dispatch = useDispatch<Dispatch<ActionsType>>();

   const incrementCounter = () => {
      dispatch(incrementCounterAC());
   }

   const resetCounter = () => {
      dispatch(resetCounterAC());
   }

   const updateCounterLimits = (key: "startValue" | "maxValue", value: number) => {
      dispatch(updateCounterLimitsAC(key,  value));
   }

   const setCounterLimit = () => {
      dispatch(setCounterLimitsAC());
   }


   return (
      <div className="App">
         <div className={"flex-container"}>
            <Container>
               <Counter state={state}
                        incrCounter={incrementCounter}
                        resCounter={resetCounter}
               />
            </Container>
            <Container>
               <Settings state={state}
                         updateCounterLimits={updateCounterLimits}
                         setCounterLimit={setCounterLimit}
               />
            </Container>
         </div>
      </div>
   );
}

export default App;

