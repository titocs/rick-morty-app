import { createFileRoute } from '@tanstack/react-router'
import Layout from '../../components/Layout'
import CharacterByLocation from '../../pages/CharacterByLocation'

export const Route = createFileRoute('/character-by-location/')({
  component: () => (
    <Layout >
      <CharacterByLocation />
    </Layout>
  )
})