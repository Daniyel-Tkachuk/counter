import React, {FC} from 'react';
import s from './Scoreboard.module.css';
import {CountValue} from "./countValue/CountValue";
import {CounterSettings} from "./counterSettings/CounterSettings";

type Props = {
   variant: "count" | "settings"
}

export const Scoreboard: FC<Props> = (props) => {
   const {variant} = props;

   const stylesForDisplay = variant === "count" ? s.count : s.settings;
   const displayJSX = variant === "count"
      ? <CountValue/>
      : <CounterSettings/>

   return (
      <div className={s.scoreboard}>
         <div className={stylesForDisplay}>
            {displayJSX}
         </div>
      </div>
   );
};




