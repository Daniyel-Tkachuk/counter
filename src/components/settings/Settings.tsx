import React, {FC} from 'react';
import s from './Settings.module.css';
import {Button} from "../button/Button";
import {Input} from "../input/Input";

type Props = {

}

export const Settings: FC<Props> = (props) => {
   return (
      <div className={s.settings}>
        <div className={s.settingsField}>
            <div>
               <span>max value:</span>
               <Input/>
            </div>
           <div>
              <span>start value:</span>
              <Input/>
           </div>
        </div>
         <div className={s.buttons}>
            <Button text="set"/>
         </div>
      </div>
   );
};
