import z from 'zod';

export const CountriesSchema = z.object({
  name: z.string(),
  code: z.string(),
  image: z.union([
    z.null(),
    z.object({
      name: z.string(),
      flag: z.string(),
      iso2: z.string(),
      iso3: z.string(),
    }),
  ]),
  population: z.array(z.object({ year: z.number(), value: z.number() })),
  borders: z.array(
    z.object({
      commonName: z.string(),
      officialName: z.string(),
      countryCode: z.string(),
      region: z.string(),
    }),
  ),
});
