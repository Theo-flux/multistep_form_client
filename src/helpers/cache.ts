import { PLANDATA, INFODATA, ADDONSDATA } from '@/constants';
import { TAddonsSchemaType } from '@/components/Forms/Addons/validation';
import { TInfoSchemaType } from '@/components/Forms/Info/validation';
import { TPlanSchemaType } from '@/components/Forms/Plan/validation';

const emptyInfoData: TInfoSchemaType = {
  name: '',
  email: '',
  phone: ''
};

const emptyPlanData: TPlanSchemaType = {
  billing: '',
  plan: '',
  amount: 0
};

export const cacheData = (
  key: string,
  data: TInfoSchemaType | TPlanSchemaType | TAddonsSchemaType
) => {
  sessionStorage.setItem(key, JSON.stringify(data));
};

export const getCachedData = (key: string) => {
  const res = sessionStorage.getItem(key);
  if (key === INFODATA) {
    if (res) {
      return JSON.parse(res);
    } else {
      return emptyInfoData;
    }
  } else if (key === PLANDATA) {
    if (res) {
      return JSON.parse(res);
    } else {
      return emptyPlanData;
    }
  } else if (key === ADDONSDATA) {
    if (res) {
      return JSON.parse(res);
    } else {
      return { addons: [] };
    }
  }
};
