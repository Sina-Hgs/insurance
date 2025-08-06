const textContent = {
  thidDiscount: "درصد تخفیف ثالت",
  accidentsDiscount: "درصد تخفیف حوادث راننده",
  submit: "استعلام قیمت",

  modal: {
    title: "اطلاعات وارد شده",
    name: "نام",
    lastName: "نام خانوادگی",
    mobile: "شماره موبایل",
    insuranceType: "نوع بیمه",
    vehicleType: "نوع خودرو",
    vehicleModel: "مدل خودرو",
    previousCompany: "شرکت بیمه‌گر قبلی",
    thirdDiscount: "درصد تخفیف بیمه ثالث",
    accidentsDiscount: "درصد تخفیف حوادث راننده",
  },
} as const;

type TextContent = typeof textContent;
export const discountTextContent: TextContent = textContent;
