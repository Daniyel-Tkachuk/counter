import React, {FC} from 'react';
import s from './Container.module.css';

type Props = {
   children: React.ReactNode
}

export const Container: FC<Props> = (props) => {
   const {children} = props;

   return (
      <div className={s.container}>
         {children}
      </div>
   );
};
