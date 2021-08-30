export interface Burrito {
  id: string,
  title: string,
  beans?: string,
  meat?: string,
  veggies?: string,
  cheese?: string,
  sourCream: boolean;
  calories: string;
};

export const emptyBurrito = {
  id: '',
  title: '',
  beans: '',
  meat: '',
  veggies: '',
  cheese: '',
  sourCream: false,
  calories: ''
};
