import { NgModule }						from '@angular/core';
import { RouterModule, Routes }			from '@angular/router';

import {PaintingsComponent} 			from './painting/painting.component';
import {DrawingsComponent}				from './drawing/drawing.component';

const routes: Routes = [
	{ path: '', redirectTo: '/paintings', pathMatch: 'full'},
	{ path: 'paintings', component:PaintingsComponent },
	{ path: 'drawings', component:DrawingsComponent }
]

@NgModule({
		imports: [ RouterModule.forRoot(routes)],
		exports: [ RouterModule ]
	})

export class AppRoutingModule {}