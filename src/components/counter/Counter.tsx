import React, {FC} from 'react';
import s from './Counter.module.css';
import {Scoreboard} from "../scoreboard/Scoreboard";
import {Button} from "../button/Button";

type Props = {
   currentValue: number
   incCurrentValue: () => void
   resCurrentValue: () => void
   maxValue: number
}

export const Counter: FC<Props> = (props) => {
   const {currentValue, maxValue, incCurrentValue, resCurrentValue} = props;

   const disabledForInc = maxValue === currentValue;

   return (
      <>
         <Scoreboard variant="count" currentValue={currentValue}/>
         <div className={s.btnWrapper}>
            <Button title="inc" callback={incCurrentValue} disabled={disabledForInc}/>
            <Button title="reset" callback={resCurrentValue} disabled={true}/>
         </div>
      </>

   );
};