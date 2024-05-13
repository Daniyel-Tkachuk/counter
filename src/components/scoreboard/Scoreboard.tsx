import React, {FC} from 'react';
import s from './Scoreboard.module.css';

type Props = {
   variant: "count" | "settings"
}

export const Scoreboard: FC<Props> = (props) => {
   const {variant} = props;

   const JSX = variant === "count"
      ? <CountScoreboard currentValue={2}/>
      : <SettingsScoreboard />


   return (
      <div className={s.scoreboard}>
         <div className={s.count}>
            {JSX}
         </div>
      </div>
   );
};

type PropsCount = {
   currentValue?: number
}

const CountScoreboard: FC<PropsCount> = (props) => {
   const {currentValue} = props;

   return (
      <span>{currentValue}</span>
   )
}

type PropsSettings = {
   minValue?: number
   maxValue?: number
}

const SettingsScoreboard: FC<PropsSettings> = (props) => {
   const {minValue, maxValue} = props;

   return (
     <div></div>
   );
}