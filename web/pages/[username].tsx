import Head from "next/head"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { NextPage } from "next"
import { ProfilePage } from "../modules/profile/ProfilePage"
import { Header } from "../components/Header"
import { ContentWrapper } from "../components/ContentWrapper"
import { PlayBar } from "../components/PlayBar"
import { serverQuery } from "../lib/axios"
import { User } from "../types/user"

interface Props {
  profile: User
}

const Profile: NextPage<Props> = ({ profile }) => {
  const router = useRouter()
  const { username } = router.query

  return (
    <>
      <Head>
        <title>{username} | podcast</title>
      </Head>

      <Header />
      <ContentWrapper>
        <ProfilePage profile={profile} />
      </ContentWrapper>

      <PlayBar />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { username } = params!
  const { data: profile } = await serverQuery.get(`/user/${username}`)

  console.log(profile)

  return {
    props: {
      profile
    }
  }
}

export default Profile
