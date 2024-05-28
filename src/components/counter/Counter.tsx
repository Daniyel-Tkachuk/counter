import React, {FC} from 'react';
import s from './Counter.module.css';
import {Scoreboard} from "../scoreboard/Scoreboard";
import {Button} from "../button/Button";

type Props = {
   currentValue: number
   incCurrentValue: () => void
   resCurrentValue: () => void
}

export const Counter: FC<Props> = (props) => {
   const {currentValue, incCurrentValue, resCurrentValue} = props;

   return (
      <>
         <Scoreboard variant="count" currentValue={currentValue}/>
         <div className={s.btnWrapper}>
            <Button title="inc" callback={incCurrentValue}/>
            <Button title="reset" callback={resCurrentValue}/>
         </div>
      </>

   );
};