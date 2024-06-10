import React, {FC} from 'react';
import s from './Settings.module.css';
import {Button} from "../button/Button";
import {Input} from "../input/Input";
import {Text} from "../text/Text";
import {StateType} from "../../reducers/counterReducer";

type Props = {
   state: StateType
   updateCounterLimits: (key: "startValue" | "maxValue", value: number) => void
   setCounterLimit: () => void
}

export const Settings: FC<Props> = (props) => {
   const {
      state: {
         currentValue,
         startValue: start,
         maxValue: max,
         clueText,
      },
      updateCounterLimits,
      setCounterLimit,
   } = props;

   const disabledSet = currentValue === start
      || !clueText
      || start >= max
      || start < 0;

   const errorInput = start >= max  || start < 0;

   const onChangeInputStart = (value: string) => {
      updateCounterLimits("startValue", +value);
   }

   const onChangeInputMax = (value: string) => {
      updateCounterLimits("maxValue", +value);
   }

   return (
      <div className={s.settings}>
         <div className={s.settingsField}>
            <div>
               <Text text="max value:"/>
               <Input value={max} error={errorInput} onChange={onChangeInputMax}/>
            </div>
            <div>
               <Text text="start value:"/>
               <Input value={start} error={errorInput} onChange={onChangeInputStart}/>
            </div>
         </div>
         <div className={s.buttons}>
            <Button text="set" disabled={disabledSet} onClick={setCounterLimit}/>
         </div>
      </div>
   );
};
