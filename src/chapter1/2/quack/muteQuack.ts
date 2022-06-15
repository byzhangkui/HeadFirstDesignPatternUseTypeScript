import { QuackBehavior } from '../interface';

export class MuteQuack implements QuackBehavior {
  quack(): void {
    console.log('<< Silence >>');
  }
}
