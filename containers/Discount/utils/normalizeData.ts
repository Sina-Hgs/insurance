import { DiscountOption } from "@/models";
import { Option } from "@/components/Dropdown";

export function mapDiscountsToOptions(discounts: DiscountOption[]): Option[] {
  return discounts.map((discount) => ({
    value: String(discount.id),
    label: discount.title,
  }));
}
