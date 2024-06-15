import {AppRootStateType} from "../store/store";

export const loadState = () => {
   try {
      const serializedState = localStorage.getItem('counterSettings');
      if (serializedState === null) {
         return undefined;
      }
      return JSON.parse(serializedState);
   } catch (err) {
      return undefined;
   }
};

export const saveState = (state: AppRootStateType) => {
   try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('counterSettings', serializedState);
   } catch {
      // ignore write errors
   }
};