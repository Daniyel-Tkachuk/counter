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

   const disabledInc = currentValue === max;
   const disabledRes = currentValue === start;

   const stylesForValue = `${s.value} ${currentValue === max ? s.maxValue : ""}`;

   return (
      <div className={s.counter}>
         <div className={s.display}>
            <span className={stylesForValue}>{currentValue}</span>
         </div>
         <div className={s.buttons}>
            <Button text="inc" disabled={disabledInc} onClick={incrCounter} />
            <Button text="reset" disabled={disabledRes} onClick={resCounter} />
         </div>
      </div>
   );
};
