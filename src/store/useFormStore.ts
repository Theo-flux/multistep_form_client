import { TAddonsSchemaType } from '@/components/Forms/Addons/validation';
import { TInfoSchemaType } from '@/components/Forms/Info/validation';
import { TPlanSchemaType } from '@/components/Forms/Plan/validation';
import { create } from 'zustand';

interface IFormStore {
  infoData: TInfoSchemaType;
  planData: TPlanSchemaType;
  addonsData: TAddonsSchemaType;
  setInfoData: (arg: TInfoSchemaType) => void;
  setPlanData: (arg: TPlanSchemaType) => void;
  setAddonsData: (arg: TAddonsSchemaType) => void;
}

const emptyinfoData: TInfoSchemaType = {
  name: '',
  email: '',
  phone: ''
};

const emptyPlanData: TPlanSchemaType = {
  billing: '',
  plan: '',
  amount: 0
};

export const useFormStore = create<IFormStore>((set) => ({
  infoData: emptyinfoData,
  setInfoData: (arg: TInfoSchemaType) => {
    set(() => ({
      infoData: {
        name: arg.name,
        email: arg.email,
        phone: arg.phone
      }
    }));
  },

  planData: emptyPlanData,
  setPlanData: (arg: TPlanSchemaType) => {
    set(() => ({
      planData: {
        billing: arg.billing,
        plan: arg.plan,
        amount: arg.amount
      }
    }));
  },

  addonsData: { addons: [] },
  setAddonsData: (arg: TAddonsSchemaType) => {
    set(() => ({
      addonsData: {
        addons: arg.addons
      }
    }));
  }
}));
