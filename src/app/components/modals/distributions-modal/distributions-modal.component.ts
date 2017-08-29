import { Supplier } from './../../../shared/models/models';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distributions-modal',
  templateUrl: './distributions-modal.component.html',
  styleUrls: ['./distributions-modal.component.css']
})
export class DistributionsModalComponent extends DialogComponent<any, any> implements OnInit {
  id: number;
  model: Supplier;
  size = (this.size) ? this.size : 'modal-md';

  constructor(
    dialogService: DialogService) {
    super(dialogService);
  }

  ngOnInit() {
  }

  closeDialog() {
    this.close();
  }
}
