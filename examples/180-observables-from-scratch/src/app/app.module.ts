import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ObservableComponent } from './observable/observable.component';
import { StoreModule } from '@ngrx/store';
import { CountersComponent } from './counters/counters.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    CountersComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
