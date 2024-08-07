import { FiscalRegion } from "../FiscalRegion.js";

export class TaxationOperation {
  id!: number;
  fiscalRegion!: FiscalRegion;
  flow!: string;
  code!: string;
  description!: string;
  tags!: string;
  properties!: any;
}
