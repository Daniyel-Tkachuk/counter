import React, {ChangeEvent, FC} from 'react';
import s from './Input.module.css';

type Props = {
   value: number
}

export const Input: FC<Props> = (props) => {
   const {value} = props;

   const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {

   }

   return (
      <input type="number" value={value} className={s.input}/>
   );
};
