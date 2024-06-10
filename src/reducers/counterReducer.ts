export type StateType = typeof initialState;

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



type IncrementCounterAT = ReturnType<typeof incrementCounterAC>;
export const incrementCounterAC = () => {
   return {
      type: "INCREMENT"
   } as const;
};

type ResetCounterAT = ReturnType<typeof resetCounterAC>;
export const resetCounterAC = () => {
  return {
      type: "RESET"
  } as const;
};

type UpdateCounterLimitsAT = ReturnType<typeof updateCounterLimitsAC>;
export const updateCounterLimitsAC = (key: "startValue" | "maxValue", value: number) => {
   return {
      type: "UPDATE_LIMITS",
      payload: {
         key,
         value,
      }
   } as const;
};

type SetCounterLimitsAT = ReturnType<typeof setCounterLimitsAC>;
export const setCounterLimitsAC = () => {
   return {
      type: "SET_LIMITS"
   } as const;
};

// ActionsType for counterReducer
export type ActionsType = IncrementCounterAT | ResetCounterAT
   | UpdateCounterLimitsAT | SetCounterLimitsAT;