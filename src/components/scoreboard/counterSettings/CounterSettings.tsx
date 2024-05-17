import React, {FC} from "react";
import s from './CounterSettings.module.css'

type Props = {

}
export const CounterSettings: FC<Props> = (props) => {
   const {} = props;

   return (
      <>
         <div className={s.container}>
            <span className={s.span}>max value:</span>
            <input type="number" className={s.input}/>
         </div>
         <div className={s.container}>
            <span className={s.span}>max value:</span>
            <input type="number" className={s.input}/>
         </div>
      </>
   )
};