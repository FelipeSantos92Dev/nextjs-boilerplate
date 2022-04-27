import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NextJS Boilerplate</title>
        <meta
          name="description"
          content="Basic project with lints and husky configs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Enjoy this startpoint!</h1>
      </main>

      <footer></footer>
    </div>
  )
}

export default Home
