import { Injectable } from '@angular/core';
import { Marcador } from '../interfaces/marcador.interface';

@Injectable()
export class MapasService {

  marcadores:Marcador[] = [];
  latitudMarker:string;
  longitudMarker:string;

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

  borrarMarcador( idx:number ){
      this.marcadores.splice(idx, 1);
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
