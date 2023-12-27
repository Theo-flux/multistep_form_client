import * as yup from 'yup';

const numberRegex =
  /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/;

export const infoSchema = yup.object().shape({
  name: yup.string().min(6).required('This field is required!'),
  email: yup.string().email('Email must be valid!').required('This field is required!'),
  phone: yup
    .string()
    .matches(numberRegex, 'Enter a valid phone number')
    .required('This field is required!')
});

export type TInfoSchemaType = yup.InferType<typeof infoSchema>;
