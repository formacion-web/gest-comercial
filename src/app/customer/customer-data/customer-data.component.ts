import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.scss']
})
export class CustomerDataComponent implements OnInit {
  customer!:any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(){
    this.route.paramMap.subscribe(params =>{
        this.customer = params;
    })
  }




}
