import React, {FC} from "react";
import s from './CounterSettings.module.css'
import {Input} from "../../input/Input";

type Props = {

}
export const CounterSettings: FC<Props> = (props) => {
   const {} = props;

   return (
      <>
         <div className={s.container}>
            <span className={s.span}>max value:</span>
            <Input/>
         </div>
         <div className={s.container}>
            <span className={s.span}>max value:</span>
            <Input/>
         </div>
      </>
   )
};