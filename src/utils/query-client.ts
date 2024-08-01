import { QueryClient } from '@tanstack/react-query';

// for managing queries and mutations in the application

// const queryClient = new QueryClient();

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 5 * 1000 } },
});

// This code creates a centralized instance of the React Query QueryClient with default options, including a staleTime of 5 seconds.

export default queryClient;
