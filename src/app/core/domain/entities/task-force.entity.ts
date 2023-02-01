import {ShipEntity} from "./ship.entity";

export interface TaskForceEntity {
  id: string,
  name: string,
  ships: ShipEntity[],
}
