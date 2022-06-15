import { QuackBehavior } from '../interface';

export class Squeak implements QuackBehavior {
  quack(): void {
    console.log('Squeak');
  }
}
