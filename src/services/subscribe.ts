import { FormApi } from '@/utils/axios';
import { handleFormApiError } from '@/utils/httpApiErrors';

export const subscribe = async (payload: TFormModel) => {
  try {
    const result = await FormApi.post('form', payload);
    return result;
  } catch (error) {
    throw handleFormApiError(error);
  }
};
