import React, { ChangeEvent } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string, boolean } from "yup";
import { AnimatePresence, motion } from "framer-motion";

const INSURANCE_TYPES = [
  "Medicare",
  "Medicaid",
  "Private PPO",
  "Private HMO",
  "VA",
  "Other",
];
const INITIAL_VALUES = {
  fullName: "",
  email: "",
  phone: "",
  insuranceType: "",
  loudSnoring: false,
  daytimeDrowsiness: false,
};
const VALIDATION_SCHEMA = object().shape({
  fullName: string().required("Full name is required"),
  email: string().email("Invalid email address").required("Email is required"),
  phone: string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    )
    .required("Phone number is required"),
  insuranceType: string()
    .oneOf(INSURANCE_TYPES)
    .required("Insurance type is required"),
  loudSnoring: boolean().required("Loud snoring is required"),
  daytimeDrowsiness: boolean().required("Daytime drowsiness is required"),
});

type InputFieldProps = {
  name: string;
  placeholder?: string;
  autoComplete?: string;
  type?: string;
  isSelect?: boolean;
  children?: React.ReactNode;
};
function InputField({
  name,
  placeholder = "",
  autoComplete = "",
  type = "text",
  isSelect = false,
  children = null,
}: InputFieldProps) {
  return (
    <>
      <Field
        as={isSelect ? "select" : "input"}
        type={type}
        name={name}
        className={`${
          isSelect ? "form-select" : "form-input"
        } px-4 py-3 rounded-sm w-full mt-3 hover:bg-slate-100 focus:bg-slate-100 transition-colors delay-150`}
        placeholder={placeholder}
        autoComplete={autoComplete}
      >
        {children}
      </Field>

      <ErrorMessage name={name} component={"div"}>
        {(error) => (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: 1,
                height: "auto",
                transition: { duration: 0.25 },
              }}
              className="flex px-4 py-2 w-full mb-2 text-white bg-red-500"
            >
              <span className="rounded-full inline-block  bg-white text-red-500 text-2xl text-center font-extrabold w-[26px] h-[26px] mr-2">
                !
              </span>{" "}
              <span className="inline-block text-lg mt-0">{error}</span>
            </motion.div>
          </AnimatePresence>
        )}
      </ErrorMessage>
    </>
  );
}

function SelectField({
  name,
  placeholder,
  autoComplete = "",
  children = null,
}: InputFieldProps) {
  return (
    <InputField
      name={name}
      placeholder={placeholder}
      autoComplete={autoComplete}
      isSelect={true}
    >
      {children}
    </InputField>
  );
}

type RadioFieldProps = {
  fieldName: string;
  label?: string;
};
function RadioField({ fieldName, label = "" }: RadioFieldProps) {
  return (
    <>
      <div className="text-md font-medium mb-2 mt-8">{label}</div>
      <div role="group" aria-label={label} className="mb-3">
        <label>
          <Field name={fieldName}>
            {({ field, form }: any) => (
              <input
                {...field}
                type="radio"
                name={fieldName}
                value={true}
                onChange={({ target }: ChangeEvent<HTMLInputElement>) => {
                  form.setFieldValue(fieldName, target.value === "true");
                }}
                className="p-3 border rounded-full mx-2 hover:bg-slate-200"
              />
            )}
          </Field>
          Yes
        </label>
        <label>
          <Field name={fieldName}>
            {({ field, form }: any) => (
              <input
                {...field}
                type="radio"
                name={fieldName}
                value={false}
                onChange={({ target }: ChangeEvent<HTMLInputElement>) => {
                  form.setFieldValue(fieldName, target.value === "true");
                }}
                className="p-3 border rounded-full mr-2 ml-3 hover:bg-slate-200"
              />
            )}
          </Field>
          No
        </label>
      </div>
    </>
  );
}

export function ContactForm() {
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={(values, { setSubmitting }) => {
        console.log({ values });
        //
      }}
    >
      {({ isSubmitting }) => (
        <Form className="px-12 py-4">
          <InputField
            name="fullName"
            placeholder="Your full name"
            autoComplete="name"
          />
          <InputField
            type="email"
            name="email"
            placeholder="Your email"
            autoComplete="email"
          />
          <InputField
            name="phone"
            placeholder="Your phone"
            autoComplete="phone"
          />
          <SelectField name="insuranceType">
            <option value={""}>Your insurance type</option>
            {INSURANCE_TYPES.map((insuranceType) => (
              <option key={insuranceType} value={insuranceType}>
                {insuranceType}
              </option>
            ))}
          </SelectField>

          <RadioField
            fieldName="loudSnoring"
            label="Suffer from loud snoring?"
          />
          <RadioField
            fieldName="daytimeDrowsiness"
            label="Suffer from daytime drowsiness?"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="form-input px-4 py-3 rounded-sm my-10 border-0 bg-ion-blue hover:bg-ion-bluesky text-white text-lg ml-auto block transition-colors delay-150"
          >
            Yes, contact me!
          </button>
        </Form>
      )}
    </Formik>
  );
}
