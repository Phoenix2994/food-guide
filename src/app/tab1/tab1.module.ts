import { IonicModule } from '@ionic/angular';
import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { LeafletMarkerClusterModule } from '@asymmetrik/ngx-leaflet-markercluster';
import { PopupComponent } from './components/popup/popup.component';
import { createCustomElement } from '@angular/elements';
import { IonicRatingComponentModule } from 'ionic-rating-component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    IonicRatingComponentModule,
    LeafletMarkerClusterModule
  ],
  declarations: [Tab1Page, PopupComponent],
  entryComponents: [PopupComponent]
})
export class Tab1PageModule {
  constructor(private injector: Injector) {
    const PopupElement = createCustomElement(PopupComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
  }
}
