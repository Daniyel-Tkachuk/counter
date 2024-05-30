import React, {FC} from 'react';
import s from './Counter.module.css';
import {Button} from "../button/Button";
import {StateType} from "../../App";

type Props = {
   state: StateType
   incrCounter: () => void
   resCounter: () => void
}

export const Counter: FC<Props> = (props) => {
   const {
      state: {
         currentValue,
         maxValue: max,
         startValue: start,
         clueText
      },
      incrCounter,
      resCounter,
   } = props;

   return (
      <div className={s.counter}>
         <div className={s.display}>
            <span>{currentValue}</span>
         </div>
         <div className={s.buttons}>
            <Button text="inc" onClick={incrCounter}/>
            <Button text="reset" onClick={resCounter}/>
         </div>
      </div>
   );
};
