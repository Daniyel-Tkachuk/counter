import React, {FC} from 'react';
import s from './Scoreboard.module.css';
import {CountValue} from "./countValue/CountValue";
import {CounterSettings} from "./counterSettings/CounterSettings";

type Props = {
   variant: "count" | "settings"
   currentValue?: number
   minValue?: number
   maxValue?: number
   changeMinMaxValue?: (key: "minValue" | "maxValue", value: number) => void
}

export const Scoreboard: FC<Props> = (props) => {
   const {variant, currentValue, minValue,
      maxValue, changeMinMaxValue} = props;

   const valueForCount = currentValue !== undefined ? currentValue : 0;
   const min = minValue !== undefined ? minValue : 0;
   const max = maxValue !== undefined ? maxValue : 0;

   const stylesForDisplay = variant === "count" ? s.count : s.settings;

   const displayJSX = variant === "count"
      ? <CountValue currentValue={valueForCount} maxValue={max}/>
      : <CounterSettings minValue={min} maxValue={max} changeMinMaxValue={changeMinMaxValue}/>

   return (
      <div className={s.scoreboard}>
         <div className={stylesForDisplay}>
            {displayJSX}
         </div>
      </div>
   );
};




