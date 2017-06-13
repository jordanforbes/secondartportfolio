import { Injectable } from '@angular/core';

import { Painting } from './painting';
import { PAINTINGS } from './painting-list';

@Injectable()
export class PaintingService {
	  getPaintings(): Promise<Painting[]>{
	  	return Promise.resolve(PAINTINGS);
	  }
}