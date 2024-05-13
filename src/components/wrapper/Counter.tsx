import React, {FC} from 'react';
import s from './CounterWrapper.module.css';
import {Scoreboard} from "../scoreboard/Scoreboard";
import {Button} from "../button/Button";

type Props = {
   variant: "count" | "settings"
}

export const Counter: FC<Props> = (props) => {
   const {variant} = props;

   return (
      <div className={s.counter}>
            <Scoreboard variant={variant}/>
            <div className={s.btnWrapper}>
               <Button title="inc" callback={() => {}}/>
               <Button title="reset" callback={() => {}}/>
            </div>
      </div>
);
};
