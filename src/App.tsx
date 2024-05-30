import React, {useEffect, useState} from 'react';
import './App.css';
import {Container} from "./components/container/Container";
import {Counter} from "./components/counter/Counter";
import {Settings} from "./components/settings/Settings";


export type StateType = {
   currentValue: number,
   maxValue: number,
   startValue: number,
   clueText: string | null
   errorText: string
}

function App() {

   const [state, setState] = useState<StateType>(() => {
      const saveState = localStorage.getItem("state");
      if (saveState) return JSON.parse(saveState);

      return {
         currentValue: 2,
         maxValue: 5,
         startValue: 2,
         clueText: null,
         errorText: "incorrectValue"
      }
   });

   useEffect(() => {
      localStorage.setItem("state", JSON.stringify(state));
   }, [state])

   const incrementCounter = () => {
      setState(prevState => {
         return {
            ...prevState,
            currentValue: prevState.currentValue + 1
         }
      })
   }

   const resetCounter = () => {
      setState(prevState => {
         return {
            ...prevState,
            currentValue: prevState.startValue
         }
      })
   }

   const updateCounterLimits = (key: "startValue" | "maxValue", value: number) => {
      setState({
         ...state,
         [key]: value,
         currentValue: -1,
         clueText: "enter values and press 'set'"
      })
   }

   const setCounterLimit = () => {
      setState(prevState => {
         return {
            ...prevState,
            currentValue: prevState.startValue,
            clueText: null,
         }
      })
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

