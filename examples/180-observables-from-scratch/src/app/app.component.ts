import {Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {fromEvent, Observable, merge, of, Subscription, throwError} from 'rxjs';
import {filter, finalize, map, startWith, switchMap, take, takeUntil, takeWhile} from 'rxjs/operators';
import {ObservableComponent} from './observable/observable.component'
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

}
