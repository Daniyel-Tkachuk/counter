import React, {useState} from 'react';
import './App.css';
import {Container} from "./components/container/Container";
import {Counter} from "./components/counter/Counter";
import {Settings} from "./components/settings/Settings";


type StateType = {
   currentValue: number,
   minValue: number,
   startValue: number,
   clueText: string | null
}

function App() {

   const [state, setState] = useState<StateType>({
      currentValue: 0,
      minValue: 0,
      startValue: 5,
      clueText: null
   });


   return (
      <div className="App">
        <div className={"flex-container"}>
           <Container>
              <Counter/>
           </Container>
           <Container>
              <Settings/>
           </Container>
        </div>
      </div>
   );
}

export default App;

