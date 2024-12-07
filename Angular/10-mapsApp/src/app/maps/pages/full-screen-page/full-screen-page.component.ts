import { AfterViewInit, Component } from '@angular/core';

import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2NkbTk3IiwiYSI6ImNsNnp0NTE3MzAwbTQzbnBhaGlwZmtpbTkifQ._d6cmFWk-Xm2yQ4LB-dg1w';

@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css'
})
export class FullScreenPageComponent implements AfterViewInit {
  
  ngAfterViewInit(): void {
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }


  


}
