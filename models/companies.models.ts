export type InsuranceCompany = {
  id: number;
  title: string;
  satisfaction: number;
  wealthLevel: number;
  complaintResponseTime: number;
  branchNumber: number;
  enable: boolean;
  marketerEnable: boolean;
  available: boolean;
  maxBranchDiscount: number;
  branchDiscountPercent: number;
  maxCompanyDiscount: number;
  companyDiscountPercent: number;
  maxBimitoDiscount: number;
  bimitoDiscountPercent: number;
  maxMarketerDiscount: number;
  marketerDiscountPercent: number;
  bimitoDiscountTitle: string;
  azkiDiscountTitle: string;
  hideDiscount: boolean;
  description: string;
  productDescription: string;
  giftTitle: string;
  hasGift: boolean;
  onlineDamage: boolean;
  features: Feature[];
  dynamicBadges: any[];
  businessProperties: BusinessProperty[];
  installments: InstallmentPlan[];
  icon: string;
  helpIcons: HelpIcon[];
  companyFloat: number;
  companyCommission: number;
  oldVehicleAge: number;
  oldVehiclePercent: number;
  oldVehiclePenaltyPercent: number;
  extraPercent: number;
  extraPenaltyPercent: number;
  damagedShortTermEnable: boolean;
  maxDayOfPenalty: number;
  forgivenessDescription: string;
  enableExpireDatePayment: boolean;
  shortPenaltyForgiveness: boolean;
  longPenaltyForgiveness: boolean;
  cashPayment: boolean;
  azkiPenaltyDiscountEnable: boolean;
  maxAzkiPenaltyDiscount: number;
};

type Feature = {
  icon: string | null;
  title: string;
  newRelease: boolean;
  description: string;
};

type BusinessProperty = {
  icon: string | null;
  type: "BADGE" | "FEATURE" | string;
  color: "success" | "info" | "secondary" | string;
  title: string;
  enabled: boolean;
  primary: boolean;
  description: string;
};

type InstallmentPlan = {
  enable: boolean;
  enableForSellers: boolean;
  underInstallmentLimitPrice: boolean;
  installments: Installment[];
  title: string;
  label: string;
  description: string;
  credit: boolean;
  operationCostType: "FIXED" | string;
  operationCost: number;
  operationCostInInstallment: boolean;
  type: number;
  default: boolean;
};

type Installment = {
  percent: number;
  month: number;
};

type HelpIcon = {
  title: string;
  url: string;
};
