import { createFileRoute } from '@tanstack/react-router'
import Layout from '../../components/Layout'
import DetailCharacter from '../../pages/DetailCharacter'
import { RecoilRoot } from 'recoil';

export const Route = createFileRoute('/character/$characterId')({
  component: () => {
    const { characterId } = Route.useParams();
    return (
      (
        <RecoilRoot >
          <Layout >
            <DetailCharacter id={characterId} />
          </Layout>
        </RecoilRoot>
      )
    )
  }
})