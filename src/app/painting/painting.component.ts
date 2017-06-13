import { Component, OnInit } from '@angular/core';
import { Router }	from '@angular/router';

import { Painting } from './painting';
import { PaintingService } from './painting.service';


@Component({
  selector: 'my-app',
  templateUrl:'./painting.component.html',
  styleUrls:['./../app.component.css'],
  providers: [PaintingService]
  
})
export class PaintingsComponent  { 
	title = 'Jordan Forbes';
	selectedPainting: Painting;

	paintings: Painting[];

	constructor(private paintingService: PaintingService) { }

	getPaintings(): void{
		this.paintingService.getPaintings().then(paintings => this.paintings = paintings)
	}

	ngOnInit(): void {
		this.getPaintings()
	}


	onSelect(painting: Painting): void {
		this.selectedPainting = painting;
	}

}
