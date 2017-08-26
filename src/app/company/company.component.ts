import { InjectableCompanyService } from './../dynamic/services/injectable-company.service';
import { CompanyService } from './company.service';
import { Company } from 'app/shared/models/models';
import { Component, OnInit } from '@angular/core';
import { DynamicComponent } from 'app/dynamic/dynamic-component';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companyList: Company[];
  company: Company;
  showCompany: boolean;
  components: DynamicComponent[];
  component: DynamicComponent;
  selectedIndex: number;

  constructor(
    private companyService: CompanyService,
    private injectableCompanyService: InjectableCompanyService
  ) { }

  ngOnInit() {
    this.getCompanies();

  }

  getCompanies() {
    this.companyService.getCompanies()
      .subscribe(res => this.companyList = res);
  }

  getComponents(id: number) {
    this.injectableCompanyService.companyId = id;
    this.components = this.injectableCompanyService.getComponents();
    console.log('components: ', this.components);
  }

  selectCompany(id: number) {
    this.selectedIndex = undefined;
    console.log('id: ', id);
    this.company = this.companyList.find(item => {
      return item.id === id;
    });

    if (this.company) {
      console.log('hi');
      this.getComponents(this.company.id);
      this.showCompany = true;
    }
  }

  /**
   * This selects which component to load and display.
   * @param idx the index of the selected button component
   */
  select(idx: number) {
    console.log('selected button: ', idx);
    this.selectedIndex = idx;

  }

}
