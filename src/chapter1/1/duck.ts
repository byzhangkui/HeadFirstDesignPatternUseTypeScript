export abstract class Duck {
  quack() {
    console.log('duck quack.');
  }

  swim() {
    console.log('duck swim.');
  }

  display() {
    console.log('duck display.');
  }

  /**
   * when add fly() to Duck, all ducks even RubberDuck can fly.
   */
  fly() {
    console.log('duck fly');
  }
}
