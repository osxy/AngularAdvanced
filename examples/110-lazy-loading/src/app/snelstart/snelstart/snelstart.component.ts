import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snelstart',
  templateUrl: './snelstart.component.html',
  styleUrls: ['./snelstart.component.css']
})
export class SnelstartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('SnelStartComponent initialized...');
  }

}
