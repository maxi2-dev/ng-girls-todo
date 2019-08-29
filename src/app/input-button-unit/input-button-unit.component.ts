import { Component, OnInit, Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
title: string = 'Hello World';
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

  constructor() {  console.log('in constructor');
    this.title = 'I love angular';
  this.changeTitle(' NG TO DO' )//Constructor holt sich Variablen während des Aufbaus.
    console.log(this.title); }
  ngOnInit(){   //holt sich Variable, wenn es initialisiert wird.
    this.title = 'Angular CLI Rules!';
  };
  submitValue(newTitle:string){this.submit.emit(newTitle)}

  changeTitle(newTitle: string) {
    this.submit.emit(newTitle);
  }
}
