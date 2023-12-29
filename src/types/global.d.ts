interface IInputProps {
  id: string;
  name: string;
  placeholder?: string;
  label?: string;
  error?: string;
  value?: string | number;
  type?: string;
  css?: string;
  note?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  disabled?: boolean;
}

type TStep = {
  stepNo: string;
  title: string;
};

type ValueOf<T> = T[keyof T];

type TBilling = 'monthly' | 'yearly';

type TAddons = {
  addon: string;
  amount: number;
};

type TFormModel = {
  name: string;
  email: string;
  phone: string;
  billing: TBilling;
  subscription: {
    plan: string;
    amount: number;
  };
  add_ons: Array<TAddons> | [];
};
