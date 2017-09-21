import { Action, ActionReducer } from '@ngrx/store';
import { MyCountActions } from '../actions/my-count.actions';
import { AppState } from '../models/app-state';

let initialAppState = <AppState>{
    mycount: {
        count: 0
    }
};

export function MyCountReducers(state: AppState = initialAppState, action: Action): AppState {
    switch (action.type) {
        case MyCountActions.INCREMENT:
            return <AppState>{
                mycount: {
                    count: state.mycount.count + 1
                }
            };

        case MyCountActions.DECREMENT:
            return <AppState>{
                mycount: {
                    count: state.mycount.count - 1
                }
            };

        default:
            return state;
    }
}