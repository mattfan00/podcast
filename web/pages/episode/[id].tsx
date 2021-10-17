import Head from "next/head"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { NextPage } from "next"
import { Header } from "../../components/Header"
import { ContentWrapper } from "../../components/ContentWrapper"
import { PlayBar } from "../../components/PlayBar"
import { serverQuery } from "../../lib/axios"
import { Episode as EpisodeType } from "../../types/episode"

interface Props {
  episode: EpisodeType
}

const Episode: NextPage<Props> = ({ episode }) => {
  const router = useRouter()
  const { username } = router.query

  return (
    <>
      <Head>
        <title>{username} | podcast</title>
      </Head>

      <Header />
      <ContentWrapper>
      </ContentWrapper>

      <PlayBar />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params!
  const { data: episode } = await serverQuery.get(`/episode/${id}`)

  return {
    props: {
      episode
    }
  }
}

export default Episode
