import { RubberDuck } from './duck/rubberDuck';
import { Duck } from './duck/duck';
import { MallardDuck } from './duck/mallardDuck';
import { FlyRocketPowered } from './fly/flyRocketPowered';

const duck: Duck = new MallardDuck();
// we don't cencern about which kind of duck we have.
// wo just knonw that duck can perform fly and quack.
duck.performFly();
duck.performQuack();

const modelDuck: Duck = new RubberDuck();
modelDuck.performFly();
// we can set fly behavior dynamically
modelDuck.setFlyBehavior(new FlyRocketPowered());
modelDuck.performFly();
