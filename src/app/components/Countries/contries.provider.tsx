import React, { ReactNode, useState } from 'react';
import { CountriesContext, Countries } from './countries-context';

interface ContriesProviderProps {
  children: ReactNode;
}

export default function ContriesProvider(props: ContriesProviderProps) {
  const [countries, setCountries] = useState<Array<Countries>>([]);

  return (
    <CountriesContext.Provider value={{ data: countries }}>
      {props.children}
    </CountriesContext.Provider>
  );
}
