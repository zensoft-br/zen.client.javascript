import { Company } from "../catalog/company/Company.js";
import { MovingOrder } from "./MovingOrder.js";
import { OutgoingList } from "./OutgoingList.js";
import { Person } from "../catalog/person/Person.js";
import { PickingProfile } from "./PickingProfile.js";
import { Reservation } from "./Reservation.js";
import { Shipment } from "../shipping/Shipment.js";

export class PickingOrder {
  id!: number;
  company!: Company;
  status!: string;
  source!: string;
  pickingProfile!: PickingProfile;
  person!: Person;
  reservation!: Reservation;
  outgoingList!: OutgoingList;
  movingOrder!: MovingOrder;
  date!: Date;
  description!: string;
  netWeightKg!: number;
  grossWeightKg!: number;
  volumeM3!: number;
  shipment!: Shipment;
  pickingOrderGroup!: PickingOrder;
  tags!: string;
  properties!: any;
}
