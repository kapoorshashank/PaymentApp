import { Action, createReducer, on } from '@ngrx/store';
import * as PaymentActions from '../action/payment.actions';
import { PaymentDetails } from '../../shared/payment.model'

export const paymentFeatureKey = 'payment';

export interface PaymentState {
  payment : PaymentDetails[];

}

export const initialState: PaymentState = {
payment: []
};


export const paymentReducer = createReducer(
  initialState,
  on(PaymentActions.loadPayments,
        (state: PaymentState, {payment}) =>
          ({...state,
            payment: [...state.payment, payment]
          }))

);
export function reducer(state: PaymentState | undefined, action: Action): any {
    return paymentReducer(state, action);
  }
