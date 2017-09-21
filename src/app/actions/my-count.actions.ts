import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { MyCount } from '../models/mycount';

@Injectable()
export class MyCountActions {
    static INCREMENT = 'INCREMENT'; 
    static DECREMENT = 'DECREMENT';

    increment(delta: number = 1) {
        return {
            type: MyCountActions.INCREMENT,
            payload: delta
        };
    };
    
    decrement(delta: number = 1) {
        return {
            type: MyCountActions.DECREMENT,
            payload: delta
        };
    };        
}