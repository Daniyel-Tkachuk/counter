import React, {FC, JSX} from 'react';
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
         clueText,
         errorText
      },
      incrCounter,
      resCounter,
   } = props;

   const disabledInc = currentValue === max || currentValue === -1;
   const disabledRes = currentValue === start || currentValue === -1;

   const stylesForValue = `${s.value} ${currentValue === max ? s.maxValue : ""}`;

   const getJSX = (): JSX.Element => {
      if (start >= max || start < 0) {
         return <span className={s.errorText}>{errorText}</span>
      }
      if (clueText) {
         return <span className={s.clueText}>{clueText}</span>
      }
      return <span className={stylesForValue}>{currentValue}</span>
   }

   return (
      <div className={s.counter}>
         <div className={s.display}>
            {getJSX()}
         </div>
         <div className={s.buttons}>
            <Button text="inc" disabled={disabledInc} onClick={incrCounter} />
            <Button text="reset" disabled={disabledRes} onClick={resCounter} />
         </div>
      </div>
   );
};
