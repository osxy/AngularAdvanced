import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// custom modules
import {CustomerModule} from './customer/customer.module';
import {ProductsModule} from './products/products.module';

// components
import {AppComponent} from './app.component';
import { SnelStartModule } from './snel-start/snel-start.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomerModule,
    ProductsModule,
    SnelStartModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
