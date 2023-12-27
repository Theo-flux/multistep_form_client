export type TPlan = {
  arcade: number;
  advanced: number;
  pro: number;
};

export type TPlanPackage = {
  monthly: TPlan;
  yearly: TPlan;
};

const planPackage: TPlanPackage = {
  monthly: {
    arcade: 9,
    advanced: 12,
    pro: 15
  },

  yearly: {
    arcade: 90,
    advanced: 120,
    pro: 150
  }
};

export default planPackage;
