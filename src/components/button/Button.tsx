import React, {FC} from 'react';
import s from './Button.module.css';

type Props = {
   text: string
   onClick?: () => void
}

export const Button: FC<Props> = (props) => {
   const {text, onClick} = props;

   const onClickHandler = () => {
      onClick?.();
   }

   return (
      <button className={s.button} onClick={onClickHandler}>
         {text}
      </button>
   );
};
