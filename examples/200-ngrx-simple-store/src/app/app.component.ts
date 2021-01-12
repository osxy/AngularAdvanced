// app.component.ts
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store, select} from '@ngrx/store';

// Import all possible actions
import {reset, changeValue} from './store/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Simple Store App';
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {

  }

  ngOnInit() {
    // Select the 'count' property from the store and
    // assign it to count$ variable.
    this.count$ = this.store.pipe(
      select('count')
    );
  }

  // dispatch actions for the store. They are imported above
  increment(amount : number) {
    if(amount){
      this.store.dispatch(changeValue(amount));
    } else {
      this.store.dispatch(changeValue(1));
    }
  }

  decrement() {
    this.store.dispatch(changeValue(-1));
  }

  reset() {
    this.store.dispatch(reset());
  }

}
