import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const workflow = () => (
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 1}}
        exit={{ opacity: 0 }}
      >
  <div className="rounded-[8px] shadow1 top-group container mx-auto max-w-[1280px] bg-slate-200 px-2 pt-1 pb-9">
    <div className="flex gap-x-3">
      <div className="box-group flex-[1]">
        <Link href='/' scroll={false}>
        <h2 className="pt-4 cursor-pointer">ワークフロー</h2>
        </Link>
        <div>受注</div>
        <div>ヒアリング</div>
        <div>↓</div>
        <div>調査分析</div>
        <div className="p-1">サイト設計(技術仕様書・サイトマップ)</div>
        <div>↓</div>
        <div className="p-1">画面情報設計(ワイヤーフレーム設計)</div>
        <div>↓</div>
        <div>デザイン</div>
        <div>↓</div>
        <div>コーディング</div>
        <div className="p-1">プログラミング・cms業務</div>
        <div>テストアップ</div>
        <div>↓</div>
        <div>納品</div>
        <div>↓</div>
        <div>運用</div>
        <div>改修</div>
      </div>
      <div className=" box-group flex-[1]">
        <h2 className="pt-2 media sm:pt-4">発注者とのやり取り</h2>
        <div>↓</div>
        <div>打ち合わせ</div>
        <div>見積もり提出</div>
        <div>↓</div>
        <div>↓</div>
        <div>見積もり提出</div>
        <div>↓</div>
        <div>確認</div>
        <div>↓</div>
        <div>確認</div>
        <div>↓</div>
        <div>↓</div>
        <div>↓</div>
        <div>確認</div>
        <div>↓</div>
        <div>請求</div>
        <div>↓</div>
        <div>↓</div>
      </div>
      <div className="box-group flex-[2]">
        <h2 className="pt-4">使用するツール</h2>
        <section className="box3">
          <div>メール 電話 クラウドソーシング</div>
          <div>＜ヒアリングシート＞Execel メモ帳 ノート Googleスプレッドシート</div>
          <div>↓</div>
          <div>Web検索 現場下見 Google Analytycsを使ったサイトの分析</div>
          <div>Power Point Execel</div>
          <div>↓</div>
          <div>Adobe XD Figma Photoshop Sketch Excel Power Point Illustrator Googleスライド</div>
          <div>↓</div>
          <div>Adobe XD Figma Photoshop Sketch Illustrator</div>
          <div>↓</div>
          <div className="">
            HTML CSS Typescript React Nect.js TailwindCSS
            CMSを使って管理・更新するシステムをカスタマイズ Sanity.io Firebase MovableType EC-CUBE
          </div>
          <div>↓</div>
          <div>
            FTPクライアントを経由してサーバーにデータをアップロード Dreamweaver winSCP Transmit
            FileZilla FFFTP Cyber Duck
          </div>
          <div>↓</div>
          <div>＜更新仕様書＞Power Point Word Illustrator</div>
          <div>↓</div>
          <div>＜分析レポート＞Google Analytics Google Search Console</div>
          <div>↓</div>
        </section>
      </div>
    </div>
  </div>
        </motion.div>
)

export default workflow
