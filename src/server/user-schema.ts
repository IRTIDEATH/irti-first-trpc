import { TypeOf, number, object, string } from 'zod';

// To ensure the integrity of data stored in the database, use Zod to create validation schemas. These schemas guarantee that users provide accurate data with the correct data types in the JSON payload.

export const createUserSchema = object({
  name: string({ required_error: 'Name is required' }),
  email: string({ required_error: 'Email is required' }).email('Invalid email'),
});

export const filterQuery = object({
  limit: number().default(1),
  page: number().default(10),
});

export type CreateUserInput = TypeOf<typeof createUserSchema>;
export type FilterQueryInput = TypeOf<typeof filterQuery>;
