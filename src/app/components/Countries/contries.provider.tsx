'use client';
import React, { ReactNode, useState } from 'react';
import { CountriesContext, Countries } from './countries-context';
import { listCountries } from '@/services/countries/list-countries';

interface ContriesProviderProps {
  children: ReactNode;
}

export default function ContriesProvider(props: ContriesProviderProps) {
  const [countries, setCountries] = useState<Array<Countries>>([]);
  const isLoading = true;

  const fetch = async () => {
    const result = await listCountries();
    console.log(result);
  };

  return (
    <CountriesContext.Provider value={{ data: countries, isLoading }}>
      {props.children}
    </CountriesContext.Provider>
  );
}
