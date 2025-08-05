import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Step = "SIGNUP" | "INSURANCE_TYPE" | "VEHICLE" | "COMPANY" | "DISCOUNT";

type FormState = {
  STEP: Step;
  name: string;
  lastName: string;
  mobile: string;
  insuranceType: string;
  vehicleType: string;
  vehicleModel: string;
  previousCompany: string;
  thirdDiscount: string;
  accidentsDiscount: string;
};

const initialState: FormState = {
  STEP: "SIGNUP",
  name: "",
  lastName: "",
  mobile: "",
  insuranceType: "",
  vehicleType: "",
  vehicleModel: "",
  previousCompany: "",
  thirdDiscount: "",
  accidentsDiscount: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<Step>) => {
      state.STEP = action.payload;
    },

    addUserInfo: (
      state,
      action: PayloadAction<Pick<FormState, "name" | "lastName" | "mobile">>
    ) => {
      state.name = action.payload.name;
      state.lastName = action.payload.lastName;
      state.mobile = action.payload.mobile;
    },

    addInsuranceType: (
      state,
      action: PayloadAction<Pick<FormState, "insuranceType">>
    ) => {
      state.insuranceType = action.payload.insuranceType;
    },

    addCompany: (
      state,
      action: PayloadAction<Pick<FormState, "previousCompany">>
    ) => {
      state.previousCompany = action.payload.previousCompany;
    },

    addVehicleInfo: (
      state,
      action: PayloadAction<Pick<FormState, "vehicleType" | "vehicleModel">>
    ) => {
      state.vehicleType = action.payload.vehicleType;
      state.vehicleModel = action.payload.vehicleModel;
    },

    addDiscounts: (
      state,
      action: PayloadAction<
        Pick<FormState, "thirdDiscount" | "accidentsDiscount">
      >
    ) => {
      state.thirdDiscount = action.payload.thirdDiscount;
      state.accidentsDiscount = action.payload.accidentsDiscount;
    },

    // reset only fields, keep step at SIGNUP
    resetForm: () => initialState,
  },
});

export const {
  setStep,
  addUserInfo,
  addInsuranceType,
  addCompany,
  addVehicleInfo,
  addDiscounts,
  resetForm,
} = formSlice.actions;

export default formSlice.reducer;
