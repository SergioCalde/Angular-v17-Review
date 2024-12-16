import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';


@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css'
})
export class MiniMapComponent implements AfterViewInit{
  
  @ViewChild('map') divMap?: ElementRef;


  @Input() lngLat?: [number, number];
  
  ngAfterViewInit(): void {

    if( !this.lngLat ) throw 'LngLat not found';

    if( !this.divMap ) throw 'Html element not found';

    const map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.lngLat,
      zoom: 15,
      interactive: false,
    });

    if( !map ) throw 'Map not found';

    const marker = new Marker()
      .setLngLat( this.lngLat )
      .addTo(map);

  }

}
