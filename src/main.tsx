import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ApolloWrapper from './graphql/ApolloClient.tsx'
import { RouterProvider, createRouter } from '@tanstack/react-router'

import { routeTree } from './routeTree.gen';
import { RecoilRoot } from 'recoil'

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloWrapper >
      <RouterProvider router={router} >
        <App />
      </RouterProvider>
    </ApolloWrapper>
  </React.StrictMode>,
)
