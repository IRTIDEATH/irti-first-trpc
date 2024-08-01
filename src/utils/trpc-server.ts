import { initTRPC } from '@trpc/server';
import SuperJSON from 'superjson';

// instance server tRPC. Instance ini memainkan peran penting dalam mendefinisikan API tRPC dan menangani permintaan yang masuk.
export const t = initTRPC.create({
  transformer: SuperJSON,
});