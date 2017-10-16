import { Component } from '@angular/core';
import { MapasService } from './services/mapas.service';
import { Marcador } from './interfaces/marcador.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  latitud: number = 43.4784634;
  longitud: number = -3.7888626;
  zoom: number = 15;

  marcadorSel:any = null;
  draggable:string="1";

  //variables del formulario
  latitudMarker:string;
  longitudMarker:string;

  constructor( public _ms:MapasService ){
    this._ms.cargarMarcadores();
  }
  clickMapa( evento ){

    let nuevoMarcador:Marcador ={

      latitud: evento.coords.lat,
      longitud: evento.coords.lng,
      titulo:"Sin titulo",
      descripcion:"",
      draggable: true,
    }

    this._ms.insertarMarcador( nuevoMarcador );

  }

  clickMarcador(marcador:Marcador, i:number){
      console.log(marcador, i);
      this.marcadorSel = marcador;

      if(this.marcadorSel.draggable){
        this.draggable="1";
      }
      else{
        this.draggable="0";
      }
  }

  dragEndMarcador( marcador:Marcador, evento ){
      //console.log(marcador, evento);
      let latitud = evento.coords.lat;
      let longitud = evento.coords.lng;

      marcador.latitud = latitud;
      marcador.longitud = longitud;

      this._ms.guardarMarcadores();

  }

  cambiarDraggable(){
    console.log(this.draggable);
    if(this.draggable=="1"){
      this.marcadorSel.draggable=true;
    }
    else{
      this.marcadorSel.draggable=false;
    }
  }

}
