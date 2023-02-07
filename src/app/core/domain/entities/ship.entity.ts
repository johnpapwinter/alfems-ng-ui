import {TaskForceEntity} from "./task-force.entity";

export interface ShipEntity {
  id: string;
  hud: string;
  name: string;
  type: string;
  crew: number;
  passengers: number;
  fighters: number;
  taskForce?: TaskForceEntity;
}
