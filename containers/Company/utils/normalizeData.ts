import { InsuranceCompany } from "@/models";
import { Option } from "@/components/Dropdown";

export function mapCompaniesToOptions(companies: InsuranceCompany[]): Option[] {
  return companies.map((company) => ({
    value: String(company.id),
    label: company.title,
  }));
}
