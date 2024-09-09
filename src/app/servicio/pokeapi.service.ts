import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  urlApi= 'https://pokeapi.co/api/v2/pokemon'

  constructor(private http: HttpClient) { }

  obtenerUnPokemon(url: string){
    return this.http.get(url);
  }


  obtenerListadoPokemones(){
    return this.http.get(this.urlApi)
  }
  nexPage(nexPageUrl: string){
    return this.http.get(nexPageUrl);
  }

  prevPage(prevPageUrl: string){
    return this.http.get(prevPageUrl);
  }

}
