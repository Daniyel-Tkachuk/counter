import React from 'react';
import './App.css';
import {Settings} from "./components/settings/Settings";
import {Counter} from "./components/counter/Counter";
import {CounterWrapper} from "./components/wrapper/CounterWrapper";

function App() {
   return (
      <div className="App">
         <div className={"flex-container"}>
            <CounterWrapper>
               <Counter/>
            </CounterWrapper>
            <CounterWrapper>
               <Settings/>
            </CounterWrapper>
         </div>
      </div>
   );
}

export default App;

