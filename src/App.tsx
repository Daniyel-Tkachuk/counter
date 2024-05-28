import React, {useState} from 'react';
import './App.css';
import {Settings} from "./components/settings/Settings";
import {Counter} from "./components/counter/Counter";
import {CounterWrapper} from "./components/wrapper/CounterWrapper";

type StateType = {
   currentValue: number,
   minValue: number,
   maxValue: number,
   clueText: string | null
}

function App() {

   const [state, setState] = useState<StateType>({
      currentValue: 0,
      minValue: 0,
      maxValue: 0,
      clueText: null
   });

   const {currentValue, maxValue, minValue, clueText} = state;

   const incCurrentValue = () => {
      setState({...state, currentValue: currentValue + 1});
   }

   const resCurrentValue = () => {
      setState({...state, currentValue: state.minValue});
   }

   const changeMinMaxValue = (key: "minValue" | "maxValue", value: number) => {
      setState({
         ...state,
         [key]: value,
         currentValue: -1,
         clueText: 'enter values and press set',
      });
   }

   const setSettings = () => {
      setState({
         ...state,
         currentValue: state.minValue,
         clueText: null
      });
   }

   return (
      <div className="App">
         <div className={"flex-container"}>
            <CounterWrapper>
               <Counter currentValue={currentValue}
                        incCurrentValue={incCurrentValue}
                        resCurrentValue={resCurrentValue}
                        maxValue={maxValue}
                        minValue={minValue}
                        clueText={clueText}
               />
            </CounterWrapper>
            <CounterWrapper>
               <Settings clueText={clueText}
                         minValue={minValue}
                         maxValue={maxValue}
                         changeMinMaxValue={changeMinMaxValue}
                         setSettings={setSettings}
               />
            </CounterWrapper>
         </div>
      </div>
   );
}

export default App;

