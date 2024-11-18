import { z } from 'zod';
import { CountriesSchema } from './countries.schema';
import { createContext } from 'react';

export type Countries = z.infer<typeof CountriesSchema>;

export type CountriesContextProps = {
  data: Array<Countries>;
};

export const CountriesContext = createContext<CountriesContextProps | undefined>(undefined);
