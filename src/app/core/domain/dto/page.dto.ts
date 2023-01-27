import {ShipEntity} from "../entities/ship.entity";

export interface PageDto {
  items: ShipEntity[],
  meta: {
    totalItems: number,
    itemCount: number,
    itemsPerPage: number,
    totalPages: number,
    currentPage: number,
  }
}
