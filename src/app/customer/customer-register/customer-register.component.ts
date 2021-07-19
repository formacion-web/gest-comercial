import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.scss']
})
export class CustomerRegisterComponent implements OnInit {

  customerForm!: FormGroup;
  types = [
    'Empresario individual',
    'Sociedad Limitada (S.L.)',
    'Sociedad Anónima (S.A.)',
    'Asociaciones sin ánimo de lucro',
    'Sociedad Colectiva',
    'Sociedad Comanditaria',
    'Comunidad de Bienes',
    'Sociedad Cooperativa',
  ]
  constructor(private fb: FormBuilder, private router:Router) {
    this.customerForm = fb.group({
      name:['', Validators.required],
      surname:['', Validators.required],
      email:['',Validators.email],
      type:['']
    })

   }

   saveData(){
    this.router.navigate(['customer/list'],this.customerForm.value)

   }

  ngOnInit(): void {
  }

}
