import { Drawing } from './drawing';
import { Component } from '@angular/core';



const DRAWINGS: Drawing[]= [
	{id: 1, name: 'Oy draw', year: 2016, medium: 'Oil', description: 'a drawing', src: '/assets/paintings/oy.jpg'},
	{id: 2, name: 'Ori draw', year: 2016, medium: 'Oil', description: 'a drawing', src: '/assets/paintings/ori.jpg'}
	
];

@Component({
  selector: 'my-app',
  templateUrl:'./drawing.component.html',
  styleUrls:['./../app.component.css']
  
})
export class DrawingsComponent  { 
	title = 'Jordan Forbes';
	drawings = DRAWINGS;
	selectedDrawing: Drawing;

	onSelect(drawing: Drawing): void {
		this.selectedDrawing = drawing;
	}

}
