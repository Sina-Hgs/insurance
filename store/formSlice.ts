import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FormState = {
  fullName: string;
  insuranceType: string;
};

const initialState: FormState = {
  fullName: "",
  insuranceType: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<Partial<FormState>>) => {
      return { ...state, ...action.payload };
    },
    resetForm: () => initialState,
  },
});

export const { setFormData, resetForm } = formSlice.actions;
export default formSlice.reducer;
