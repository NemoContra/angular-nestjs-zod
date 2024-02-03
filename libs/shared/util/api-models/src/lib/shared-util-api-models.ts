import { z } from 'zod';

export const flightSchema = z
  .object({
    from: z.string().min(5).max(100),
    to: z.string().min(5).max(100),
    time: z.string().datetime(),
    delayed: z.boolean(),
  })
  .required();

export type Flight = z.infer<typeof flightSchema>;
