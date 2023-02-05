import {ShipEntity} from "../entities/ship.entity";
import {TaskForceEntity} from "../entities/task-force.entity";

export interface PageDto {
  items: any[],
  meta: {
    totalItems: number,
    itemCount: number,
    itemsPerPage: number,
    totalPages: number,
    currentPage: number,
  }
}
