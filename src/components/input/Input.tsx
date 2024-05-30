import React, {ChangeEvent, FC} from 'react';
import s from './Input.module.css';


type Props = {
   value: string | number
   error: boolean
   onChange?: (value: string) => void
}

export const Input: FC<Props> = (props) => {
   const {value, error, onChange} = props;

   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.currentTarget.value);
   }

   const styles = `${s.input} ${error ? s.error : ""}`

   return (
      <input type="number"
             className={styles}
             value={value}
             onChange={onChangeHandler}
      />
   );
};
