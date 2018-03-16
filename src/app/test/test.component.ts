import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public someText = "";
  public name = "Volodymyr";
  public hasError = false;
  public isSpecial = true;
  public color = "blue";
  public colors = ["red", "blue", "green", "yellow"]

  @Input('parentData') public lastName;

  @Output() public childEvent = new EventEmitter();

  messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  public highlightColor = "orange";

  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }


  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return "Hello " + this.name;
  }

  public greeting = "";

  onClick(event) {
    this.greeting = this.greetUser();
    console.log(event);
  }

  logMessage(value) {
    console.log(value);
  }

  changeProperty() {
    this.hasError = !this.hasError;
  }

  fireEvent() {
    this.childEvent.emit('Hey Volodymyr Andriychak');
  }

}
