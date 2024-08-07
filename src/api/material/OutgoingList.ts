import { Company } from "../catalog/company/Company.js";
import { InvoiceSeries } from "../fiscal/InvoiceSeries.js";
import { Person } from "../catalog/person/Person.js";
import { Reservation } from "./Reservation.js";
import { Shipment } from "../shipping/Shipment.js";

export class OutgoingList {
  id!: number;
  company!: Company;
  status!: string;
  source!: string;
  date!: Date;
  person!: Person;
  reservation!: Reservation;
  shipment!: Shipment;
  invoiceSeries!: InvoiceSeries;
  number!: number;
  tags!: string;
  properties!: any;
}
