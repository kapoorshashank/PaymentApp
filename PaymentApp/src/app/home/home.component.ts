import { Component } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectPayment} from '../store/selector/payment.selectors';
import {PaymentState} from '../store/reducer/payment.reducer';
import { PaymentDetails } from '../shared/payment.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  payments: Observable<PaymentDetails[]>;
  constructor(private store: Store<PaymentState> ) {
    debugger;
    this.payments = this.store.pipe(select(selectPayment));
  }

}
