import { FlyBehavior, QuackBehavior } from './interface';

export abstract class Duck {
  /**
   * Program to an interface, not an implementation.
   */
  private flyBehavior: FlyBehavior | undefined;
  private quackBehavior: QuackBehavior | undefined;

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
