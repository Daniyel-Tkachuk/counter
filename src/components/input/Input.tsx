import React, {ChangeEvent, FC} from 'react';
import s from './Input.module.css';
import {Simulate} from "react-dom/test-utils";

type Props = {
   value: number
   error: boolean
   onChangeValue: ((value: number) => void) | undefined
}

export const Input: FC<Props> = (props) => {
   const {value, error, onChangeValue} = props;

   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChangeValue && onChangeValue(+e.currentTarget.value)
   }

   const styles = `${s.input} ${error ? s.inputError : ""}`

   return (
      <input type="number" value={value} className={styles} onChange={onChangeHandler}/>
   );
};
