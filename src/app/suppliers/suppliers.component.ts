import { DialogService } from 'ng2-bootstrap-modal';
import { InjectableSupplierService } from './../dynamic/services/injectable-supplier.service';
import { SuppliersService } from './suppliers.service';
import { DynamicComponent } from './../dynamic/dynamic-component';
import { Supplier } from './../shared/models/models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {
  supplierList: Supplier[];
  supplier: Supplier;
  show: boolean;
  components: DynamicComponent[];
  component: DynamicComponent;
  selectedIndex: number;

  constructor(
    private supplierService: SuppliersService,
    private injectableSupplierService: InjectableSupplierService,
    private dialog: DialogService
  ) { }

  ngOnInit() {
    this.getSuppliers();
  }

  getSuppliers() {
    this.supplierService.getSuppliers()
      .subscribe(res => this.supplierList = res);
  }

  getComponents(id: number) {
    this.injectableSupplierService.supplierId = id;
    this.components = this.injectableSupplierService.getComponents();
  }

  selectSupplier(id: number) {
    this.selectedIndex = undefined;
    this.supplier = this.supplierList.find(item => {
      return item.id === id;
    });

    if (this.supplier) {
      this.getComponents(this.supplier.id);

      this.show = true;
    }
  }

  /**
   * This selects which component to load and display.
   * @param idx the index of the selected button component
   */
  select(idx: number, supplier: Supplier) {
    const component = this.components[idx];
    const wrapper = {
      id: component.data.id,
      model: supplier
    };

    const options = {
      backdropColor: 'rgba(0, 0, 0, 0.5)'
    };

    const disposable = this.dialog.addDialog(component.component, wrapper, options)
      .subscribe(res => {

      });
  }
}
