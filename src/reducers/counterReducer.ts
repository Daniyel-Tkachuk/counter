
/*export type StateType = {
   currentValue: number
   maxValue: number
   startValue: number
   clueText: string | null
   errorText: string
}*/

type StateType = typeof initialState;

const initialState = {
   currentValue: 2,
   maxValue: 5,
   startValue: 2,
   clueText: null as string | null,
   errorText: "incorrectValue"
}


export const counterReducer = (state: StateType = initialState, action: ActionsType): StateType => {
   switch (action.type) {
      case "INCREMENT": {
         return {
            ...state,
            currentValue: state.currentValue + 1
         };
      }
      case "RESET": {
         return {
            ...state,
            currentValue: state.startValue
         }
      }
      case "UPDATE_LIMITS": {
         const {key, value} = action.payload;
         return {
            ...state,
            [key]: value,
            currentValue: -1,
            clueText: "enter values and press 'set'",
         }
      }
      case "SET_LIMITS": {
         return {
            ...state,
            currentValue: state.startValue,
            clueText: null
         }
      }
      default: {
         return state;
      }
   }
};



type IncrementCounterType = ReturnType<typeof incrementCounter>;
export const incrementCounter = () => {
   return {
      type: "INCREMENT"
   } as const;
};

type ResetCounterType = ReturnType<typeof resetCounter>;
export const resetCounter = () => {
  return {
      type: "RESET"
  } as const;
};

type UpdateCounterLimitsType = ReturnType<typeof updateCounterLimits>;
export const updateCounterLimits = (key: "startValue" | "maxValue", value: number) => {
   return {
      type: "UPDATE_LIMITS",
      payload: {
         key,
         value,
      }
   } as const;
};

type SetCounterLimitsType = ReturnType<typeof setCounterLimits>;
export const setCounterLimits = () => {
   return {
      type: "SET_LIMITS"
   } as const;
};

// ActionsType for counterReducer
type ActionsType = IncrementCounterType | ResetCounterType
   | UpdateCounterLimitsType | SetCounterLimitsType;