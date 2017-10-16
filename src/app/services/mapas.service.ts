import { Injectable } from '@angular/core';
import { Marcador } from '../interfaces/marcador.interface';

@Injectable()
export class MapasService {

  marcadores:Marcador[] = [];

  constructor() {
    let nuevoMarcador:Marcador={
      latitud:43.4784634,
      longitud:-3.7888626,
      titulo:"Ubicación",
      descripcion:"Una breve descripcion",
      draggable:true
    }

      this.marcadores.push( nuevoMarcador );

  }

  insertarMarcador( marcador:Marcador ){
    this.marcadores.push( marcador );
    this.guardarMarcadores();
  }

  guardarMarcadores(){
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores))
  }

  cargarMarcadores(){
    if(localStorage.getItem('marcadores')){
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }
    else{
      this.marcadores = [];
    }
  }


}
