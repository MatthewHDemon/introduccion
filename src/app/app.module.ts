import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { FotosComponent } from './componentes/fotos/fotos.component';
import { PokemonListComponent } from './componentes/pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FotosComponent,
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
