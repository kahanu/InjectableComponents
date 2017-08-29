import { JsonApiService } from 'app/core/api/json-api.service';
import { Supplier, Company } from './../../../shared/models/models';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';

@Component({
  selector: 'app-client-modal',
  templateUrl: './client-modal.component.html',
  styleUrls: ['./client-modal.component.css']
})
export class ClientModalComponent extends DialogComponent<any, any> implements OnInit {
  id: number;
  model: Supplier;
  size = (this.size) ? this.size : 'modal-md';

  constructor(
    dialogService: DialogService) {
    super(dialogService);
  }

  ngOnInit() {
    console.log('modal id: ', this.id);
  }

  closeDialog() {
    this.close();
  }
}
