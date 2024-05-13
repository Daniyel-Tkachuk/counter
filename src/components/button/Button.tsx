import React, {FC} from 'react';
import s from './Button.module.css';

type Props = {
   title: string
   callback: () => void
}

export const Button: FC<Props> = (props) => {
   const {title, callback} = props;

   const onClickHandler = () => {
      callback()
   }

   return (
      <button className={s.button} onClick={onClickHandler}>
         {title}
      </button>)
};
