import { createFileRoute } from '@tanstack/react-router'
import Layout from '../components/Layout'
import App from '../App'

export const Route = createFileRoute('/')({
  component: () => (
    <>
      <Layout >
        <App />
      </Layout>
    </>
  )
})