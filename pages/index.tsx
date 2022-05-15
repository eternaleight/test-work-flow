import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Home: NextPage = () => {
  return (
    <>
      <motion.div
        className=''
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, backgroundColor: '' }}
        exit={{ opacity: 0 }}
        // transition={{ ease: "easeOut", duration: 1 }}
      >
        <Head>
          <title>initial-commit</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="flex flex-col p-2 gap-3">
          <div className=''>
        
            <Link href="/workflow" scroll={false}>ワークフロー</Link>
          </div>
          <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
          <div>
            <Link href="/workflow" scroll={false}>ワークフロー</Link>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Home
