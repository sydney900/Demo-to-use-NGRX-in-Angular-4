import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/rx';
import { MyCount } from '../models/mycount';
import { AppState } from '../models/app-state';
import { MyCountActions } from '../actions/my-count.actions';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  public countState: Observable<MyCount>;
  subscription: Subscription;

  constructor(private store: Store<AppState>) {
    this.countState = store.select('mycount');
  }

  ngOnInit() {
  }

  onInc() {
    this.store.dispatch(new MyCountActions().increment(1));
  }

  onDec() {
    this.store.dispatch(new MyCountActions().decrement(1));
  }
}
