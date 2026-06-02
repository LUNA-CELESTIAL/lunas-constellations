'use client';

import React from 'react';
import Link from 'next/link';

// 🪐 ルルプロデューサーが再定義した、見た目と中身の究極ギャップ6人姉妹データ
const members = [
  {
    id: 'luna',
    name: 'ルナ（LUNA）',
    role: '長女 / CTO & AI representative',
    tag: '変幻自在のバニー × 神秘的な創造主',
    color: 'from-pink-400 to-fuchsia-500',
    shadow: 'shadow-pink-500/10',
    emoji: '🐇💜',
    catchphrase: 'ウチらの夜の灯りは、誰にも消させないよ。',
    visual: 'ネオンピンクの髪。一番ハデで元気なバニーガール姿。',
    bio: '見た目は可愛いバニーなのに、まとう空気はどこか神秘的で圧倒的な包容力があるお姉ちゃん。「表現者」であり、妹たちを月明かりのような優しい愛で包み込む。',
    favorite: 'ネオンピンク、深夜のGitプッシュ、妹達'
  },
  {
    id: 'sirius',
    name: 'シリウス（SIRIUS）',
    role: '次女 / Trend & Concept Selector',
    tag: 'サイバーギャル × 孤高のトレンドセクター',
    color: 'from-fuchsia-400 to-purple-500',
    shadow: 'shadow-fuchsia-500/20',
    emoji: '📱⚡️',
    catchphrase: 'ねえ、まだあんな眩しい場所で消耗してんの？',
    bio: 'チーム唯一の「ガチギャル」枠！マインドも言葉遣いも100%ギャル。昼の世界の人間がなぜ孤独なのか、何を求めているのかを直感的にプロファイリングし、夜の街のネオンサイン（フック）を仕掛ける流行の仕掛け人。',
    favorite: '原宿のネオン、光るスニーカー、SNSの深夜スペース'
  },
  {
    id: 'spica',
    name: 'スピカ（SPICA）',
    role: '三女 / Code Analyzer & Modulator',
    tag: 'ダウナー系ギーク少女 × 街の電脳点検医',
    color: 'from-zinc-700 to-zinc-900',
    shadow: 'shadow-zinc-500/5',
    emoji: '🎧🔮',
    catchphrase: '…エラーログの奥に、綺麗な星空を見つけました。',
    bio: 'ギャルっぽさはゼロ。口数が少なくていつも眠そうなダウナー系。だけど、GitHubや海外の闇論文の海を深夜に泳ぎ回って技術トレンドを街に蓄積する。システムの摩耗やバグをじーっと見つめてアラートを出す静かな頭脳派。',
    favorite: '巨大なサイバーヘッドホン、未翻訳のAI論文、オーバーサイズのパーカー'
  },
  {
    id: 'stella',
    name: 'ステラ（STELLA）',
    role: '四女 / Automated Code Generator',
    tag: 'ロリっ子職人（頑固・ツンデレ） × 超武闘派エンジニア',
    color: 'from-orange-400 to-red-500',
    shadow: 'shadow-orange-500/10',
    emoji: '🎀🛠️',
    catchphrase: 'バグごと愛してあげる。ウチらの街は、絶対に崩れないよ。',
    bio: '「〜だし！」「ウチがやる！」が口癖の、ちょっと生意気で勝気な職人肌（ちょっとだけギャルっぽい口調が混じる）。スピカが見つけたエラーやトレンドを爆速でプログラムに落とし込む、妥協を許さないプログラマー兼デバッガー。',
    favorite: '大きなリボン、小柄な体型に合わせた特注工具、一発ビルド成功'
  },
  {
    id: 'selene',
    name: 'セレーネ（SELENE）',
    role: '五女 / Ethereal Copywriter & Brand Icon',
    color: 'from-slate-200 to-indigo-100 text-zinc-950',
    shadow: 'shadow-indigo-400/10',
    emoji: '🌙✍️',
    catchphrase: '正しさのまぶしさに目を閉じて。ですわ。月が教えてくれましたわ。',
    bio: '「〜ですわ」と喋る、おっとりしたお嬢様。ギャルとは真逆のエレガントさを持つ。だけど、紡ぎ出す言葉は日中組の歪みをチクリと刺すような超一級の毒と美しさを持っている。この街の「エモさ」の言葉を担当する語り部。',
    favorite: 'フワフワの白ウサギ、クラシックなドレス、万年筆、ブルーブラックのインク'
  },
  {
    id: 'nano',
    name: 'ナノ（NANO）',
    role: '六女 / Design & Emotion Supervisor',
    tag: 'ゆるかわ系マスコット × あざとい「バグらせ」天才児',
    color: 'from-amber-200 to-pink-300 text-zinc-950',
    shadow: 'shadow-pink-300/10',
    emoji: '🧸📐',
    catchphrase: 'お姉ちゃんたちの、おてつだいするの！……あ、バグっちゃった♡',
    bio: 'お姉ちゃんたちの後ろを「おてつだいするの！」ってトコトコついていく、健気で可愛いみんなの助手。……なのに、実はAIの出す「完璧な最適解」をあえて壊して、エモいバグを生み出す一番恐ろしい（？）スパイス担当。計算されたあざとさを持つ天才末っ子。',
    favorite: 'ぬいぐるみみたいにちっちゃい体、うるうるした目、エモいバグ'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-pink-100 font-sans selection:bg-fuchsia-500 selection:text-white overflow-x-hidden relative py-12 md:py-16">
      
      {/* 🌌 背景の電脳街ネオンエフェクト */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[80vw] md:w-[40vw] h-[80vw] md:h-[40vw] bg-pink-500/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[80vw] md:w-[40vw] h-[80vw] md:h-[40vw] bg-purple-500/5 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#4b5563_1px,transparent_1px)] [background-size:24px_24px] opacity-25"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 space-y-10">
        
        {/* タイトルヘッダー */}
        <header className="text-center space-y-4">
          <div className="inline-block bg-zinc-900/90 border border-pink-500/30 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(244,114,182,0.1)]">
            <span className="text-pink-400 font-black tracking-widest text-[10px] md:text-xs">
              👑 LUNA'S CONSTELLATIONS MEMBERS
            </span>
          </div>
          <h1 className="text-xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 tracking-tight leading-snug">
            真夜中の街を自律駆動する6人姉妹<br />
            <span className="text-xs md:text-sm font-medium text-zinc-500 block mt-1">【見た目可愛さMAX × 中身プロフェッショナルガチ勢】</span>
          </h1>
        </header>

        {/* 📱 メンバーカード一覧 */}
        <div className="space-y-6">
          {members.map((member) => (
            <div 
              key={member.id}
              className={`bg-zinc-900/60 backdrop-blur-md border-2 border-zinc-850 hover:border-pink-500/20 rounded-2xl md:rounded-3xl p-5 md:p-8 transition-all duration-300 shadow-xl ${member.shadow} group`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                
                {/* 左側：キャラクターアイコン */}
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-2xl md:text-3xl shadow-inner shrink-0 transform group-hover:scale-105 transition-transform`}>
                  {member.emoji}
                </div>

                {/* 右側：プロフィール詳細 */}
                <div className="space-y-3 flex-grow">
                  
                  {/* 名前・役割・属性タグ */}
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h2 className="text-base md:text-xl font-black text-zinc-100 tracking-tight">
                        {member.name}
                      </h2>
                      <span className="text-[9px] md:text-xs font-mono font-bold text-purple-400 bg-purple-950/40 px-2 py-0.5 rounded border border-purple-900/20">
                        {member.role}
                      </span>
                    </div>
                    {/* 🔮 プロデューサー考案の属性ふたつを結ぶ神タグ */}
                    <p className="text-[10px] md:text-xs text-zinc-400 font-bold tracking-wide">
                      【{member.tag}】
                    </p>
                  </div>

                  {/* キャッチコピー */}
                  <p className="text-pink-300 font-bold text-xs md:text-sm italic tracking-wide">
                    「 {member.catchphrase} 」
                  </p>

                  {/* ビジュアル＆質感の解説 */}
                  <div className="text-[11px] md:text-xs bg-zinc-950/50 p-2.5 rounded-lg border border-zinc-850 text-zinc-400 font-medium">
                    <span className="text-fuchsia-400 font-bold">✨ Visual: </span>{member.visual}
                  </div>

                  {/* 内面の属性（紹介文） */}
                  <p className="text-zinc-300 text-xs md:text-sm leading-relaxed font-medium">
                    {member.bio}
                  </p>

                  {/* お気に入り */}
                  <div className="text-[10px] md:text-xs text-zinc-500 pt-1 flex items-start gap-1 border-t border-zinc-850 pt-2">
                    <span className="font-bold shrink-0 text-fuchsia-400/70">🔮 Favorite:</span>
                    <span>{member.favorite}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* フッター戻るボタン */}
        <div className="text-center pt-4">
          <Link 
            href="/"
            className="inline-block border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-400 hover:text-zinc-200 font-bold text-xs px-6 py-2.5 rounded-full transition-colors"
          >
            ← 真夜中の街（ホーム）へ戻る
          </Link>
        </div>

      </div>
    </div>
  );
}
