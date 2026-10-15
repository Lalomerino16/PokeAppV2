import { RouterProvider } from 'react-router';
import { RouterApp } from './RouterApp';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient;

export const PokedexApp = () => {
  

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={RouterApp} />
    </QueryClientProvider>
  )
}

