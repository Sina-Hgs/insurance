const textContent = {
  placeholder: "شرکت ییمه‌گر قبلی",

  next: "مرحله بعد",
  back: "مرحله قبل",
} as const;

type TextContent = typeof textContent;
export const companyTextContent: TextContent = textContent;
