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
  clientModalForm: FormGroup;
  viewTitle: string;
  clientList: Company[];

  constructor(
    dialogService: DialogService,
    private jsonService: JsonApiService) {
    super(dialogService);
  }

  ngOnInit() {
    console.log('modal id: ', this.id);
    this.getClients();
  }

  getClients() {
    this.jsonService.fetch('/supplier-clients.json')
      .subscribe(res => {
        const clients: any[] = res as any[];

        this.clientList = clients.filter(item => {
          return item.supplierId === this.id;
        });
      });
  }

  closeDialog() {
    this.close();
  }
}
