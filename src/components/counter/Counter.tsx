import React, {FC} from 'react';
import s from './Counter.module.css';
import {Scoreboard} from "../scoreboard/Scoreboard";
import {Button} from "../button/Button";

type Props = {
   currentValue: number
   incCurrentValue: () => void
   resCurrentValue: () => void
   maxValue: number
   minValue: number
   clueText: string | null
}

export const Counter: FC<Props> = (props) => {
   const {currentValue, maxValue, minValue, clueText,
      incCurrentValue, resCurrentValue} = props;

   const disabledForInc = maxValue === currentValue || currentValue === -1;
   const disabledForRes = minValue === currentValue || currentValue === -1;


   return (
      <>
         <Scoreboard variant="count"
                     currentValue={currentValue}
                     maxValue={maxValue}
                     clueText={clueText}
         />
         <div className={s.btnWrapper}>
            <Button title="inc" callback={incCurrentValue} disabled={disabledForInc}/>
            <Button title="reset" callback={resCurrentValue} disabled={disabledForRes}/>
         </div>
      </>

   );
};