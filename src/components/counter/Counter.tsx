import React, {FC} from 'react';
import s from './Counter.module.css';
import {Button} from "../button/Button";

type Props = {

}

export const Counter: FC<Props> = (props) => {
   const {} = props;

   return (
      <div className={s.counter}>
         <div className={s.display}>
            <span>0</span>
         </div>
         <div className={s.buttons}>
            <Button text="inc"/>
            <Button text="reset"/>
         </div>
      </div>
   );
};
