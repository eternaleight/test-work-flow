import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  const sytle = {
    box: `w-2/12 p-2 text-center bg-white border-2 border-black`,
  }
  return (
    <div className="">
      <Head>
        <title>initial-commit</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto pb-9 bg-slate-200 top-group">
        <div className="flex px-8 gap-[clamp(20px,9vw,280px)]">
        <div className="flex flex-col p-1 justify-reverse box-group gap-2">
          <h2 className='p-2'>ワークフロー</h2>
          <div>受注</div>
          <div>ヒアリング</div>
          <div>調査分析</div>
          <div>サイト設計(技術仕様書・サイトマップ)</div>
          <div>画面情報設計(ワイヤーフレーム設計)</div>
          <div>デザイン</div>
          <div>コーディング</div>
          <div>プログラミング・cms業務</div>
          <div>テストアップ</div>
          <div>納品</div>
          <div>運用</div>
          <div>改修</div>
        </div>
        <div className="flex flex-col p-1 justify-reverse box-group gap-2">
          <h2 className='p-1'>発注者とのやり取り</h2>
          <div>打ち合わせ</div>
          <div>見積もり提出</div>
          <div>↓</div>
          <div>見積もり提出</div>
          <div>↓</div>
          <div>↓</div>
          <div>確認</div>
          <div>確認</div>
          <div>↓</div>
          <div>↓</div>
          <div>↓</div>
          <div>確認</div>
          <div>↓</div>
          <div>請求</div>
        </div>
        <div className="flex flex-col p-1 long-box justify-reverse box-group gap-2">
          <h2 className='p-2'>使用するツール</h2>
          <div>メール 電話 クラウドソーシング</div>
          <div>＜ヒアリングシート＞Execel メモ帳 ノート Googleスプレッドシート</div>
          <div>Web検索 現場下見 Google Analytycsを使ったサイトの分析</div>
          <div>Power Point Execel</div>
          <div>Adobe XD Figma Photoshop Sketch Excel Power Point Illustrator Googleスライド</div>
          <div>Adobe XD Figma Photoshop Sketch Illustrator</div>
          <div>
            HTML CSS Typescript React Nect.js TailwindCSS
            CMSを使って管理・更新するシステムをカスタマイズ
            Sanity.io Firebase MovableType EC-CUBE 
          </div>
          <div>FTPクライアントを経由してサーバーにデータをアップロード Dreamweaver winSCP Transmit FileZilla FFFTP Cyber Duck</div>
          <div>＜更新仕様書＞Power Point Word Illustrator</div>
          <div>＜分析レポート＞Google Analytics Google Search Console</div>
        </div>
        </div>
      </main>
      <footer className=""></footer>
    </div>
  )
}

export default Home
