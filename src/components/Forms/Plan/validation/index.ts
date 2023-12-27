import * as yup from 'yup';

export const planSchema = yup.object().shape({
  billing: yup.string(),
  plan: yup.string().required('Select your preferred plan!'),
  amount: yup.number()
});

export type TPlanSchemaType = yup.InferType<typeof planSchema>;
