import React, {FC} from 'react';
import s from './Button.module.css';

type Props = {
   text: string
   disabled: boolean
   onClick?: () => void
}

export const Button: FC<Props> = (props) => {
   const {text, disabled, onClick} = props;

   const onClickHandler = () => {
      onClick?.();
   }

   return (
      <button className={s.button} disabled={disabled} onClick={onClickHandler}>
         {text}
      </button>
   );
};
