import React, {FC} from 'react';
import {Scoreboard} from "../scoreboard/Scoreboard";
import s from './Settings.module.css';
import {Button} from "../button/Button";

type Props = {
   minValue: number
   maxValue: number
   changeMinMaxValue: (key: "minValue" | "maxValue", value: number) => void
   setSettings: () => void
}

export const Settings: FC<Props> = (props) => {
   const {minValue, maxValue, changeMinMaxValue, setSettings} = props;

   return (
      <>
         <Scoreboard variant={"settings"}
                     minValue={minValue}
                     maxValue={maxValue}
                     changeMinMaxValue={changeMinMaxValue}

         />
         <div className={s.btnWrapper}>
            <Button title="set" callback={setSettings}/>
         </div>
      </>
   );
};
