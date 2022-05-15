import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const [color, setColor] = useState<any>('black')

  type random = {
    randomColor: () => string
  }

  useEffect(() => {
    const randomColor = () => {
      const math = Math.floor(Math.random() * 2)
      switch (math) {
        case 0:
         return 'white'
        case 1:
         return 'aliceblue'
      }
    }
    setColor(randomColor)
    document.body.style.backgroundColor = color
    document.body.style.transitionProperty = 'backgroundColor'
  }, [color])

  // useEffect(() => {
  //   const randomColor = () => {
  //     switch (color) {
  //       case 0:
  //         document.body.style.backgroundColor = 'red'
  //         break
  //       case 1:
  //         document.body.style.backgroundColor = 'blue'
  //         break
  //       case 2:
  //         document.body.style.backgroundColor = 'green'
  //         break
  //     }
  //   }
  //   console.log(randomColor)
  // }, [color])

  return (
    <>
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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
          <div className="">
            <Link href="/workflow" scroll={false}>
              ワークフロー
            </Link>
          </div>
          <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
          <div>
            <Link href="/workflow" scroll={false}>
              ワークフロー
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Home
