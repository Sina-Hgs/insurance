const textContent = {
  title: "سامانه مقایسه و خرید آنلاین بیمه",
  signup: "ثبت نام",

  tryAgain: "شروع مجدد",
} as const;

type TextContent = typeof textContent;
export const navbarTextConent: TextContent = textContent;
