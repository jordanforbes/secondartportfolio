import { Painting } from './painting';
import { Component } from '@angular/core';



const PAINTINGS: Painting[]= [
	{id: 1, name: 'Oy', year: 2016, medium: 'Oil', description: 'a painting', src: '/assets/paintings/oy.jpg'},
	
	{id: 3, name: 'Public Execution', year: 2016, medium: 'Oil', description: 'a painting', src: '/assets/paintings/publicexecution.jpg'}
];

@Component({
  selector: 'my-app',
  templateUrl:'./painting.component.html',
  styleUrls:['./../app.component.css']
  
})
export class PaintingsComponent  { 
	title = 'Jordan Forbes';
	paintings = PAINTINGS;
	selectedPainting: Painting;

	onSelect(painting: Painting): void {
		this.selectedPainting = painting;
	}

}
