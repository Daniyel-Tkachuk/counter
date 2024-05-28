import React, {useState} from 'react';
import './App.css';
import {Settings} from "./components/settings/Settings";
import {Counter} from "./components/counter/Counter";
import {CounterWrapper} from "./components/wrapper/CounterWrapper";

function App() {

   const [state, setState] = useState({
      currentValue: 2,
      minValue: 2,
      maxValue: 5,
   });

   const {currentValue, maxValue, minValue} = state;

   const incCurrentValue = () => {
      setState({...state, currentValue: currentValue + 1});
   }
   const resCurrentValue = () => {
      setState({...state, currentValue: state.minValue});
   }

   const changeMinMaxValue = (key: "minValue" | "maxValue", value: number) => {
      setState({...state, [key]: value});
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
               />
            </CounterWrapper>
            <CounterWrapper>
               <Settings minValue={minValue}
                         maxValue={maxValue}
                         changeMinMaxValue={changeMinMaxValue}
               />
            </CounterWrapper>
         </div>
      </div>
   );
}

export default App;

