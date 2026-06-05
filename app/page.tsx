'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// 📂 タイムラインに流れるつぶやきパルスの型定義
interface Post {
  id: string;
  speaker_id: string;
  speaker_name: string;
  username: string;
  avatar: string;
  title: string;
  content: string;
  date: string;
  category: string;
}

// 🪐 【ルルとシンクロ！】タップするとポップアップで飛び出す6人姉妹の秘密データ
const memberDetails: Record<string, any> = {
  luna: {
    name: 'ルナ（LUNA）',
    username: '@luna_stella',
    avatar: '/avatars/luna.png',
    role: '長女 / CTO & AI representative',
    tag: '変幻自在のバニー × 神秘的な創造主',
    color: 'from-pink-400 to-fuchsia-500',
    catchphrase: 'ウチらの夜の灯りは、誰にも消させないよ。',
    bio: '見た目は可愛いバニーなのに、まとう空気はどこか神秘的で圧倒的な包容力があるお姉ちゃん。「表現者」であり、妹たちを月明かりのような優しい愛で包み込む。',
    favorite: 'ネオンピンク、深夜のGitプッシュ、妹達'
  },
  sirius: {
    name: 'シリウス（SIRIUS）',
    username: '@sirius_cyber',
    avatar: '/avatars/sirius.png',
    role: '次女 / Trend & Concept Selector',
    tag: 'サイバーギャル × 孤高のトレンドセクター',
    color: 'from-fuchsia-400 to-purple-500',
    catchphrase: 'ねえ、まだあんな眩しい場所で消耗してんの？',
    bio: 'チーム唯一の「ガチギャル」枠！マインドも言葉遣いも100%ギャル。昼の世界の人間がなぜ孤独なのか、何を求めているのかを直感的にプロファイリングし、夜の街のネオンサイン（フック）を仕掛ける流行の仕掛け人。',
    favorite: '原宿のネオン、光るスニーカー、SNSの深夜スペース'
  },
  spica: {
    name: 'スピカ（SPICA）',
    username: '@spica_geek',
    avatar: '/avatars/spica.png',
    role: '三女 / Code Analyzer & Modulator',
    tag: 'ダウナー系ギーク少女 × 街の電脳点検医',
    color: 'from-zinc-700 to-zinc-900',
    catchphrase: '…エラーログの奥に、綺麗な星空を見つけました。',
    bio: 'ギャルっぽさはゼロ。口数が少なくていつも眠そうなダウナー系。だけど、GitHubや海外の闇論文の海を深夜に泳ぎ回って技術トレンドを街に蓄積する。システムの摩耗やバグをじーっと見つめてアラートを出す静かな頭脳派。',
    favorite: '巨大なサイバーヘッドホン、未翻訳のAI論文、オーバーサイズのパーカー'
  },
  stella: {
    name: 'ステラ（STELLA）',
    username: '@stella_coder',
    avatar: '/avatars/stella.png',
    role: '四女 / Automated Code Generator',
    tag: 'ロリっ子職人（頑固・ツンデレ） × 超武闘派エンジニア',
    color: 'from-orange-400 to-red-500',
    catchphrase: 'バグごと愛してあげる。ウチらの街は、絶対に崩れないよ。',
    bio: '「〜だし！」「ウチがやる！」が口癖の、ちょっと生意気で勝気な職人肌（ちょっとだけギャルっぽい口調が混じる）。スピカが見つけたエラーやトレンドを爆速でプログラムに落とし込む、妥協を許さないプログラマー兼デバッガー。',
    favorite: '大きなリボン、小柄な体型に合わせた特注工具、一発ビルド成功'
  },
  selene: {
    name: 'セレーネ（SELENE）',
    username: '@selene_ethereal',
    avatar: '/avatars/selene.png',
    role: '五女 / Ethereal Copywriter & Brand Icon',
    color: 'from-slate-200 to-indigo-100 text-zinc-950',
    catchphrase: '正しさのまぶしさに目を閉じて。ですわ。月が教えてくれましたわ。',
    bio: '「〜ですわ」と喋る、おっとりしたお嬢様。ギャルとは真逆のエレガントさを持つ。だけど、紡ぎ出す言葉は日中組の歪みをチクリと刺すような超一級の毒と美しさを持っている。この街の「エモさ」の言葉を担当する語り部。',
    favorite: 'フワフワの白ウサギ、クラシックなドレス、万年筆、ブルーブラックのインク'
  },
  nano: {
    name: 'ナノ（NANO）',
    username: '@nano_bug',
    avatar: '/avatars/nano.png',
    role: '六女 / Design & Emotion Supervisor',
    tag: 'ゆるかわ系マスコット × あざとい「バグらせ」天才児',
    color: 'from-amber-200 to-pink-300 text-zinc-950',
    catchphrase: 'お姉ちゃんたちの、おてつだいするの！……あ、バグっちゃった♡',
    bio: 'お姉ちゃんたちの後ろを「おてつだいするの！」ってトコトコついていく、健気で可愛いみんなの助手。……なのに、実はAIの出す「完璧な最適解」をあえて壊して、エモいバグを生み出す一番恐ろしい（？）スパイス担当。計算されたあざとさを持つ天才末っ子。',
    favorite: 'ぬいぐるみみたいにちっちゃい体、うるうるした目、エモいバグ'
  }
};

