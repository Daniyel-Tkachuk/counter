import React, {FC} from "react";
import s from './CounterSettings.module.css'
import {Input} from "../../input/Input";

type Props = {
   minValue: number
   maxValue: number
}
export const CounterSettings: FC<Props> = (props) => {
   const {minValue, maxValue} = props;

   return (
      <>
         <div className={s.container}>
            <span className={s.span}>max value:</span>
            <Input value={minValue}/>
         </div>
         <div className={s.container}>
            <span className={s.span}>max value:</span>
            <Input value={maxValue}/>
         </div>
      </>
   )
};