import React, {FC} from "react";
import s from './CountValue.module.css';

type Props = {
   currentValue: number
   maxValue: number
   clueText: string | null
}
export const CountValue: FC<Props> = (props) => {
   const {currentValue, maxValue, clueText} = props;

   const styles = `${s.currentValue} ${currentValue === maxValue && s.max}`;

   const getValue = () => {
      return clueText === null
         ? <span className={styles}>{currentValue}</span>
         : <span className={s.text}>{clueText}</span>
   }

   return (
      <>
         {getValue()}
      </>
   )
}
