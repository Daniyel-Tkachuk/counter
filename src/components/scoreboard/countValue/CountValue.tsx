import React, {FC} from "react";

type Props = {
   currentValue: number
}
export const CountValue: FC<Props> = (props) => {
   const {currentValue} = props;

   return (
      <>
         {currentValue}
      </>
   )
}
