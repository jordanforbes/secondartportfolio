import { Component } from '@angular/core';

@Component({
	selector:'my-app',
	template: `
		<h1>{{  title  }}</h1>
		<nav>
			<a routerLink="/drawings" routerLinkActive="active">Drawings</a>
			<a routerLink="/paintings" routerLinkActive="active">Paintings</a>
		</nav>
		<router-outlet></router-outlet>
		`,
	styleUrls: ['./app.component.css']

	})

export class AppComponent{
	title = 'Jordan Forbes';
}
