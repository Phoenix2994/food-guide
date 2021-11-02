import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicRatingComponentModule } from 'ionic-rating-component';

import { DetailPageRoutingModule } from './detail-routing.module';

import { DetailPage } from './detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRatingComponentModule,
    DetailPageRoutingModule
  ],
  declarations: [DetailPage]
})
export class DetailPageModule {}
