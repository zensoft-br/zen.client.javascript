import { Company } from "../catalog/company/Company.js";
import { OutgoingRequest } from "./OutgoingRequest.js";
import { Person } from "../catalog/person/Person.js";
import { PickingProfile } from "./PickingProfile.js";
import { Reservation } from "./Reservation.js";
import { Shipment } from "../shipping/Shipment.js";

export class PickingOrder {
  id!: number;
  company!: Company;
  status!: string;
  type!: string;
  pickingProfile!: PickingProfile;
  outgoingRequest!: OutgoingRequest;
  person!: Person;
  reservation!: Reservation;
  date!: Date;
  description!: string;
  netWeightKg!: number;
  grossWeightKg!: number;
  volumeM3!: number;
  shipment!: Shipment;
  tags!: string;
  properties!: Object;
}
