export class MuteQuack implements QuackBehavior {
  quack(): void {
    console.log('cannot quack.');
  }
}