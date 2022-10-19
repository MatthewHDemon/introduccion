import { Component } from '@angular/core';
import { posts } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'introduccion';
  nombre='Daniel Mateo Patarroyo Molina';
  articulos=posts;
}
