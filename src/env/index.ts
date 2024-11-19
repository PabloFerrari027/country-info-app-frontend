import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string(),
});

const parse = envSchema.safeParse(process.env);

if (!parse.success || parse.error) {
  const message = 'Invalid env variables!';
  throw new Error(message);
}

export const env = parse.data;
