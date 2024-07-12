import { createFileRoute } from '@tanstack/react-router'
import Layout from '../../components/Layout'
import ListCharacterLocation from '../../pages/ListCharacterLocation'

export const Route = createFileRoute('/list-character-location/$locationName')({
  component: () => {
    const { locationName } = Route.useParams();
    return (
      <Layout >
        <ListCharacterLocation locationName={locationName} />
      </Layout>
    )
  }
  
})