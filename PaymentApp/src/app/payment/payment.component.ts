import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {selectPayment} from '../store/selector/payment.selectors';
import {PaymentState} from '../store/reducer/payment.reducer';
import { PaymentDetails } from '../shared/payment.model';
import { Observable } from 'rxjs';
import { loadPayments } from '../store/action/payment.actions';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
 
  constructor( private formBuilder: FormBuilder,private store: Store<PaymentState> ) {
 
  }
  paymentForm: FormGroup;
  isSubmitted  =  false;
  ngOnInit(): void {
    this.paymentForm  =  this.formBuilder.group({
      cardNumber: ['', Validators.required],
      cardHolder: ['', Validators.required],
      expDate: ['', Validators.required],
      cvv: ['', Validators.required],
      amount: ['', Validators.required]
  });
  }
  get formControls() { return this.paymentForm.controls; }
  payment(){
    debugger;
    console.log(this.paymentForm.value);
    this.isSubmitted = true;
    if(this.paymentForm.invalid){
      return;
    }
    let payment = new PaymentDetails();
    payment = Object.assign(payment, this.paymentForm.value);
     
        this.store.dispatch(loadPayments(payment));
    // this.paymentService.login(this.paymentForm.value);
    // this.router.navigateByUrl('/admin');
  }

}
