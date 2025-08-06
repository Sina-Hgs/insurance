const textContent = {
  type: "نوع خودرو",
  model: "مدل خودرو",
} as const;

type TextContent = typeof textContent;
export const vehicleTypeTextContent: TextContent = textContent;
