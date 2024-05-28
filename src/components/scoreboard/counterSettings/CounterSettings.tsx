import React, {FC} from "react";
import s from './CounterSettings.module.css'
import {Input} from "../../input/Input";

type Props = {
   minValue: number
   maxValue: number
   changeMinMaxValue: ((key: "minValue" | "maxValue", value: number) => void) | undefined
}
export const CounterSettings: FC<Props> = (props) => {
   const {minValue, maxValue, changeMinMaxValue} = props;

   const onChangeMinValue = (minValue: number) => {
      changeMinMaxValue && changeMinMaxValue("minValue", minValue)
   }

   const onChangeMaxValue = (maxValue: number) => {
      changeMinMaxValue && changeMinMaxValue("maxValue", maxValue)
   }

   const errorInputStyles = maxValue === minValue
   || maxValue < 0
   || minValue < 0
   || minValue > maxValue;

   return (
      <>
         <div className={s.container}>
            <span className={s.span}>max value:</span>
            <Input value={maxValue} onChangeValue={onChangeMaxValue} errorStyles={errorInputStyles}/>
         </div>
         <div className={s.container}>
            <span className={s.span}>start value:</span>
            <Input value={minValue} onChangeValue={onChangeMinValue} errorStyles={errorInputStyles}/>
         </div>
      </>
   )
};