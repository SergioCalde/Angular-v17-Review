import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map } from 'mapbox-gl';

@Component({
  selector: 'app-zoom-rage-page',
  templateUrl: './zoom-rage-page.component.html',
  styleUrl: './zoom-rage-page.component.css'
})
export class ZoomRagePageComponent implements AfterViewInit, OnDestroy {  
  @ViewChild('map') divMap?: ElementRef;
  
  public zoom: number = 10;
  public map?: Map;
  public currentLngLat: LngLat = new LngLat( -84.03, 9.93 );


  ngAfterViewInit(): void {
    if( !this.divMap ) throw 'Html element not found';

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

    this.mapListener();
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

  mapListener() {
    if( !this.map ) throw 'Map not found';

    this.map.on('zoom', (ev) => {

      this.zoom = this.map!.getZoom();
    
    });

    this.map.on('zoomend', (ev) => {

      if( this.map!.getZoom() < 18) return;
      this.map!.zoomTo(18);
    });

    this.map.on('move', () => {
      this.currentLngLat = this.map!.getCenter();
    })
  }

  zoomIn() {
    if( !this.map ) throw 'Map not found';

    this.map.zoomIn();
  }
  
  zoomOut() {
    if( !this.map ) throw 'Map not found';

    this.map.zoomOut();
  }

  zoomChanged( value:string ){
    this.zoom = Number(value);
    this.map!.zoomTo(this.zoom);
  }

}
