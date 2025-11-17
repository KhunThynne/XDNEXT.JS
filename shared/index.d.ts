// export * from './types/realtime'

export interface PaymentSuccessEvent {
  type: 'payment.success';
  data:unknown;
}


export type RealtimeEvent = PaymentSuccessEvent;

export const SOCKET_EVENT_NAME = 'keystone-update';

export const REALTIME_CHANNEL = 'keystone-socket';
