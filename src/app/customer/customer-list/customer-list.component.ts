import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers:any=[];
  customer!:any;

  constructor(private router: Router) {
    // this.customer = this.router.getCurrentNavigation()?.extras;
    this.customers.push(this.router.getCurrentNavigation()?.extras);
    // console.log(this.customer);
  }

  ngOnInit(): void {
  }

}
