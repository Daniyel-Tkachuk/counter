import React, {FC} from 'react';
import s from './Button.module.css';

type Props = {
   text: string
}

export const Button: FC<Props> = (props) => {
   const {text} = props;

   return (
      <button className={s.button}>{text}</button>
   );
};
