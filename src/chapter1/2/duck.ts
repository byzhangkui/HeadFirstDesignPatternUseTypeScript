abstract class Duck {
  
  /**
   * Program to an interface, not an implementation.
   */
  constructor(private flyBehavior: FlyBehavior, 
    private quackBehavior: QuackBehavior) {}

  swim() {
    console.log('swim');
  }

  performQuack() {
    this.quackBehavior.quack();
  }

  performFly() {
    this.flyBehavior.fly();
  }
}