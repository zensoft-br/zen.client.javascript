import { Currency } from "../financial/Currency.js";
import { ProductPacking } from "../catalog/product/ProductPacking.js";
import { Quote } from "./Quote.js";

export class QuoteItem {
  id!: number;
  status!: string;
  quote!: Quote;
  productPacking!: ProductPacking;
  quantity!: number;
  currency!: Currency;
  tags!: string;
  properties!: any;
}
