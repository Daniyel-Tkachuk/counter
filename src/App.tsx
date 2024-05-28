import React, {useState} from 'react';
import './App.css';
import {Container} from "./components/container/Container";


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
      maxValue: 5,
      clueText: null
   });


   return (
      <div className="App">
        <div className={"flex-container"}>
           <Container>
              asd
           </Container>
           <Container>
              asd
           </Container>
        </div>
      </div>
   );
}

export default App;

