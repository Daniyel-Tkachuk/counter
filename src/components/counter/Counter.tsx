import React, {FC} from 'react';
import s from './Counter.module.css';
import {Scoreboard} from "../scoreboard/Scoreboard";
import {Button} from "../button/Button";

type Props = {}

export const Counter: FC<Props> = (props) => {
   const {} = props;

   return (
      <>
         <Scoreboard variant="count"/>
         <div className={s.btnWrapper}>
            <Button title="inc" callback={() => {}}/>
            <Button title="reset" callback={() => {}}/>
         </div>
      </>

   );
};