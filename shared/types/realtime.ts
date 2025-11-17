export interface PaymentSuccessEvent {
  type: 'payment.success';
  data: {
    orderId: string;
    amount: number;
  };
}

export type RealtimeEvent = PaymentSuccessEvent;

export const SOCKET_EVENT_NAME = 'keystone-update';

export const REALTIME_CHANNEL = 'keystone-socket';
