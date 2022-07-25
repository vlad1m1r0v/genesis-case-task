export interface SendEmailPropsInterface {
  receivers: { email: string }[];
  bitcoinRate: string;
}

export interface SenderServiceInterface {
  sendEMails: ({ receivers, bitcoinRate }: SendEmailPropsInterface) => void;
}
