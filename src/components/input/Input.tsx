import React, {FC} from 'react';
import s from './Input.module.css';

type Props = {

}

export const Input: FC<Props> = (props) => {
   const {} = props;

   return (
      <input type="number" className={s.input}/>
   );
};
