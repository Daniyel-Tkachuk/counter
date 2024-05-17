import React, {FC} from "react";
import s from "./CounterWrapper.module.css";

type PropsCounterWrapper = {
   children: React.ReactNode
}

export const CounterWrapper: FC<PropsCounterWrapper> = ({children}) => {

   return (
      <div className={s.counterWrapper}>
         {children}
      </div>
   );
}