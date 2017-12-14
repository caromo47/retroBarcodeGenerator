import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  color = [];
  colorpicker(){
	for (let i = 0; i < 9; i++){
		var randNum = (Math.floor(Math.random()*10) +1);
		if (randNum === 1){
			this.color.push('silver');
		}
		if (randNum === 2){
			this.color.push('gray');
		}
		if (randNum === 3){
			this.color.push('black')
		}
		if (randNum === 4){
			this.color.push('Darkgray')
		}
		if (randNum ===5){
			this.color.push('blue')
		}
		if (randNum === 6){
			this.color.push('red')
		}
		if (randNum === 7){
			this.color.push('lightblue')
		}
		if (randNum === 8){
			this.color.push('darkred')
		}
		if (randNum === 9){
			this.color.push('green')
		}
	}
  }
  ngOnInit(){
	  this.colorpicker();
  }
}
