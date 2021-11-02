import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import RESTAURANTS from '../../../../assets/data.json';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  restaurant: any;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.restaurant = RESTAURANTS.properties.find(
        (rest) => rest.id === +params.id
      );
    });
  }
}
