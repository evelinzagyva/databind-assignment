import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  counter = 0;

  countingInterval;

  constructor() { }

  ngOnInit(): void {
    console.log(this.counter)
  }

  counting(): void {
    console.log(this.counter)
    this.counter++;
  }
  
  startCounting()  {
    this.countingInterval = setInterval(this.counting, 1000)
    
  }
  
  stopCounting() : void {
    clearInterval(this.countingInterval)
  }

}
