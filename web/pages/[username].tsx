import Head from "next/head"
import { useRouter } from "next/router"
import { NextPage } from "next"
import { ProfilePage } from "../modules/profile/ProfilePage"
import { Header } from "../components/Header"

const Profile: NextPage = () => {
  const router = useRouter()
  const { username } = router.query

  return (
    <>
      <Head>
        <title>{username} | podcast</title>
      </Head>

      <Header />
      <ProfilePage />
    </>
  )
}

export default Profile
