import React, {ChangeEvent, FC} from 'react';
import s from './Input.module.css';

type Props = {
   value: number
   onChangeValue: ((value: number) => void) | undefined
}

export const Input: FC<Props> = (props) => {
   const {value, onChangeValue} = props;

   const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChangeValue && onChangeValue(+e.currentTarget.value)
   }

   return (
      <input type="number" value={value} className={s.input} onChange={onChangeValueHandler}/>
   );
};
