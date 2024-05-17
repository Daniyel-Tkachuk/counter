import React, {FC} from 'react';
import s from './Scoreboard.module.css';

type Props = {}

export const Scoreboard: FC<Props> = (props) => {
   const {} = props;


   return (
      <div className={s.scoreboard}>
         {/*<div className={s.count}>*/}
         {/*   0*/}
         {/*</div>*/}
         <div className={s.settings}>
            <SettingScoreBoard/>
         </div>
      </div>
   );
};

type PropsSettings = {

}
export const SettingScoreBoard: FC<PropsSettings> = (props) => {
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
}

