import React, {useState} from 'react';
import './App.css';
import {Container} from "./components/container/Container";
import {Counter} from "./components/counter/Counter";
import {Settings} from "./components/settings/Settings";


export type StateType = {
   currentValue: number,
   maxValue: number,
   startValue: number,
   clueText: string | null
}

function App() {

   const [state, setState] = useState<StateType>({
      currentValue: 0,
      maxValue: 0,
      startValue: 0,
      clueText: null
   });

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




   return (
      <div className="App">
        <div className={"flex-container"}>
           <Container>
              <Counter state={state} incrCounter={incrementCounter} resCounter={resetCounter}/>
           </Container>
           <Container>
              <Settings/>
           </Container>
        </div>
      </div>
   );
}

export default App;

