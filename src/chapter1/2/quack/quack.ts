import { QuackBehavior } from '../interface';

export class Quack implements QuackBehavior {
  quack(): void {
    console.log('quack.');
  }
}
