import { Duck } from './duck';

export class RubberDuck extends Duck {
  override quack(): void {
    console.log('rubberduck donnot quack.');
  }
  override display(): void {
    console.log('rubberduck display.');
  }
}
