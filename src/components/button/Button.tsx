import React, {FC} from 'react';
import s from './Button.module.css';

type Props = {
   title: string
   callback: () => void
   disabled?: boolean
}

export const Button: FC<Props> = (props) => {
   const {title, callback, disabled} = props;

   const onClickHandler = () => {
      callback()
   }

   return (
      <button className={s.button} onClick={onClickHandler} disabled={disabled}>
         {title}
      </button>)
};
