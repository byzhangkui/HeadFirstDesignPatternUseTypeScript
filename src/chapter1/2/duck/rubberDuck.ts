import { FlyNoWay } from '../fly/flyNoWay';
import { MuteQuack } from '../quack/muteQuack';
import { Duck } from './duck';

export class RubberDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new MuteQuack();
  }

  override display(): void {
    console.log('rubberduck display.');
  }
}
