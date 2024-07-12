import { createFileRoute } from '@tanstack/react-router'
import Layout from '../components/Layout'
import App from '../App'
import Loader from '../components/ui/loader'

export const Route = createFileRoute('/')({
  component: () => (
    <>
      <Layout >
        <App />
      </Layout>
    </>
  )
})