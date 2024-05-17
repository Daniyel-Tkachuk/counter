import React, {FC} from 'react';
import {Scoreboard} from "../scoreboard/Scoreboard";
import s from './Settings.module.css';
import {Button} from "../button/Button";

type Props = {}

export const Settings: FC<Props> = (props) => {
   const {} = props;

   return (
      <>
         <Scoreboard variant="settings"/>
         <div className={s.btnWrapper}>
            <Button title="inc" callback={() => {}}/>
         </div>
      </>
   );
};
