import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map, LngLat, Marker } from 'mapbox-gl';

interface MarkerAndColor {
  color: string;
  marker: Marker;
}

interface PlainMarker {
  color: string;
  lngLat: number[];
}

@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css'
})
export class MarkersPageComponent implements AfterViewInit {

  @ViewChild('map') divMap?: ElementRef;

  public markers: MarkerAndColor[] = [];
  
  public zoom: number = 13;
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

    this.readFromLocalStorage();


    // const markerHtml = document.createElement('div');
    // markerHtml.innerHTML = 'Sergio Calderón';

    // const marker = new Marker({
    //   // color: 'dodgerblue',
    //   // element: markerHtml,
    // })
    //   .setLngLat( this.currentLngLat )
    //   .addTo(this.map);
  }

  createMarker() {
    if( !this.map ) throw 'Map not found';
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lngLat = this.map.getCenter();
    this.addMarker( lngLat, color );
  }

  addMarker( lngLat: LngLat, color: string ){
    if( !this.map ) throw 'Map not found';

    const marker = new Marker({
      color,
      draggable: true,
    }).setLngLat( lngLat )
      .addTo(this.map);

      this.markers.push( { color, marker } );
      this.saveToLocalStorage();

      this.mapListener(marker);
  }

  mapListener(marker: Marker) {
    if( !this.map ) throw 'Map not found';

    marker.on('dragend', (ev) => {

      this.saveToLocalStorage();
    
    });
  }

  deleteMarker( index: number ){
  
    this.markers[index].marker.remove();
    this.markers.splice(index, 1);

  }

  flyTo( marker: Marker ){
    if( !this.map ) throw 'Map not found';

    this.map.flyTo({
      zoom: 14,
      center: marker.getLngLat(),
    });
  }

  saveToLocalStorage(){
    const plainMarkers: PlainMarker[] = this.markers.map( ({ color, marker }) => ({
      color,
      lngLat: marker.getLngLat().toArray(),
    }));

    localStorage.setItem('markers', JSON.stringify(plainMarkers));
  }

  readFromLocalStorage(){
    const plainMarkers: PlainMarker = JSON.parse(localStorage.getItem('markers') ?? '[]');

    if( !Array.isArray(plainMarkers) ) return;

    plainMarkers.forEach( ({ color, lngLat }) => {
      const [ lng, lat ] = lngLat;
      const coords = new LngLat( lng, lat );

      this.addMarker( coords, color );
      
    });

  }

}
