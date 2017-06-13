import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } 			    from '@angular/forms'; // <--NgModel lives here
import { HttpModule }			      from '@angular/http';

import { AppRoutingModule }		  from './app-routing.module'; 

// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  		    from './app.component';
import { PaintingsComponent } 	from './painting/painting.component';
import { DrawingsComponent }	from './drawing/drawing.component';
// import { HeroesComponent }		  from './heroes.component';
// import { PaintingService }			    from './painting.service';



@NgModule({
  imports:      
	[ 
	  	BrowserModule, 
  		FormsModule, 
      HttpModule,
    //   InMemoryWebApiModule.forRoot(InMemoryDataService),
  		AppRoutingModule,
 	],
  declarations: 
  	[ 
  		AppComponent, 
  		PaintingsComponent,
  		DrawingsComponent
  	],
  // providers:	
  // 	[ 
  // 		PaintingService 
  // 	],
  bootstrap:    
  	[ 
  		AppComponent 
  	]
})
export class AppModule { }
