import React, {FC} from 'react';
import s from './CounterWrapper.module.css';
import {Scoreboard} from "../scoreboard/Scoreboard";
import {Button} from "../button/Button";

type Props = {

}

export const Counter: FC<Props> = (props) => {
   const {} = props;

   return (
      <div className={s.counter}>
            <Scoreboard variant="settings"/>
            <div className={s.btnWrapper}>
               <Button title="inc" callback={() => {}}/>
               <Button title="reset" callback={() => {}}/>
            </div>
      </div>
);
};
