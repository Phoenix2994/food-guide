import { Component } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import * as Leaflet from 'leaflet';
import { PopupComponent } from './components/popup/popup.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  map: Leaflet.Map;
  propertyList = [];
  markerClusterGroup: Leaflet.MarkerClusterGroup;

  constructor() {}

  ionViewDidEnter() {
    this.map = new Leaflet.Map('mapId').setView([37.520682, 14.286718], 7);

    const DefaultIcon = Leaflet.icon({
      iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png',
      iconSize: [32, 48],
      iconAnchor: [16, 48],
    });

    Leaflet.Marker.prototype.options.icon = DefaultIcon;

    this.markerClusterGroup = Leaflet.markerClusterGroup();

    Leaflet.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      {
        maxZoom: 20,
      }
    ).addTo(this.map);

    Leaflet.tileLayer(
      'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.png',
      {
        subdomains: 'abcd',
        minZoom: 0,
        maxZoom: 20,
      }
    ).addTo(this.map);

    fetch('./assets/data.json')
      .then((res) => res.json())
      .then((data) => {
        this.propertyList = data.properties;
        this.leafletMap();
      })
      .catch((err) => console.error(err));
  }

  leafletMap() {
    for (const property of this.propertyList) {
      Leaflet.marker([property.lat, property.long])
        .addTo(this.markerClusterGroup)
        .bindPopup((layer) => {
          const popupEl: NgElement & WithProperties<PopupComponent> =
            document.createElement('popup-element') as any;
          popupEl.id = property.id;
          popupEl.name = property.name;
          popupEl.city = property.city;
          let avg = 0;
          Object.keys(property.ratings).forEach(
            (key) => (avg += property.ratings[key])
          );
          avg = avg / 4;
          popupEl.score = avg;
          return popupEl;
        })
        .openPopup();
    }
    this.map.addLayer(this.markerClusterGroup);
    this.map.fitBounds(this.markerClusterGroup.getBounds());
  }

  ionViewWillLeave() {
    this.map.remove();
  }
}
