import React, {FC} from 'react';
import {Scoreboard} from "../scoreboard/Scoreboard";
import s from './Settings.module.css';
import {Button} from "../button/Button";

type Props = {
   minValue: number
   maxValue: number
   clueText: string | null
   changeMinMaxValue: (key: "minValue" | "maxValue", value: number) => void
   setSettings: () => void
}

export const Settings: FC<Props> = (props) => {
   const {minValue, maxValue, clueText, changeMinMaxValue, setSettings} = props;

   const disabledSet = clueText === null
      || minValue < 0
      || maxValue < 0
      || maxValue === minValue
      || minValue > maxValue;

   return (
      <>
         <Scoreboard variant={"settings"}
                     minValue={minValue}
                     maxValue={maxValue}
                     changeMinMaxValue={changeMinMaxValue}

         />
         <div className={s.btnWrapper}>
            <Button title="set" callback={setSettings} disabled={disabledSet}/>
         </div>
      </>
   );
};
