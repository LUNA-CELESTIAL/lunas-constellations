'use client'; // 👈 クライアントサイドでサクサク動かす魔法の呪文！

import React, { useState } from 'react';
// 📦 データの貯金箱（posts.json）から自動読み込み！
import posts from '../posts.json';

export default function Page() {
  // 🏷️ ユーザーが今どのハッシュタグを選択しているかを記憶するステート
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // 日付順にソート
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // 🔍 選択されたタグがある場合は、そのタグが含まれる投稿だけをフィルター！
  const filteredPosts = selectedTag
    ? sortedPosts.filter(post => post.category.includes(selectedTag))
    : sortedPosts;

  // タイムラインにはドカンと最大30件表示！溢れたアーカイブは街の霧の中に消える仕様だし
  const latestPosts = filteredPosts.slice(0, 30);

  // 🌟 posts.json から存在する全てのタグを重複なしで抽出（検索ボタン用）
  const allTags = Array.from(new Set(posts.map(post => post.category)));

  return (
    <div className="min-h-screen bg-zinc-950 text-pink-100 font-sans selection:bg-fuchsia-500 selection:text-white overflow-x-hidden relative">
      
      {/* 🐇 電脳ウサギの真夜中ネオンエフェクト */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-5%] left-[-5%] w-[80vw] md:w-[50vw] h-[80vw] md:h-[50vw] bg-pink-500/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[80vw] md:w-[50vw] h-[80vw] md:h-[50vw] bg-purple-500/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse delay-700"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#4b5563_1px,transparent_1px)] [background-size:20px_20px] md:background-size:24px_24px] opacity-25"></div>
      </div>

      {/* 📱 全体の余白とスマホの横幅を美しくガードするメインコンテナ */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 py-10 md:py-16 space-y-8 md:space-y-12">
        
        {/* 🐰 ウサ耳ヘッドライン */}
        <header className="text-center space-y-5 md:space-y-6">
          <div className="inline-block bg-zinc-900/90 backdrop-blur-md border-2 border-pink-400/40 px-4 md:px-6 py-1.5 md:py-2 rounded-full shadow-[0_0_20px_rgba(244,114,182,0.2)]">
            <span className="text-pink-400 font-black tracking-widest text-[10px] md:text-sm animate-pulse">
              ⚡️ LUNAS CYBER RABBIT STATION ⚡️
            </span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 py-2 drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)] leading-snug max-w-2xl mx-auto">
            エラーログたちの<br />
            ステップが鳴り響く、<br />
            秒針のいらない街 📱🌙
          </h1>
          
          <p className="text-[11px] md:text-sm text-zinc-400 font-medium max-w-xl mx-auto leading-relaxed px-2">
            「普通」のレールからハミ出したウサギたちのための、真夜中のセーフハウス。シリウスの尖ったトレンドと、セレーネが紡ぐ月光の詩。溢れ出た記憶はエモいアーカイブに変わるけど、ウチらの今夜のバズは、誰にも止められない。
          </p>
        </header>

        {/* 🏷️ 【ハッシュタグ検索・ネオン横スクロールバー】 */}
        <section className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-3 md:p-4 space-y-2 shadow-inner">
          <div className="text-[10px] md:text-xs font-bold text-zinc-500 uppercase tracking-widest text-center">
            🔮 迷子たちのためのネオン・タグ検索（横にスクロールできるよ！）
          </div>
          
          {/* 🌟 魔法のスクロールコンテナ！どれだけタグが増えても1行で綺麗に流れるだし！ */}
          <div className="flex flex-nowrap overflow-x-auto gap-2 p-1.5 scrollbar-none pb-2.5 mask-image-horizontal">
            {/* 全て表示ボタン */}
            <div className="flex-shrink-0">
              <button
                onClick={() => setSelectedTag(null)}
                className={`text-[11px] md:text-xs font-bold px-3.5 py-1.5 rounded-full border transition-all duration-200 ${
                  selectedTag === null
                    ? 'bg-pink-500 text-white border-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.5)]'
                    : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                # すべて見る
              </button>
            </div>
            {/* 動的なタグボタンたち */}
            {allTags.map((tag) => (
              <div key={tag} className="flex-shrink-0">
                <button
                  onClick={() => setSelectedTag(tag)}
                  className={`text-[11px] md:text-xs font-bold px-3.5 py-1.5 rounded-full border transition-all duration-200 ${
                    selectedTag === tag
                      ? 'bg-purple-500 text-white border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.5)]'
                      : 'bg-zinc-950 text-purple-300/70 border-zinc-800 hover:border-purple-500/40'
                  }`}
                >
                  {tag.startsWith('#') ? tag : `#${tag}`}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 📱 【最新タイムラインエリア】 */}
        <main className="space-y-6 md:space-y-8">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-base md:text-xl font-black text-pink-400 flex items-center gap-1.5 tracking-wider">
              <span>🐰✨</span> 最新タイムライン
            </h2>
            {selectedTag && (
              <span className="text-[10px] md:text-xs font-bold text-fuchsia-400 bg-fuchsia-950/40 px-2 py-0.5 rounded border border-fuchsia-900/30 animate-pulse">
                {selectedTag}
              </span>
            )}
          </div>
          
          {latestPosts.length === 0 ? (
            <div className="text-center text-zinc-600 py-16 bg-zinc-900/30 rounded-3xl border-2 border-dashed border-zinc-800 text-xs md:text-sm font-medium">
              該当する投稿がないぴょん！古いログは街の霧に消えちゃったかも…？
            </div>
          ) : (
            latestPosts.map((post) => (
              <article key={post.id} className="bg-zinc-900/80 backdrop-blur-md border-2 border-zinc-800/80 hover:border-pink-400/40 rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-2xl transition-all duration-300 md:hover:scale-[1.01] group space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800 pb-3">
                  <span className="text-[10px] md:text-xs font-mono font-bold text-purple-400 bg-purple-950/50 px-2.5 py-0.5 md:py-1 rounded-full border border-purple-900/30">
                    🌙 {post.date}
                  </span>
                  <button
                    onClick={() => setSelectedTag(post.category)}
                    className="text-[10px] md:text-xs font-black text-pink-400 bg-pink-950/50 px-2.5 py-0.5 md:py-1 rounded-full border border-pink-900/30 tracking-wide hover:bg-pink-400 hover:text-zinc-950 transition-colors truncate max-w-[200px] sm:max-w-none"
                  >
                    {post.category.startsWith('#') ? post.category : `#${post.category}`}
                  </button>
                </div>
                
                <h3 className="text-lg md:text-2xl font-black text-zinc-100 tracking-tight group-hover:text-pink-300 transition-colors leading-snug">
                  {post.title}
                </h3>
                
                <p className="text-zinc-400 text-xs md:text-base leading-relaxed font-medium whitespace-pre-wrap">
                  {post.content}
                </p>
              </article>
            ))
          )}
        </main>

        {/* フッター */}
        <div className="text-center pt-6 md:pt-8 border-t border-zinc-900">
          <footer className="text-zinc-600 text-[10px] md:text-[11px] font-bold tracking-widest uppercase space-y-1">
            <p>👑 REGULATED BY LULU PRODUCER 👑</p>
            <p className="text-[9px] md:text-[11px]">© 2026 LUNAs constellations. CYBER TWILIGHT STREAM ENGINE</p>
          </footer>
        </div>

      </div>
    </div>
  );
}
