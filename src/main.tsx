import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { ProductContext } from './Context/Context.tsx'

const querClient = new QueryClient({
  defaultOptions:{
    queries:{
      retry:1,
      refetchOnWindowFocus:false,
      staleTime:1000 * 60 * 10,
      // @ts-ignore
      cacheTime:1000 * 60 * 5
    }
  }
})

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <QueryClientProvider client={querClient}>
      <ProductContext>
        <App />
      </ProductContext>
    </QueryClientProvider>
  </BrowserRouter>
)