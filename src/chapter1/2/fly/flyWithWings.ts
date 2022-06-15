import { FlyBehavior } from '../interface';

export class FlyWithWings implements FlyBehavior {
  fly() {
    console.log('fly with wings.');
  }
}
