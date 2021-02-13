import { Component } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectPayment} from './store/selector/payment.selectors';
import {PaymentState} from './store/reducer/payment.reducer';
import { PaymentDetails } from './shared/payment.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
}
