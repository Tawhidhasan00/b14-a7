import { IProducts } from "./type";

const unitNames: Record<string, string> = {
  kg: "কেজি",
  liter: "লিটার",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
  pcs: "পিস",
};

export function toBanglaNumber(value: number, maximumFractionDigits = 2) {
  return new Intl.NumberFormat("bn-BD", { maximumFractionDigits }).format(value);
}
export function getUnitName(unit: string) {
  return unitNames[unit.toLowerCase()] ?? unit;
}


export function getPriceText(product: IProducts) {
  return `${toBanglaNumber(product.today)} টাকা/${getUnitName(product.unit)}`;
}
export function getChangeText(product: IProducts) {
  if (product.change.dir === "flat") return "— ০.০%";
  const arrow = product.change.dir === "up" ? "▲" : "▼";
  return `${arrow} ${toBanglaNumber(Math.abs(product.change.pct), 1)}%`;
}

