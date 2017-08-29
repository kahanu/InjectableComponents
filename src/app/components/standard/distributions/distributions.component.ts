import { JsonApiService } from 'app/core/api/json-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distributions',
  templateUrl: './distributions.component.html',
  styleUrls: ['./distributions.component.css']
})
export class DistributionsComponent implements OnInit {

  view: any[] = [550, 300];
  data: any[] = [];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#90C3D4', '#66CC3D']
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  constructor(private jsonService: JsonApiService) { }

  ngOnInit() {
    this.get();
  }

  get() {
    this.jsonService.fetch('/distributions.json')
      .subscribe(res => {
        this.data = res;
      });
  }
}
