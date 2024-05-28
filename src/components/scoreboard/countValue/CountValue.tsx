import React, {FC} from "react";
import s from './CountValue.module.css';

type Props = {
   currentValue: number
   maxValue: number
}
export const CountValue: FC<Props> = (props) => {
   const {currentValue, maxValue} = props;

   const styles = `${s.currentValue} ${currentValue === maxValue && s.max}`

   return (
      <span className={styles}>
         {currentValue}
      </span>
   )
}
