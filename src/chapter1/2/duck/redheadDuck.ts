import { FlyWithWings } from '../fly/flyWithWings';
import { Quack } from '../quack/quack';
import { Duck } from './duck';

export class RedheadDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new Quack();
  }

  override display(): void {
    console.log('readheadduck display.');
  }
}
