import { Duck } from './duck';

export class RedheadDuck extends Duck {
  override display(): void {
    console.log('readheadduck display.');
  }
}
