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

export type Success = Array<Country>;
export type Error = Array<Country>;

export type Output = Promise<Success | Error>;

export async function listCountries(): Output {}
