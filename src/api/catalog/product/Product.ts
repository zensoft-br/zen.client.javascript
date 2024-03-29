import { Category } from "../Category.js";
import { FiscalProfileProduct } from "../../fiscal/FiscalProfileProduct.js";
import { ProductVariant } from "./ProductVariant.js";
import { Unit } from "./Unit.js";

export class Product {
  id!: number;
  type!: string;
  code!: string;
  description!: string;
  complement!: string;
  keywords!: string;
  unit!: Unit;
  fiscalProfileProduct!: FiscalProfileProduct;
  variant!: ProductVariant;
  barcode!: string;
  lengthCm!: number;
  widthCm!: number;
  heightCm!: number;
  volumeM3!: number;
  netWeightKg!: number;
  grossWeightKg!: number;
  category1!: Category;
  category2!: Category;
  category3!: Category;
  category4!: Category;
  category5!: Category;
  tags!: string;
  properties!: Object;
}
