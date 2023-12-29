import { create } from 'zustand';
import { getCachedData } from '@/helpers/cache';
import { TAddonsSchemaType } from '@/components/Forms/Addons/validation';
import { TInfoSchemaType } from '@/components/Forms/Info/validation';
import { TPlanSchemaType } from '@/components/Forms/Plan/validation';

interface IFormStore {
  infoData: TInfoSchemaType;
  planData: TPlanSchemaType;
  addonsData: TAddonsSchemaType;
  setInfoData: (arg: TInfoSchemaType) => void;
  setPlanData: (arg: TPlanSchemaType) => void;
  setAddonsData: (arg: TAddonsSchemaType) => void;
}

export const useFormStore = create<IFormStore>((set) => ({
  infoData: getCachedData('infoData') as TInfoSchemaType,
  setInfoData: (arg: TInfoSchemaType) => {
    set(() => ({
      infoData: {
        name: arg.name,
        email: arg.email,
        phone: arg.phone
      }
    }));
  },

  planData: getCachedData('planData') as TPlanSchemaType,
  setPlanData: (arg: TPlanSchemaType) => {
    set(() => ({
      planData: {
        billing: arg.billing,
        plan: arg.plan,
        amount: arg.amount
      }
    }));
  },

  addonsData: getCachedData('addonsData') as TAddonsSchemaType,
  setAddonsData: (arg: TAddonsSchemaType) => {
    set(() => ({
      addonsData: {
        addons: arg.addons
      }
    }));
  }
}));
