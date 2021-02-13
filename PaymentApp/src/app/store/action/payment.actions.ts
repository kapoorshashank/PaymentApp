import { createAction, props } from '@ngrx/store';
import { PaymentDetails } from '../../shared/payment.model'
export const loadPayments = createAction(
  '[Payment] Load Payments',
  (payment: PaymentDetails) => ({payment})
);




