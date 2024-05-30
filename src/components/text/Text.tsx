import React, {FC} from 'react';
import s from './Text.module.css';

type Props = {
   text: string
}

export const Text: FC<Props> = (props) => {
   const {text} = props;

   return (
      <span className={s.text}>{text}</span>
   );
};
