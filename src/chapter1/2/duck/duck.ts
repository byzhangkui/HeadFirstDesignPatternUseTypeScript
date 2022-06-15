import { FlyBehavior, QuackBehavior } from '../interface';

export abstract class Duck {
  /**
   * Program to an interface, not an implementation.
   */
  protected flyBehavior: FlyBehavior | undefined;
  protected quackBehavior: QuackBehavior | undefined;

  abstract display(): void;

  setFlyBehavior(flyBehavior: FlyBehavior) {
    this.flyBehavior = flyBehavior;
  }

  setQuackBehavior(quackBehavior: QuackBehavior) {
    this.quackBehavior = quackBehavior;
  }

  swim() {
    console.log('swim');
  }

  performQuack() {
    this.quackBehavior?.quack();
  }

  performFly() {
    this.flyBehavior?.fly();
  }
}
