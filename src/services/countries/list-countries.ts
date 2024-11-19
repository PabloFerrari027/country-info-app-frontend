'use server';
import { env } from '@/env';

export interface Country {
  name: string;
  code: string;
  image: {
    name: string;
    flag: string;
    iso2: string;
    iso3: string;
  } | null;
  population: [{ year: number; value: number }];
  borders: [
    {
      commonName: string;
      officialName: string;
      countryCode: string;
      region: string;
    },
  ];
}

export type Error = { message: string; status: number } | null;
export type Data = Array<Country> | null;

export type Output = Promise<{ data?: Data; error?: Error }>;

export async function listCountries(): Output {
  try {
    const url = `${env.NEXT_PUBLIC_API_URL}/countris/list`;

    const response = await fetch(url, {
      method: 'POST',
    });

    const isSuccess = response.ok;

    if (isSuccess) {
      const json = await response.json();
      const output = { data: JSON.parse(json), error: null };
      return output;
    }

    const message = await response.text();
    const output = { error: { message, status: response.status }, data: null };
    return output;
  } catch (error) {
    const message = `${error}`;
    const output = { error: { message, status: 500 }, data: null };
    return output;
  }
}
