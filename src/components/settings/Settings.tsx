import React, {FC} from 'react';
import s from './Settings.module.css';
import {Button} from "../button/Button";
import {Input} from "../input/Input";
import {Text} from "../text/Text";

type Props = {

}

export const Settings: FC<Props> = (props) => {
   return (
      <div className={s.settings}>
        <div className={s.settingsField}>
            <div>
               <Text text="max value:"/>
               <Input/>
            </div>
           <div>
              <Text text="start value:"/>
              <Input/>
           </div>
        </div>
         <div className={s.buttons}>
            <Button text="set"/>
         </div>
      </div>
   );
};
