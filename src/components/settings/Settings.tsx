import React, {FC} from 'react';
import {Scoreboard} from "../scoreboard/Scoreboard";
import s from './Settings.module.css';
import {Button} from "../button/Button";

type Props = {
   minValue: number
   maxValue: number
   changeMaxValue: (value: number) => void
}

export const Settings: FC<Props> = (props) => {
   const {minValue, maxValue} = props;

   return (
      <>
         <Scoreboard variant={"settings"}
                     minValue={minValue}
                     maxValue={maxValue}
         />
         <div className={s.btnWrapper}>
            <Button title="set" callback={() => {}}/>
         </div>
      </>
   );
};
