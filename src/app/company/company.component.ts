import { CompanyService } from './company.service';
import { Company } from 'app/shared/models/models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companyList: Company[];
  company: Company;
  showCompany: boolean;

  constructor(
    private companyService: CompanyService
  ) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.companyService.getCompanies()
      .subscribe(res => this.companyList = res);
  }

  selectCompany(id: number) {
    console.log('id: ', id);
    this.company = this.companyList.find(item => {
      return item.id === id;
    });

    if (this.company) {
      this.showCompany = true;
    }
  }

}
