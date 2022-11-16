import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/servicios/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons=[];
  pokemonsData:any[]=[];
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  //   this.pokemonService.getPokemons().subscribe(respuesta => {
  //     this.pokemons=respuesta.results
  //     console.log(this.pokemonsData) 
  // })
    this.getPokemonsData();
  }

  getPokemonsData(){
    for (let i = 1; i <=150; i++) {
      this.pokemonService.getPokemon(i).subscribe(respuesta => {
        this.pokemonsData.push(respuesta);
      });
    }
    console.log(this.pokemonsData)
  }
}
