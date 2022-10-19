import { Component, OnInit } from '@angular/core';
import { photos } from './fotos';

@Component({
  selector: 'fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {
  fotos=photos;
  constructor() { }

  ngOnInit(): void {
  }

}
