const textContent = {
  labels: {
    name: "نام",
    lastName: "نام خانوادگی",
    mobile: "شماره موبایل",
    password: "رمز عبور",
  },
  errors: {
    name: "نام اجباری است.",
    lastName: "نام خانوادگی اجباری است.",
    mobile: "شماره موبایل درست نیست.",
    password:
      "رمز عبور باید حداقل شامل یک عدد، یک حرف بزرگ لاتین و یک حرف کوچک لاتین باشد و طول آن حداقل ۴ و حداکثر ۱۰ کاراکتر باشد.",
  },
  signupBtn: "ثبت نام",
} as const;

type TextContent = typeof textContent;
export const signUpTextContent: TextContent = textContent;
