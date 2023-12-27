import addonsPackage, { TAddonsPackage } from '@/assets/data/addonpackage';
import { TAddonsSchemaType } from '@/components/Forms/Addons/validation';
import { TPlanSchemaType } from '@/components/Forms/Plan/validation';

export const formatWord = (word: string, splitter: string = '_', joiner: string = '') => {
  const w = word.split(splitter).join(joiner);

  return w.charAt(0).toUpperCase() + w.slice(1);
};

export const getTotal = (plan: TPlanSchemaType, addons: TAddonsSchemaType['addons']) => {
  const amts = addons?.map((addon: keyof TAddonsPackage) => {
    return plan.billing === 'monthly' ? addonsPackage[addon] : addonsPackage[addon] * 10;
  });

  const res = amts?.reduce((avg, cur) => {
    return (avg += cur);
  }, 0);

  return (res || 0) + (plan?.amount || 0);
};
