const textContent = {
  titles: {
    third: "شخص ثالث",
    body: "بدنه",
  },
} as const;

type TextContent = typeof textContent;
export const InsuranceTypeTextContent: TextContent = textContent;
