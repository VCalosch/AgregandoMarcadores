import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//GoogleMaps
import { AgmCoreModule } from '@agm/core';
import { MapasService } from './services/mapas.service';
//import { Marcador } from './interfaces/marcador.interface';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA3d6OC5uV4aQlVClt97CEULYxOvY7b1GU'
    })
  ],
  providers: [MapasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
