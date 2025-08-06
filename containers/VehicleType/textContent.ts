const textContent = {
  type: "نوع خودرو",
  model: "مدل خودرو",

  next: "مرحله بعد",
  back: "بازگشت",
} as const;

type TextContent = typeof textContent;
export const vehicleTypeTextContent: TextContent = textContent;
