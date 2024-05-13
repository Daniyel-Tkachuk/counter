import React, {FC} from 'react';
import s from './CounterWrapper.module.css';
import {Scoreboard} from "../scoreboard/Scoreboard";

type Props = {
   variant?: "count" | "settings"
}

export const CounterWrapper: FC<Props> = (props) => {
   const {variant} = props;

   return (
      <div className={s.counter}>
            <Scoreboard>
               123
            </Scoreboard>
            <div className={s.btnWrapper}>

            </div>
      </div>
);
};
