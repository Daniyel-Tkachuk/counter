import React, {FC} from 'react';
import s from './Scoreboard.module.css';

type Props = {
   children: React.ReactNode
   variant?: "count" | "settings"
}

export const Scoreboard: FC<Props> = (props) => {
   const {children, variant = "count"} = props;

   return (
      <div className={s.scoreboard}>
         <div className={s.count}>
            {children}
         </div>
      </div>
   );
};
