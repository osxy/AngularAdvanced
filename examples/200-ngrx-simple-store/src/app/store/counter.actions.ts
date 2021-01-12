// counter.actions.ts - the Actions for our counter
import {createAction} from '@ngrx/store';

// export our actions as constants
export const changeValue = createAction('COUNTER - changeValue', (num = 0) => ({payload: num}));
export const reset = createAction('COUNTER - reset');
