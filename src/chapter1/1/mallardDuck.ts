import { Duck } from './duck';

export class MallardDuck extends Duck {
  override display(): void {
    console.log('mallardduck display.');
  }
}
