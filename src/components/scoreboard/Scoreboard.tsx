import React, {FC} from 'react';
import s from './Scoreboard.module.css';

type Props = {
   variant: "count" | "settings"
}

export const Scoreboard: FC<Props> = (props) => {
   const {variant} = props;

   const stylesDisplay = variant === "count" ? s.count : s.settings;
   const displayJSX = variant === "count"
      ? <CounterValue/>
      : <CounterSettings/>


   return (
      <div className={s.scoreboard}>
         <div className={stylesDisplay}>
            {displayJSX}
         </div>
      </div>
   );
};

type CounterSettings = {

}
export const CounterSettings: FC<CounterSettings> = (props) => {
   const {} = props;

   return (
      <>
         <div>
            <span className={s.span}>max value:</span>
            <input type="number" className={s.input}/>
         </div>
         <div>
            <span className={s.span}>max value:</span>
            <input type="number" className={s.input}/>
         </div>
      </>
   )
};

type CounterValueProps = {

}
export const CounterValue: FC<CounterValueProps> = (props) => {
   const {} = props;

   return (
      <>
         1
      </>
   )
}

