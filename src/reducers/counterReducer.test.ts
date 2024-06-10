import {
   counterReducer,
   incrementCounterAC,
   resetCounterAC,
   setCounterLimitsAC,
   StateType,
   updateCounterLimitsAC
} from "./counterReducer";

let startState: StateType;

beforeEach(() => {
   startState = {
      currentValue: 2,
      maxValue: 10,
      startValue: 5,
      clueText: null,
      errorText: "incorrectValue"
   }
});


test("currentValue should be increased", () => {
   const endState = counterReducer(startState, incrementCounterAC());

   expect(endState).not.toEqual(startState);
   expect(endState.currentValue).toBe(2);
});

test("currentValue should be reset to minimum value", () => {
   const endState = counterReducer(startState, resetCounterAC());

   expect(endState).not.toEqual(startState);
   expect(endState.currentValue).toBe(startState.startValue);
});

test("correct limits (startValue) should be changed", () => {
   const endState = counterReducer(startState, updateCounterLimitsAC("startValue", 10));

   expect(endState).not.toEqual(startState);
   expect(endState.startValue).toBe(10);
   expect(endState.currentValue).toBe(-1);
   expect(endState.clueText).toBe("enter values and press 'set'");
});

test("correct limits (maxValue) should be changed", () => {
   const endState = counterReducer(startState, updateCounterLimitsAC("maxValue", 20));

   expect(endState).not.toEqual(startState);
   expect(endState.maxValue).toBe(20);
   expect(endState.currentValue).toBe(-1);
   expect(endState.clueText).toBe("enter values and press 'set'");
});

test("correct limits should be installed", () => {
   const endState = counterReducer(startState, setCounterLimitsAC());

   expect(endState.currentValue).toBe(5);
   expect(endState.clueText).toBe(null);
});