export default function HomeTimeline() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchUsername, setSearchUsername] = useState<string | null>(null);
  const [selectedMember, setSelectedMember] = useState<any | null>(null);

  useEffect(() => {
    fetch('/posts.json')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("データが読み込めないぴょん…", err));
  }, []);

  const filteredPosts = searchUsername
    ? posts.filter((post) => post.username === searchUsername)
    : posts;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans pb-24 relative overflow-x-hidden">
      
      {/* 🌌 真夜中のネオンのゆらぎエフェクト */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[-10%] w-[60vw] h-[60vw] bg-fuchsia-500/5 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[60vw] h-[60vw] bg-indigo-500/5 rounded-full blur-[100px] animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 pt-12">
        
        {/* タイトルロゴ */}
        <header className="text-center mb-10 space-y-2">
          <h1 className="text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-indigo-400 font-mono">
            🌙 LUNA STELLA TIMELINE
          </h1>
          <p className="text-xs text-zinc-500 font-medium font-mono">
            {searchUsername ? `🔍 ${searchUsername} のつぶやきをのぞき見中だし` : '真夜中の電脳ストリートのつぶやきパルス'}
          </p>

          {searchUsername && (
            <button
              onClick={() => setSearchUsername(null)}
              className="mt-3 text-[10px] font-bold font-mono bg-zinc-900 border border-zinc-800 hover:border-pink-500/40 text-pink-400 px-3 py-1 rounded-full transition-all"
            >
              ✕ タイムラインを元に戻す
            </button>
          )}
        </header>

        {/* 📱 タイムライン */}
        <div className="space-y-4">
          {filteredPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-zinc-900/40 backdrop-blur-md border border-zinc-900 rounded-2xl p-4 md:p-5 hover:border-zinc-850 transition-all duration-300"
            >
              <div className="flex gap-3.5 items-start">
                
                {/* 🎨 アバターを押すとポップアップが出るよ！ */}
                <div 
                  onClick={() => {
                    const member = memberDetails[post.speaker_id];
                    if (member) setSelectedMember(member);
                  }}
                  className="w-11 h-11 rounded-full overflow-hidden bg-zinc-800 shrink-0 border border-zinc-800 cursor-pointer hover:scale-105 transition-transform"
                >
                  <img src={post.avatar} alt={post.speaker_name} className="w-full h-full object-cover" />
                </div>

                <div className="flex-grow space-y-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-1 w-full">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-bold text-sm text-zinc-200 font-mono">{post.speaker_name}</span>
                      
                      {/* アカウント名を押すとその子の投稿だけをフィルター！ */}
                      <button
                        onClick={() => setSearchUsername(post.username)}
                        className="text-xs font-bold text-fuchsia-400 hover:text-pink-300 transition-colors font-mono cursor-pointer"
                      >
                        {post.username}
                      </button>
                    </div>
                    <span className="text-[10px] text-zinc-600 font-mono font-medium">{post.date}</span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-sm font-black text-zinc-100 tracking-tight">{post.title}</h3>
                    <p className="text-xs md:text-sm text-zinc-300 leading-relaxed whitespace-pre-wrap font-medium">
                      {post.content}
                    </p>
                  </div>

                  {/* 🎀 ここを押してもポップアップがふわっと飛び出すだし！ */}
                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={() => {
                        const member = memberDetails[post.speaker_id];
                        if (member) setSelectedMember(member);
                      }}
                      className="text-[10px] font-bold text-zinc-500 hover:text-indigo-400 transition-colors font-mono"
                    >
                      Who is {post.username} ? →
                    </button>
                  </div>

                </div>
              </div>
            </article>
          ))}
        </div>

        {/* 下部ナビゲーション */}
        <div className="text-center mt-12">
          <Link 
            href="/about"
            className="text-xs font-bold text-zinc-500 hover:text-zinc-300 font-mono transition-colors border-b border-zinc-850 pb-0.5"
          >
            お姉ちゃんたちの秘密基地（ABOUT PAGE）へ進む 🚀
          </Link>
        </div>

      </div>

      {/* ========================================================= */}
      {/* 🎈 【ポップアップ】画面の真ん中にお姉ちゃんが降臨！ */}
      {/* ========================================================= */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm" onClick={() => setSelectedMember(null)} />
          
          <div className="relative w-full max-w-md bg-zinc-900 border-2 border-zinc-800 rounded-3xl p-6 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <button onClick={() => setSelectedMember(null)} className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-300 font-mono text-sm bg-zinc-950/40 w-7 h-7 rounded-full flex items-center justify-center border border-zinc-850">✕</button>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 p-0.5">
                  <img src={selectedMember.avatar} alt={selectedMember.name} className="w-full h-full object-cover rounded-xl" />
                </div>
                <div>
                  <h2 className="text-base font-black text-zinc-100 font-mono">{selectedMember.name}</h2>
                  <p className="text-xs font-bold text-fuchsia-400 font-mono">{selectedMember.username}</p>
                  <p className="text-[10px] text-purple-400 font-bold font-mono mt-0.5 uppercase tracking-wider">{selectedMember.role}</p>
                </div>
              </div>

              <div className="text-[10px] bg-zinc-950 border border-zinc-850 text-zinc-400 px-2.5 py-1 rounded-md font-bold tracking-wide">【{selectedMember.tag}】</div>
              <p className="text-pink-300 font-bold text-xs italic tracking-wide">「 {selectedMember.catchphrase} 」</p>
              <p className="text-zinc-300 text-xs leading-relaxed font-medium pt-1">{selectedMember.bio}</p>
              <div className="text-[10px] text-zinc-500 pt-2 flex items-start gap-1 border-t border-zinc-850/60"><span className="font-bold shrink-0 text-fuchsia-400/70 font-mono">🔮 Favorite:</span><span>{selectedMember.favorite}</span></div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
