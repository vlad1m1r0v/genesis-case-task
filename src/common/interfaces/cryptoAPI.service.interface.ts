export interface CryptoAPIServiceInterface {
  getBitcoinRate: () => Promise<number>;
}
