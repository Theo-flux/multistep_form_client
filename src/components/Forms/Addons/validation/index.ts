import * as yup from 'yup';

export const addonsSchema = yup.object().shape({
  addons: yup.array()
});

export type TAddonsSchemaType = yup.InferType<typeof addonsSchema>;
