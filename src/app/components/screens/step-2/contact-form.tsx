import React, { ChangeEvent } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string, boolean } from "yup";

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
                className="p-3 border rounded-full mx-2"
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
                className="p-3 border rounded-full mr-2 ml-3"
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
          <Field
            name="fullName"
            className="form-input px-4 py-3 rounded-sm w-full mt-3"
            placeholder="Your full name"
            autoComplete="name"
          />
          <ErrorMessage
            name="fullName"
            component="div"
            className="px-4 py-1 w-full mb-2 text-white bg-red-500"
          />
          <Field
            type="email"
            name="email"
            className="form-input px-4 py-3 rounded-sm w-full mt-3"
            placeholder="Your email"
            autoComplete="email"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="px-4 py-1 w-full mb-2 text-white bg-red-500"
          />
          <Field
            name="phone"
            className="form-input px-4 py-3 rounded-sm w-full mt-3"
            placeholder="Your phone"
            autoComplete="phone"
          />
          <ErrorMessage
            name="phone"
            component="div"
            className="px-4 py-1 w-full mb-2 text-white bg-red-500"
          />

          <Field
            name="insuranceType"
            as="select"
            className="form-select px-4 py-3 rounded-sm w-full mt-3"
          >
            <option value={""}>Your insurance type</option>
            {INSURANCE_TYPES.map((insuranceType) => (
              <option key={insuranceType} value={insuranceType}>
                {insuranceType}
              </option>
            ))}
          </Field>
          <ErrorMessage
            name="insuranceType"
            component="div"
            className="px-4 py-1 w-full mb-2 text-white bg-red-500"
          />

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
            className="form-input px-4 py-3 rounded-sm my-10 border-0 bg-ion-blue text-white text-lg ml-auto block"
          >
            Yes, contact me!
          </button>
        </Form>
      )}
    </Formik>
  );
}
