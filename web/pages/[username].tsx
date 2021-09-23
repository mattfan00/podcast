import Head from "next/head"
import { useRouter } from "next/router"
import { NextPage } from "next"
import { ProfilePage } from "../modules/profile/ProfilePage"
import { Header } from "../components/Header"
import { ContentWrapper } from "../components/ContentWrapper"
import { PlayBar } from "../components/PlayBar"

const Profile: NextPage = () => {
  const router = useRouter()
  const { username } = router.query

  return (
    <>
      <Head>
        <title>{username} | podcast</title>
      </Head>

      <Header />
      <ContentWrapper>
        <ProfilePage />
      </ContentWrapper>

      <PlayBar />
    </>
  )
}

export default Profile
