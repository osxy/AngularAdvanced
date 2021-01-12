import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})



export class ObservableComponent implements OnInit {

  @ViewChild('btn') btn: ElementRef;
  @ViewChild('txtInput') input: ElementRef;
  msg = 'Hello World';
  counter = 0;
  sub: Subscription;

  constructor(private renderer : Renderer2){
      
  }

  ngOnInit() {

      // Manier 1 ---------------------------------
      this.renderer.listen(this.btn.nativeElement, 'click', (
          () => this.updateMessage(this.input.nativeElement.value))
      );

      this.renderer.listen(this.input.nativeElement, 'blur', (
          () => this.updateMessage(this.input.nativeElement.value))
      );
      
      // Manier 2 ---------------------------------
      // const clickEvents$    = fromEvent(this.btn.nativeElement, 'click');
      // const blurEvent$     = fromEvent(this.input.nativeElement, 'blur');
      // const allEvents$ = merge(
      //     clickEvents$,
      //     blurEvent$
      // );
      // allEvents$.subscribe((event) => {
      //     this.updateMessage(this.input.nativeElement.value)
      // })

      // Manier 3 ---------------------------------
      // fromEvent(this.btn.nativeElement, 'click')
      //     .pipe(
      //         map(event => {  
      //             return this.input.nativeElement.value;
      //         }),
      //         startWith(this.defaultMsg)
      //     )
      //     .subscribe(result => this.updateMessage(result));

      // fromEvent(this.input.nativeElement, 'blur')
      //     .pipe(
      //         map(event => { 
      //             return this.input.nativeElement.value;
      //         })
      //     )
      //     .subscribe(result => this.updateMessage(result));
  }

  updateMessage(s:string){
      this.counter++;
      this.msg = s;
  }
}
